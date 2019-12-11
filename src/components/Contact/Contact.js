import React from 'react';
import { Typography, IconButton, CardActions } from '@material-ui/core';
import GitHub from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import MailIcon from '@material-ui/icons/Mail';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

import './Contact.css';


export default function ContactForm() {
	
	return (
		<React.Fragment >
			<Typography
                id="contact"
				variant='h2'
				display='block'
				align='center'
				style={{ margin: '1rem', fontSize: '1.6rem', textTransform: 'uppercase' }}
			>
				Contact Me
			</Typography>
			<div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
				<div
					className='contact-form'
					style={{
						backgroundColor: '#fff',
						display: 'flex',
						flexDirection: 'column',
						padding: '25px',
                        borderRadius: '10px',
					}}
				>
                    <CardActions disableSpacing className='card-actions'>
                        <IconButton title='See GitHub profile' aria-label='Github' href="https://github.com/kwanj-k">
                            <GitHub />
                        </IconButton>
                        <IconButton title='See twitter profile' aria-label='Twitter' href="https://twitter.com/KwanjKay">
                            <TwitterIcon />
                        </IconButton>
                        <IconButton title='Send mail' aria-label='gmail' href="mailto:mwangikelvin23@gmail.com">
                            <MailIcon />
                        </IconButton>
                        <IconButton title='Linkedin' aria-label='Linkedin' href="www.linkedin.com/in/kwanj-k">
                            <LinkedInIcon />
                        </IconButton>
                    </CardActions>
			    </div>
            </div>
		</React.Fragment>
	);
}
