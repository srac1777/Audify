import React from 'react';
import { Link } from 'react-router-dom';


class BrowsePageItem extends React.Component {
    constructor(props) {
        super(props);
    }

    // componentWillReceiveProps(newProps){
    //     if(this.props.each_p != newProps.each_pf){
    //         // debugger

    //     }
    // }

    // handleClick() {
    //     // console.log(this.props);

    //     // debugger
    //     this.props.songClick(this.props.song);
    //     // debugger

    //     this.props.openModal('atp');
    // }

    // handlePlayClick() {
    //     // debugger
    //     this.props.playNow(this.props.song.id - 1);
    //     this.props.nowPlayingQueue(this.props.current_songs_list);
    // }



    render() {
        // debugger
        let img_url;

        if (typeof this.props.each_p.songs[0] === 'undefined') {
            img_url = "https://s3-us-west-1.amazonaws.com/audifymaster/fallback/no-pl-songs.png"
        } else {
            img_url = this.props.each_p.songs[0].album_art
        }

        return (
            <div className="each-pf" >
                
                    <Link to={`/playlists/${this.props.each_p.id}`}>
                        <div className="each-pf-item">
                            <div><img className="browse-aa" src={img_url}></img></div>
                            <div className="each-pf-item-title">{this.props.each_p.title}</div>
                            <div className="each-pf-item-by">by</div>
                            <div className="each-pf-item-creator">{this.props.each_p.creator_name}</div>
                        </div>
                    </Link>
                
            </div>
        );
    }
}



export default BrowsePageItem;