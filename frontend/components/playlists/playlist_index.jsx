import React from 'react';
import PlaylistIndexItem from './playlist_index_item';
import PlaylistFormContainer from './playlist_form_container';

class PlaylistIndex extends React.Component {
    componentDidMount() {
        this.props.fetchPlaylists();
    }

    componentWillReceiveProps(newProps){
        if(this.props.playlists.length !== newProps.playlists.length){
            this.props.fetchPlaylists()
        }
    }

    render() {
        return (
            <div>
                <ul>
                    {this.props.playlists.map(playlist => (<PlaylistIndexItem key={playlist.id} playlist={playlist} />))}
                </ul>
                <PlaylistFormContainer />
            </div>
        );
    }
}

export default PlaylistIndex;