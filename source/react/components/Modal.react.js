'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

function  ceateMask() {  // TODO:可以抽象成一个方法
    let maskElem= document.createElement('div');
    maskElem.id = 'mask';
    maskElem.className = 'mask';
    document.body.appendChild(maskElem);
}

function RegModal() { // 注册框
    const element = (
        <div className="modal">
            <h2>账号注册</h2>
            <div className="form">
                <input type="text" placeholder="用户名"/>
                <input type="password" placeholder="密码"/>
                <input type="password" placeholder="再次输入密码"/>
            </div>
            <button>立即注册</button>
        </div>
    );
    
    ceateMask();
    ReactDOM.render(
        element,
        document.getElementById('mask')
    );
}

export {RegModal}