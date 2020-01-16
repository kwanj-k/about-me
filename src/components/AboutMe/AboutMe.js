import React from 'react';
import portfolio from '../../utils/portfolio.jpg';
import { Typography } from '@material-ui/core';
import './AboutMe.css';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';

const AboutMe = () => {
    return (
		<React.Fragment >
            <Typography
            id="about"
            variant='h2'
            display='block'
            align='center'
            style={{ margin: '1rem', fontSize: '1.6rem', textTransform: 'uppercase' }}
            >
                About Me
            </Typography>   
            <div className="name" >
                <img src={portfolio} alt="profile_photo" className="img"/>
                <h1>Kelvin Mwangi</h1>  
                <h3>Software Engineer</h3>        
            </div>
            <p>
                Hi, i'm Kenyan based Software Engineer who loves to write software to build great products and help businesses succeed with their goals. 
                I started coding in 2017 and havent stopped ever since. I enjoy learning new things and video games at times. <br></br><br></br>
                <PhoneIphoneIcon/>  +254-703-852-333
            </p>
        </React.Fragment>
        )
}

export default AboutMe;