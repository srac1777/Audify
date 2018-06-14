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

    render() {
        let sr;
        if(typeof this.state.searchResults === 'undefined'){
            sr = <p>no results</p>
        } else {
            sr = this.state.searchResults.map( (result, idx) => (<SRIndexItemContainer 
                                                                        key={idx}
                                                                        send_key={idx}
                                                                        result={result}
                                                                        />) )
        }
        
        return (
            <div className="search-t">
                <form>
                    <div><p>Search for playlists and songs!</p><input
                        type="text"
                        onChange={(e) => this.handleInput(e)}
                        autoFocus
                        // onKeyPress={() => this.handleEsc()}
                        
                        // ref={(input) => { this.textInput = input; }}
                        placeholder="Start Typing..."
                    />
                    </div>
                </form>
                <ul>
                    {sr}
                </ul>
            </div>
        );
    }
}

export default Search;