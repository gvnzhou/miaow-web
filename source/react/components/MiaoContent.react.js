'use strict';

import React from 'react';
import {Publish} from './Publish.react'
import {DynamicsNav} from './DynamicsNav.react'
import {Dynamics} from './Dynamics.react'
import {MiniUserInfo} from './MiniUserInfo.react'
import {Friend} from './Friend.react'

class MiaoContent extends React.Component {
	render() {
		return (
			<div className="container">
				<div className="public-content">
					<Publish />
					<DynamicsNav />
					<Dynamics />
					<Dynamics />
					<Dynamics />
					<Dynamics />
					<Dynamics />
				</div>
				<div className="public-sidebar">
					<MiniUserInfo />
					<Friend />
				</div>
			</div>
		);
	}
}

export {MiaoContent}