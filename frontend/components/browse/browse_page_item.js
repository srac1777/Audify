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
                <div className="">
                    <div className="link-t"><Link to={`/playlists/${this.props.each_p.id}`}><img src={img_url}></img>{this.props.each_p.title}</Link></div>
                    {/* <div className="">{this.props.song.album_title}</div> */}
                </div>
            </div>
        );
    }
}



export default BrowsePageItem;