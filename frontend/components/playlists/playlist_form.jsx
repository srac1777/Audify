import React from 'react';
import { debug } from 'util';

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
        e.preventDefault();
        // debugger;
        this.props.createPlaylist(this.state)
        this.setState({ title: '' })
        this.props.closeModal()
    }

    handleSubmitEnter(e) {
        console.log("hi");     
        if(e.keyCode==='Enter'){
            e.preventDefault();
            // debugger;
            this.props.createPlaylist(this.state)
            this.setState({ title: '' })
            this.props.closeModal()
        }
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
                                onKeyPress={this.handleSubmitEnter.bind(this)}
                                 value={this.state.title}
                                // ref={(input) => { this.textInput = input; }}
                                placeholder="Start Typing..."
                                 />
                    </div>
                    <div className="cp-buttons">
                        <div className="cancel-cp"><button className="create-np-button2" onClick={this.props.closeModal}>CANCEL</button></div>
                            <div><button type="submit" className="create-np-button">CREATE</button></div>
                    </div>
                </form>
                </div>
            </div>
        );
    }
}

export default PlaylistForm;