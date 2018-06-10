import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import AddtoPlaylistContainer from '../add_to_playlist/atp_container';

function Modal({ modal, closeModal }) {
    // debugger
    if (!modal) {
        return null;
    }
    let component;
    switch (modal) {
        case 'atp':
        // debugger
            component = <AddtoPlaylistContainer />;
            break;
        default:
            return null;
    }
    return (
        <div onClick={closeModal}>
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