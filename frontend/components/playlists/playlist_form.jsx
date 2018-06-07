import React from 'react';

class PlaylistForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = props.playlist;
    }

    handletitle(e) {
        this.setState({ title: e.target.value })
    }

    handleSubmit(e) {
        this.props.createPlaylist(this.state)
        this.setState({ title: '' })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <input type="text" onChange={this.handletitle.bind(this)} value={this.state.title} />
                    <input type="submit" value="create"/>
                </form>
            </div>
        );
    }
}

export default PlaylistForm;