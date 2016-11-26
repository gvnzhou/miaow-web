'use strict';

import React from 'react';

class Modal extends React.Component { // Modal组件
    constructor(props) {
        super(props);
    }
    render() {
        let modal = null;
        if (this.props.modalType === 1) {
            modal = <RegModal cbTopNav = {this.props.cbTopNav} />;
        } else if (this.props.modalType === 2) {
            modal = <LoginModal cbTopNav = {this.props.cbTopNav} />;
        }
        return (
            <div className="mask">
                {modal}
            </div>
        );
    }
}

class RegModal extends  React.Component { // 注册框组件
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="modal">
                <h2>账号注册</h2>
                <i className="fa fa-times" aria-hidden="true" onClick={this.props.cbTopNav}></i>
                <div className="form">
                    <div className="input-group">
                        <i className="fa fa-user-o" aria-hidden="true"></i><input type="text" placeholder="用户名"/>
                    </div>
                    <div className="input-group">
                        <i className="fa fa-lock" aria-hidden="true"></i><input type="password" placeholder="密码"/>
                    </div>
                    <div className="input-group">
                        <i className="fa fa-lock" aria-hidden="true"></i><input type="password" placeholder="再次输入密码"/>
                    </div>
                </div>
                <button>立即注册</button>
            </div>
        );
    }

}

class LoginModal extends  React.Component { // 登录框组件
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="modal">
                <h2>账号登录</h2>
                <i className="fa fa-times" aria-hidden="true" onClick={this.props.cbTopNav}></i>
                <div className="form">
                    <div className="input-group">
                        <i className="fa fa-user-o" aria-hidden="true"></i><input type="text" placeholder="用户名"/>
                    </div>
                    <div className="input-group">
                        <i className="fa fa-lock" aria-hidden="true"></i><input type="password" placeholder="密码"/>
                    </div>
                    <div className="login-option">
                        <div className="remeber">
                            <input type="checkbox" id="remeberMe"/><label htmlFor="remeberMe">记住我</label>
                        </div>
                        <a href="">忘记密码</a>
                    </div>
                </div>
                <button>立即登录</button>
            </div>
        );
    }
}

export {Modal}