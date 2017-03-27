'use strict';

import React from 'react';
import {MiaoHeader} from './MiaoHeader.react';
import {MiaoContent} from './MiaoContent.react';
import {MiaoFooter} from './MiaoFooter.react';

class Application extends React.Component {
	render() {
		return (
			<div>
				<MiaoHeader />
				<MiaoContent />
				<MiaoFooter />
			</div>
		);
	}
}

export {Application}