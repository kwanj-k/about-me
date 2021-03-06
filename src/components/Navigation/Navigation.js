import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import WorkRoundedIcon from '@material-ui/icons/WorkRounded';
import AppsIcon from '@material-ui/icons/Apps';
import QuestionAnswerRoundedIcon from '@material-ui/icons/QuestionAnswerRounded';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import './Navigation.css';

function TabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<Typography
			component='div'
			role='tabpanel'
			hidden={value !== index}
			id={`scrollable-force-tabpanel-${index}`}
			aria-labelledby={`scrollable-force-tab-${index}`}
			{...other}
		>
			<Box p={3}>{children}</Box>
		</Typography>
	);
}

TabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.any.isRequired,
	value: PropTypes.any.isRequired
};

function a11yProps(index) {
	return {
	  id: `simple-tab-${index}`,
	  'aria-controls': `simple-tabpanel-${index}`,
	};
  }

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		width: '100%',
		backgroundColor: theme.palette.background.paper
	}
}));

export default function ScrollableTabsButtonForce() {
	const classes = useStyles();
	const [ value, setValue ] = React.useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<div className={classes.root}>
			<AppBar color='default' className='tabs'>
				<Tabs
					value={value}
					onChange={handleChange}
					variant='scrollable'
					scrollButtons='on'
					indicatorColor='primary'
					textColor='primary'
					aria-label='simple tabs example'
				>
					<Tab label='About Me' icon={<PersonPinIcon />} {...a11yProps(0)} href="#about"/>
					<Tab label='Experience' icon={<WorkRoundedIcon />} {...a11yProps(1)} href="#experience"/>
					<Tab label='Projects' icon={<AppsIcon />} {...a11yProps(2)} href="#projects"/>
					<Tab label='Skills' icon={<FavoriteIcon />} {...a11yProps(3)} href="#skills" />
					<Tab label='Contact Me' icon={<QuestionAnswerRoundedIcon />} {...a11yProps(4)} href="#contact" />
				</Tabs>
			</AppBar>
			<TabPanel value={value} index={0}>
				About Me
			</TabPanel>
			<TabPanel value={value} index={1}>
				Experience
			</TabPanel>
			<TabPanel value={value} index={2}>
				Projects
			</TabPanel>
			<TabPanel value={value} index={3}>
				Skills
			</TabPanel>
			<TabPanel value={value} index={4}>
				Contact Me
			</TabPanel>
		</div>
	);
}
