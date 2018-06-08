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
            <div>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <input type="text" onChange={this.handletitle.bind(this)} value={this.state.title} />
                    <input type="submit" value="rename" />
                </form>
            </div>
        );
    }
}

export default PlaylistNameEditForm;