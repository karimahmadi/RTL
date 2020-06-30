import React from 'react';
import PropTypes from 'prop-types';
import {create} from 'jss';
import rtl from 'jss-rtl';
import {StylesProvider, jssPreset} from '@material-ui/core/styles';

// Configure JSS
const jss = create({plugins: [...jssPreset().plugins, rtl()]});


function RTL(props) {
	return (
		<StylesProvider jss={jss}>
			<div dir="rtl">
				{props.children}
			</div>
		</StylesProvider>
	);
}

RTL.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.array,
		PropTypes.node
	])
};

export default RTL;
