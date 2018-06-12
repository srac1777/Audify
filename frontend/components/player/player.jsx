import React from 'react';
import ReactPlayer from 'react-player'

class Player extends React.Component {
    constructor(props){
        super(props);
        this.state = { now_playing_song: this.props.play_now_song,
                       play_pause_toggle: "nope",
                       duration: null,
                       secondsElapsed: 0,
                       seeking: false,
                       volume: 1,
                       v_changing: false
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
            this.setState({ play_pause_toggle: true})
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





    handleMouseVolumeDown() {
        this.setState({ v_changing: true });
    }

    handleMouseVolumeUp(e) {
        this.setState({ v_changing: false });
        // this.player.seekTo(parseFloat(e.target.value))
        // this.handleSeek(e);
    }

    handleVolume(e) {
        // e.preventDefault();

        this.setState({ volume: e.target.value });
        // console.log(e.target.value, "heeyyyyy");
    }









    prettyTime(time) {
        let minutes = Math.floor(time / 60);
        let seconds = Math.floor(time % 60);
        if (seconds < 10) {
            seconds = '0' + seconds
        }
        let finalTime = minutes + ':' + seconds;
        return finalTime;
    }


    render() {
        let song_url, song_details_title, song_details_artist;
        if(this.state.now_playing_song === ''){
            song_url = '';
            song_details_title = '';
            song_details_artist = '';
        }  else {
            song_url = this.state.now_playing_song.song_url
            song_details_title = this.state.now_playing_song.title;
            song_details_artist = this.state.now_playing_song.artist_name;
        }

        let ppbtn;
        if (this.state.play_pause_toggle === false || this.state.play_pause_toggle === "nope"){
            ppbtn = "play-btn";
        } else ppbtn = "pause-btn";

        let img_src;
        if (typeof this.state.now_playing_song.album_art === 'undefined') {
            img_src = "https://s3-us-west-1.amazonaws.com/audifymaster/fallback/no-pl-songs.png"
        } else {
            img_src = this.state.now_playing_song.album_art
        }
    


        // let minutes = Math.floor(this.state.secondsElapsed / 60);
        // let seconds = Math.floor(this.state.secondsElapsed % 60);
        // if(seconds < 10){
        //     seconds = '0'+seconds
        // }
        // let finalTime = minutes + ':' + seconds;
        return (
            <div className="main-footer">
                <div className="left-footer">
                    <div><img id="nwpl-album-art" src={img_src}></img></div>
                    <div className="nwpl-song-title">{song_details_title}</div>
                    <div className="nwpl-song-artist">{song_details_artist}</div>
                    {/* <div>{this.state.now_playing_song.album_title}</div> */}
                </div>
                <div className="main-player">
                    <div className="player-controller-btns">
                        <div><button className="next-btn" onClick={this.forward.bind(this)}></button></div>
                        <div><button className={ppbtn} onClick={this.playPauseToggle.bind(this)}></button></div>
                        <div><button className="prev-btn" onClick={this.rewind.bind(this)}></button></div>
                    </div>
                    <div>
                        <div className="under-controller">
                            <div className="duration-time"><p>{this.prettyTime(this.state.secondsElapsed)}</p></div>
                                    <div className="seekbar-con"><input 
                                        className="seekbar-main" 
                                        type="range" 
                                        min="0"
                                        onMouseDown={this.handleMouseSeekDown.bind(this)} 
                                        onMouseUp={this.handleMouseSeekUp.bind(this)}
                                        onChange={this.handleSeek.bind(this)}
                                        max={this.state.duration} 
                                        step="any" 
                                        value={this.state.secondsElapsed}
                                    /></div>
                            <div className="duration-time"><p>{this.prettyTime(this.state.duration)}</p></div>
                        </div>     
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
                                    volume={this.state.volume}
                                    />
                    </div>
                </div>
                <div className="right-footer">
                    <div className="volume-icon"></div>
                    <div><input
                        className="volume-bar"
                        type="range"
                        min="0"
                        onMouseDown={this.handleMouseVolumeDown.bind(this)}
                        onMouseUp={this.handleMouseVolumeUp.bind(this)}
                        onChange={this.handleVolume.bind(this)}
                        max="1"
                        step="any"
                        value={this.state.volume}
                    /></div>
                </div>
            </div>
        );
    }
}
export default Player;