import React from 'react';
import { Button, Typography, LinearProgress } from '@material-ui/core';
import { lighten, withStyles } from '@material-ui/core/styles';

import './Skill.css';
import skillList from '../../utils/skill-list';

const BorderLinearProgress = withStyles({
	root: {
	  height: 10,
	  backgroundColor: lighten('#009688', 0.5),
	  borderRadius: 4
	},
	bar: {
	  borderRadius: 20,
	  backgroundColor: '#009688',
	  color: 'green'
	},
  })(LinearProgress);

export default function Skill({ skill }) {
	return (
		<React.Fragment>
			<Typography
				id="skills"
				variant='h2'
				display='block'
				align='center'
				style={{ margin: '1rem', fontSize: '1.6rem', textTransform: 'uppercase' }}
			>
				Skills
			</Typography>
			<div className='skill-container'>
				{skillList.map((skill, i) => (
					<div className='skill-img' key={i}>
						<Button variant="contained" color="primary" className='button'>
        					{skill.name}
      					</Button>
						<BorderLinearProgress variant="determinate" value={skill.value}/>
					</div>
				))}
			</div>
		</React.Fragment>
	);
}
