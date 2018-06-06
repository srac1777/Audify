import React from 'react';
import { logout } from '../../actions/session_actions';
import LogoutContainer from '../session_form/logout_container';
import UserContainer from '../temp/user_container';

class DemoPage extends React.Component {
    render() {
        return (
            <div>
                <LogoutContainer />
                {/* <button onClick={() => dispatch(logout()).then(this.props.history.push('/'))}>Logout</button> */}
                <UserContainer />
                You are logged in!
            </div>
        );
    }
}

export default DemoPage;