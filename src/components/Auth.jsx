import React, { Component } from 'react';

class Auth extends Component {

    render() {
        return (
            <div id={`auth`}>
                auth
                {this.props.children}
            </div>
        );
    }
}

export default Auth;
