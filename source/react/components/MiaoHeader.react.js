'use strict';

import React from 'react';
import {RegModal} from './Modal.react';

class TopNav extends React.Component {
	render() {
		return (
			<ul className = 'topnav'>
				<li onClick={RegModal}>注册</li>
				<li>登录</li>
			</ul>
		);
	}
}

class MiaoHeader extends React.Component {
	render() {
		return (
			<div className = 'header'>
				<div className = 'topbar'>
					<div>logo</div>
					<TopNav />
				</div>
			</div>
		);
	}
}

export {MiaoHeader}