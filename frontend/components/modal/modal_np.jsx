import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import AddtoPlaylistContainer from '../add_to_playlist/atp_container';
import PlaylistFormContainer from '../playlists/playlist_form_container';

function Modal({ modal, closeModal }) {
    if (!modal) {
        return null;
    }
    let component;
    switch (modal) {
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
        <div onClick={closeModal}> x
            <div onClick={e => e.stopPropagation()}>
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