import React from 'react';
import BrowsePageItem from './browse_page_item';


class BrowsePage extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount(){
        this.props.fetchPlaylists()
    }

    render() {
        if(typeof this.props.all_playlists === 'undefined') {
            return (<div></div>);
        }
        return (
        <div className="browse-full-container">
            <div className="browse-title">Browse playlists by other Audify users</div>
            <div className="browse-page-full">
                {this.props.all_playlists.map( each_p => (<BrowsePageItem
                                                                            key={each_p.id}
                                                                            each_p={each_p}
                                                                            />)
                                                                            )
                                                                        }
            </div>
        </div>
        );
    }
}

export default BrowsePage;