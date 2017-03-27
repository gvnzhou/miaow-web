'use strict';

import React from 'react';

class Publish extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div className="publish-content">
                <p>新动态</p>
                <textarea placeholder="分享那些和Ta在一起的日子吧......">
                </textarea>
                <ul>
                    <li>表情</li>
                    <li>图片</li>
                    <li>视频</li>
                    <li>公开</li>
                </ul>
                <button>发布</button>
            </div>
        );
    }
}

export {Publish}