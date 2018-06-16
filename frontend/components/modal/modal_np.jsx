import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import AddtoPlaylistContainer from '../add_to_playlist/atp_container';
import PlaylistFormContainer from '../playlists/playlist_form_container';

function Modal(props) {
    // console.log(props);
    
    if (!props.modal) {
        return null;
    }
    let component;
    switch (props.modal) {
        case 'atp':
            component = <AddtoPlaylistContainer />;
            break;
        case 'np':
            component = <PlaylistFormContainer />;
            break;
        default:
            return null;
    }
    return (
        <div>
            <div onClick={e => e.stopPropagation()}>
                {/* <button className="close-np" onClick={() => props.closeModal()}>hello</button> */}
                {component}
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        modal: state.ui.modal
    };
};

const mapDispatchToProps = dispatch => {
    return {
        closeModal: () => dispatch(closeModal())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);