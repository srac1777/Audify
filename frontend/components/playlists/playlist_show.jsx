import React from 'react';
import { Link } from 'react-router-dom';

class PlaylistShow extends React.Component {
    constructor(props){
        super(props);
    }
    componentDidMount() {
        this.props.fetchPlaylist(this.props.playlist.id)
    }

    
    render() {
        console.log(this.props.playlist);
        
        return (
            <div>
                {this.props.playlist.title}
            </div>
        );
    }
}

export default PlaylistShow;







// componentWillReceiveProps(nextProps) {
//     if (this.props.post.id != nextProps.match.params.postId) {
//         this.props.fetchPost(nextProps.match.params.postId);
//     }
// }