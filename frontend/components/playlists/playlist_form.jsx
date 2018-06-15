import React from 'react';
import { debug } from 'util';

class PlaylistForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = props.playlist;
        this.focus = this.focus.bind(this);
        this.state = ({
            title: props.playlist.title,
            creator_id: props.playlist.creator_id,
            errors: ''
        })
    }

    focus() {
        this.textInput.focus();
    }

    escFunction(event) {
        if (event.keyCode === 27) {
            this.props.closeModal();
        }
    }

    componentDidMount(){
        document.addEventListener("keydown", this.escFunction.bind(this), false);
    }

    handletitle(e) {
        this.setState({ title: e.target.value })
    }

    renderErrors(e){
        
    }

    handleSubmit(e) {
        // e.preventDefault();
        // debugger;
        if(this.state.title === ''){
            this.renderErrors(e);
        } else {
            this.props.createPlaylist(this.state);
            this.setState({ title: '' });
            this.props.closeModal();
        }
    }

    // handleEsc(e) { 
    //     if(e.keyCode=== 27){
    //         e.preventDefault();
    //         // debugger;
    //         // this.props.createPlaylist(this.state)
    //         // this.setState({ title: '' })
    //         this.props.closeModal();
    //     }
    // }



    render() {
        return (
            <div className="modal-np">
                <button className="close-np" onClick={this.props.closeModal}>x</button>
                <div className="create-playlist">Create new playlist</div>
                <div className="cp-form">
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <div><input className="form-np" 
                                type="text" 
                                onChange={this.handletitle.bind(this)}
                                autoFocus
                                // onKeyPress={() => this.handleEsc()}
                                 value={this.state.title}
                                // ref={(input) => { this.textInput = input; }}
                                placeholder="Start Typing..."
                                 />
                    </div>
                    <div className="cp-buttons">
                        {/* <div className="cancel-cp"><button className="create-np-button2" onClick={this.props.closeModal}>CANCEL</button></div> */}
                            <div><input type="submit" className="create-np-button" value="CREATE" /></div>
                    </div>
                </form>
                </div>
            </div>
        );
    }
}

export default PlaylistForm;