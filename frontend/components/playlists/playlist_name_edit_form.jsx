import React from 'react';

class PlaylistNameEditForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = props.playlist;

    }

    handletitle(e) {
        this.setState({ title: e.target.value })
    }

    handleSubmit(e) {
        this.props.updatePlaylist(this.state, [])
        this.setState({ title: '' })
        this.props.closeModal()
    }

    render() {
        return (
            <div className="modal-ep">
                <div><button className="close-ep" onClick={this.props.closeModal}>X</button></div>
                <div className="rename-playlist">Rename playlist</div>
                {/* <div className="ep-form"> */}
                    <form onSubmit={this.handleSubmit.bind(this)}>
                    <div className="ep-stuff">
                        <div><input className="form-ep" type="text" onChange={this.handletitle.bind(this)} value={this.state.title} autoFocus /></div>
                        {/* <input type="submit" /> */}
                        <div className="submit-edit"><input type="submit" className="edit-ep-button" value="rename" /></div>
                    </div>    
                    </form>
                {/* </div> */}
            </div>
        );
    }
}

export default PlaylistNameEditForm;
