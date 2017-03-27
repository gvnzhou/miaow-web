'use strict';

import React from 'react';

class DynamicsNav extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="dynamicsNav">
                <ul>
                    <li>全部</li>
                    <li>图片</li>
                    <li>视频</li>
                    <li>附近</li>
                </ul>
            </div>
        );
    }
}

export {DynamicsNav}