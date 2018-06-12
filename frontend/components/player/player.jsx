import React from 'react';
import ReactPlayer from 'react-player'

class Player extends React.Component {
    constructor(props){
        super(props);
        this.state = { now_playing_song: this.props.play_now_song,
                       play_pause_toggle: true,
                       duration: null,
                       secondsElapsed: 0,
                       seeking: false
                      }
        // this.play_pause_toggle = true;
    }

    onDuration(duration){
        this.setState({ duration })
    }
    onProgress(progress){
        if (!this.state.duration) {
            return
        }

        const secondsElapsed = progress.played * this.state.duration

        if (secondsElapsed !== this.state.secondsElapsed) {
            this.setState({ secondsElapsed })
        }
    }

    componentWillReceiveProps(newProps){
        if(this.props.play_now_song !== newProps.play_now_song){
            this.setState({now_playing_song: newProps.play_now_song})
        }
    }

    play_next(){
        // debugger
        let current_song_index = this.props.now_playing_queue.findIndex(song => this.state.now_playing_song === song)
        let next_song = this.props.now_playing_queue[current_song_index + 1]
        if(typeof next_song === 'undefined'){
            this.setState({ now_playing_song: ''})
        } else {
            this.setState({now_playing_song: this.props.now_playing_queue[current_song_index + 1]})
        }

    }

    playPauseToggle(){
        // let play_pause_toggle = true 
        if(this.state.play_pause_toggle === true) {
            // debugger
            this.setState({play_pause_toggle: false})
        } else {
            this.setState({ play_pause_toggle: true })
        }
    }

    forward(){
        this.play_next()
    }

    rewind() {
        let current_song_index = this.props.now_playing_queue.findIndex(song => this.state.now_playing_song === song)
        let prev_song = this.props.now_playing_queue[current_song_index + 1]
        if (typeof prev_song === 'undefined') {
            this.setState({ now_playing_song: '' })
        } else {
            this.setState({ now_playing_song: this.props.now_playing_queue[current_song_index - 1] })
        }
    }

    ref(player){
        this.player = player;
    }



    handleMouseSeekDown(){
        this.setState({seeking: true});
    }

    handleMouseSeekUp(e){
        this.setState({seeking: false});
        this.player.seekTo(parseFloat(e.target.value))
        // this.handleSeek(e);
    }

    handleSeek(e){
        // e.preventDefault();

        this.setState({ secondsElapsed: e.target.value });
        // console.log(e.target.value, "heeyyyyy");
    }


    render() {
        let song_url;
        if(this.state.now_playing_song === ''){
            song_url = ''
        }  else {
            song_url = this.state.now_playing_song.song_url
        }
        return (
            <div className="main-footer">
                <button className="play-pause-t" onClick={this.playPauseToggle.bind(this)}>Play/Pause</button>
                <button className="next-t" onClick={this.forward.bind(this)}>N</button>
                <button className="prev-t" onClick={this.rewind.bind(this)}>P</button>
                <p>{this.state.secondsElapsed}></p>
                                                    <input 
                                                        className="seekbar-t" 
                                                        type="range" 
                                                        min="0"
                                                        onMouseDown={this.handleMouseSeekDown.bind(this)} 
                                                        onMouseUp={this.handleMouseSeekUp.bind(this)}
                                                        onChange={this.handleSeek.bind(this)}
                                                        max={this.state.duration} 
                                                        step="any" 
                                                        value={this.state.secondsElapsed}
                                                    />
                <p>{this.state.duration}></p>
                {/* <ReactPlayer url={this.state.now_playing_song.song_url} */}
                <ReactPlayer url={song_url}
                            playing = {this.state.play_pause_toggle}
                            // controls = {true}
                            //  width="600px"
                            //  height="5px"
                            onEnded={this.play_next.bind(this)}
                            ref={this.ref.bind(this)}
                            onDuration={this.onDuration.bind(this)}
                            onProgress={this.onProgress.bind(this)}
                            />
            </div>
        );
    }
}
export default Player;