import { connect } from 'react-redux';

import { logout } from '../../actions/session_actions';
import Logout from './logout';

// const mapStateToProps = ({ session }) => {
//     return {
//         currentUser: session.currentUser
//     };
// };

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout())
});

export default connect(
    null,
    mapDispatchToProps
)(Logout);