'use strict';

import React from 'react';

class Dynamics extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="dynamics">
                <div className="user">
                    <img src="./images/1.png" alt=""/>
                    <div className="userInfo">
                        <p>Javion</p>
                        <p>2016年11月26日22:54:52</p>
                        <div className="content">
                            哈哈哈哈嗨 //@五行属二:多才多艺。。。 //@图院长:哈哈哈哈哈哈哈 //@萌了个包:佩服佩服 //@这个微博有点贱:厉害了 //@娱乐星公子:我服
                        </div>
                    </div>
                </div>
                <ul className="content-option">
                    <li>收藏</li>
                    <li>评论</li>
                    <li>转发</li>
                </ul>
            </div>
        );
    }
}

export {Dynamics}