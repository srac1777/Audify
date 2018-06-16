import React from 'react';
import { debug } from 'util';



class DeletePlaylist extends React.Component {
    constructor(props) {
        super(props);
        this.state = props.playlist;

    }

    handleDelete(e) {
        e.stopPropagation();
        // console.log(this.props, "lololololol")
        
        this.props.deletePlaylist(this.props.playlist.id);
        this.props.closeModal();
        // debugger
        this.props.history.push('/home');
        
    }


    // handleSubmit(e) {
    //     // this.props.updatePlaylist(this.state, [])
    //     // this.setState({ title: '' })
    // }

    render() {
        return (
            <div className="modal-ep">
                <div><button className="close-ep" onClick={this.props.closeModal}>x</button></div>
                <div className="delete-playlist-modal">Do you really want to delete this playlist?</div>
                <div><button className="delete-pl-button-modal" onClick={this.handleDelete.bind(this)}>Delete</button></div>
            </div>
        );
    }
}

export default DeletePlaylist;