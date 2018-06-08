import React from 'react';
import { Link } from 'react-router-dom';
import Modal from '../modal/modal_ep';

class PlaylistShow extends React.Component {
    constructor(props){
        super(props);
    }
    componentDidMount() {
        this.props.fetchPlaylist(this.props.playlist.id)
    }

    handleClick() {
        this.props.openModal('ep')
    }
    
    render() {
        console.log(this.props.playlist);
        
        return (
            <div>
                {this.props.playlist.title}
                <Modal />
                <button onClick={this.handleClick.bind(this)}>rename</button>
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