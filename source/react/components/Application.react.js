'use strict';

import React from 'react';
import {MiaoHeader} from './MiaoHeader.react';
import {MiaoContent} from './MiaoContent.react';

class Application extends React.Component {
	render() {
		return (
			<div>
				<MiaoHeader />
				<MiaoContent />
			</div>
		);
	}
}

export {Application}