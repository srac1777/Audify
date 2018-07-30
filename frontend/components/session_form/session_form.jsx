import React from 'react';
import { Redirect, Link, withRouter } from 'react-router-dom';
// import _ from 'lodash';
import isEqual from 'lodash/isEqual';


class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
        this.handleUsernameChange = this.handleUsernameChange.bind(this)
        this.handlePasswordChange = this.handlePasswordChange.bind(this)
    }

    componentWillUnmount(){
        this.props.clearErrors([]);
    }

    handleUsernameChange(e) {
        this.props.clearErrors([]);
        this.setState({username: e.currentTarget.value});
    }

    handlePasswordChange(e) {
        this.props.clearErrors([]);
        this.setState({ password: e.currentTarget.value });
    }

    handleSubmit(e) {
        if(typeof e !== 'undefined') e.preventDefault();
        this.props.submitForm(this.state);
    }

    handleDemoSubmit(e) {
        if (typeof e !== 'undefined') e.preventDefault();
        this.props.demoLogin(this.state);
    }



    handleDemo(e) {
        this.setState({ username: "itspronouncedjif", password: "password" }, () => this.handleDemoSubmit());
    }


    renderErrors() {
        let errs = this.props.errors;
        // if (isEqual(this.state,{ username: "", password: "" })) errs = [];
        return (
            <ul className="errors">
                {errs.map((error, i) => (
                    <li key={`error-${i}`} >
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        let demo;
        let loginorsignup;
        let err;
        if(this.props.formType === 'LOG IN'){
            demo = (<span><button className="demo-login-fb" onClick={this.handleDemo.bind(this)}>DEMO LOGIN</button>
            <p className="or">- OR -</p></span>)
            loginorsignup = (<div>Don't have an account? <Link to="/signup" className="ss">Sign Up</Link></div>)
        } else {
            demo = (<span><button className="demo-login-fb" onClick={this.handleDemo.bind(this)}>DEMO LOGIN</button>
                <p className="or">- OR -</p></span>)
            loginorsignup = (<div>Already have an account? <Link to="/login" className="ss">Log in</Link></div>)
            
        }

        return (
            <div className="AllSession">
                <div className="sessionlogo-container">
                    <div className="sessionlogo"></div>
                </div>
                <div className="allform">
                    {demo}
                <form>
                    <div>
                            <input type="text" 
                                value={this.state.username}
                                onChange={this.handleUsernameChange}
                                className="usernameform"
                                placeholder="Username"
                                autoFocus
                                />
                        <br />
                            <input type="password"
                                value={this.state.password}
                                onChange={this.handlePasswordChange}
                                className="passwordform"
                                placeholder="Password"
                                />
                        <br />
                                {this.renderErrors()}
                            <div className="submitcontainer"><button onClick={this.handleSubmit.bind(this)} className="submitForm">{this.props.formType}</button></div>
                    </div>
                </form>
                </div>
                {loginorsignup}
                <div className="tc"> If you click "Demo Login" and are not a Audify user, you are invited to visit my <a href="https://github.com/srac1777" className="ss1">Github</a> and <a href="https://www.linkedin.com/in/shashankracherla/" className="ss1">LinkedIn</a></div>
            </div>
        );
    }
}

export default withRouter(SessionForm);