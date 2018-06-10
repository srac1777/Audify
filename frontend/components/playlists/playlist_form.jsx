import React from 'react';

class PlaylistForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = props.playlist;
        this.focus = this.focus.bind(this);
    }

    focus() {
        this.textInput.focus();
    }

    handletitle(e) {
        this.setState({ title: e.target.value })
    }

    handleSubmit(e) {
        this.props.createPlaylist(this.state)
        this.setState({ title: '' })
        this.props.closeModal()
    }



    render() {
        return (
            <div className="modal-np">
                <button className="close-np" onClick={this.props.closeModal}>X</button>
                <div className="create-playlist">Create new playlist</div>
                <div className="cp-form">
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <div><input className="form-np" 
                                type="text" 
                                onChange={this.handletitle.bind(this)}
                                 value={this.state.title}
                                ref={(input) => { this.textInput = input; }}
                                placeholder="Start Typing..."
                                 />
                    </div>
                    <div className="cp-buttons">
                        <div className="cancel-cp"><button className="create-np-button2" onClick={this.props.closeModal}>CANCEL</button></div>
                        <div><input className="create-np-button" type="submit" value="create"/></div>
                    </div>
                </form>
                </div>
            </div>
        );
    }
}

export default PlaylistForm;