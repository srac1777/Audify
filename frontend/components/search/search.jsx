import React from 'react';
import SRIndexItemContainer from './sr_index_item_container';

class Search extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            searchResults: this.props.searchResults
        }
    
    }

    handleInput(e){
        // setTimeout(() => this.props.fetchSearchResults(e.target.value), 500);
        // debugger
        if(e.target.value !== '') 
        {
            this.props.fetchSearchResults(e.target.value);
        }
        // console.log(this.props.searchResults);
        
    }

    componentWillReceiveProps(newProps){
        if (this.props.searchResults !== newProps.searchResults){
            this.setState({searchResults: newProps.searchResults})
        }
    }

    componentWillUnmount(){
        // debugger;
        this.props.clearSearch();
    }

    render() {
        let sr;
        if(typeof this.state.searchResults === 'undefined'){
            sr = <p></p>
        } else {
            sr = this.state.searchResults.map( (result, idx) => (<SRIndexItemContainer 
                                                                        key={idx}
                                                                        send_key={idx}
                                                                        result={result}
                                                                        />) )
        }
        
        return (
            <div className="search-full">
                <div className="search-top">
                    <div className="search-top-tiny-text">
                        <p>Search for a Song or a Playlist</p>
                    </div>
                    <div className="search-input">
                        <form >
                            <input
                                className="search-input-actual-input"
                                type="text"
                                onChange={(e) => this.handleInput(e)}
                                autoFocus
                                // onKeyPress={() => this.handleEsc()}
                                
                                // ref={(input) => { this.textInput = input; }}
                                placeholder="Start typing..."
                            />
                        </form>
                    </div>
                </div>
                <div className="search-results-container">
                    <div className="sr-ul">
                        {sr}
                    </div>
                </div>
            </div>
        );
    }
}

export default Search;