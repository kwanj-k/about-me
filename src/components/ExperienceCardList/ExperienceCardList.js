import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import experience_list from '../../utils/experience-list';
import ProjectCard from '../ProjectCard/ProjectCard';

const useStyles = makeStyles({
	'spacing-xs-4': {
		width: 'inherit',
		margin: 0
	}
});

export default function ExperienceCardList() {
	const classes = useStyles();

	return (
        <div >
            <React.Fragment>
                <Typography
                    id="experience"
                    variant='h2'
                    display='block'
                    align='center'
                    style={{ margin: '1rem', fontSize: '1.6rem', textTransform: 'uppercase' }}
                >
                    Experience
                </Typography>
                <Grid
                    container
                    spacing={4}
                    style={{ flexGrow: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                    classes={{
                        'spacing-xs-4': classes['spacing-xs-4'] // overriding defaults as it was causing horizontal scroll
                    }}
                >
                    {experience_list.map((project, i) => <ProjectCard project={project} key={i} />)}
                </Grid>
            </React.Fragment>
        </div>
	);
}
