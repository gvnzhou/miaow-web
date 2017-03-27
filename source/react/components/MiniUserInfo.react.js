'use strict';

import React from 'react';

class MiniUserInfo extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="miniUserInfo">
                <h2>账号登录</h2>
                <div className="form">
                    <div className="input-group">
                        <i className="fa fa-user-o" aria-hidden="true"></i><input type="text" placeholder="用户名"/>
                    </div>
                    <div className="input-group">
                        <i className="fa fa-lock" aria-hidden="true"></i><input type="password" placeholder="密码"/>
                    </div>
                </div>
                <button className="btn">立即登录</button>
            </div>
        );
    }
}

export {MiniUserInfo}