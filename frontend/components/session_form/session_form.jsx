import React from 'react';
import { withRouter } from 'react-router-dom';
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
        // this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleUsernameChange(e) {
        this.setState({username: e.currentTarget.value});
    }

    handlePasswordChange(e) {
        this.setState({ password: e.currentTarget.value });
    }

    handleSubmit(e) {
        if(typeof e !== 'undefined') e.preventDefault();
        this.props.submitForm(this.state);
    }
    sleep(ms) {
    var start = new Date().getTime(), expire = start + ms;
    while (new Date().getTime() < expire) { }
    return;
}

    handleDemo(e) {
        // let fn = (res) => (this.setState({username: res}))
        this.setState({username: "itspronouncedjif"});
        // const un = "itspronouncedjif".split('');
        // let result = "";
        // for (let i = 0; i < un.length; i++) {
            // debugger
            // result+=un[i];
            // setTimeout(fn.bind(null,result), 1000);
        // }
        this.setState({password: "password"});
        // this.handleSubmit.bind(this)();
    }

    // componentWillReceiveProps(newProps){
    //     debugger;
    //     console.log(newProps);
    //     if(this.props.state !== newProps.state){
    //         this.props.errors = [];
    //     }
    // }

    renderErrors() {
        let errs = this.props.errors;
        console.log(this.state);
        if (isEqual(this.state,{ username: "", password: "" })) errs = [];
        return (
            <ul>
                {errs.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        let demo;
        let err;
        if(this.props.formType === 'login'){
             demo = (<button onClick={this.handleDemo.bind(this)}>Demo</button>)
        } else {
            demo = (<div></div>)
        }

        // if (this.state === { username: "", password: "" }) {
        //     err = this.renderErrors; 
        // } else {
        //     err = (() => <div>hi</div>);
        // }
        return (
            <div>
                <form onSubmit={ this.handleSubmit.bind(this) }>
                    {this.renderErrors()}
                    <div>
                        <label>Username:
                            <input type="text" 
                                value={this.state.username}
                                onChange={this.handleUsernameChange}
                            />
                        </label>
                        <br />
                        <label>Password:
                            <input type="text"
                                value={this.state.password}
                                onChange={this.handlePasswordChange}
                            />
                        </label>
                        <br />
                        <input type="submit" value={this.props.formType} />
                        {demo}
                        {/* <button onClick={this.handleDemo.bind(this)}>Demo</button> */}
                    </div>
                </form>
            </div>
        );
    }
}

export default withRouter(SessionForm);