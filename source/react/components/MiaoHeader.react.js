'use strict';

import React from 'react';
import {Modal} from './Modal.react';

class TopNav extends React.Component {
	constructor(props){
		super(props);
		this.showModalClick = this.showModalClick.bind(this);
		this.hideModalClick = this.hideModalClick.bind(this);
		this.state={modalType:0};
	}

	showModalClick(type) {
		this.setState({modalType: type});
	}

	hideModalClick() {
		this.setState({modalType: 0});
	}

	render() {
		const  modalType = this.state.modalType;
		let RegType = 1;
		let LoginType = 2;

		let modal = null;
		if (modalType === RegType) {
			modal = <Modal cbTopNav = {this.hideModalClick} modalType = {RegType} />;
		} else if (modalType === LoginType) {
			modal = <Modal cbTopNav = {this.hideModalClick} modalType = {LoginType} />;
		}
		return (
			<ul className = 'topnav'>
				<li onClick={() => {this.showModalClick(RegType)}}>注册</li>
				<li onClick={() => {this.showModalClick(LoginType)}}>登录</li>
				{modal}
			</ul>
		);
	}
}

class MiaoHeader extends React.Component {
	render() {
		return (
			<div className = 'header'>
				<div className = 'topbar'>
					<div className="logo">logo</div>
					<TopNav />
				</div>
			</div>
		);
	}
}

export {MiaoHeader}