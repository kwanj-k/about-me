import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { IconButton, CardActions } from '@material-ui/core';
import GitHub from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

import '../scss/contact.css';

const useStyles = makeStyles(theme => ({
    // root: {
    //     '& .MuiTextField-root': {
    //         margin: theme.spacing(1),
    //     },
    // },
    // button: {
    //     margin: theme.spacing(1),
    // },
}));

export default function Contact() {
    const classes = useStyles();

    return (
        <div className="contact">
            <React.Fragment >
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <div
                        className='contact-form'
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            padding: '25px',
                            borderRadius: '10px',
                        }}
                    >
                        <div style={{marginLeft: '30%' }}>
                            <h1>Contact Me</h1>
                        </div>
                        <CardActions disableSpacing className='card-actions'>
                            <IconButton title='See GitHub profile' aria-label='Github' href="https://github.com/kwanj-k">
                                <GitHub />
                            </IconButton>
                            <IconButton title='See twitter profile' aria-label='Twitter' href="https://twitter.com/KwanjKay">
                                <TwitterIcon />
                            </IconButton>
                            <IconButton title='Linkedin' aria-label='Linkedin' href="www.linkedin.com/in/kwanj-k">
                                <LinkedInIcon />
                            </IconButton>
                        </CardActions>
                        <div className=''>
                            <form className="" noValidate autoComplete="off"
                                action="https://formspree.io/mnqdnaby" method="POST"
                            >
                                <div>
                                    <TextField
                                        id="standard-multiline-flexible"
                                        label="Name"
                                        rowsMax="8"
                                        name="name"
                                    />
                                </div>
                                <div>
                                    <TextField
                                        id="standard-multiline-flexible"
                                        label="Email"
                                        rowsMax="8"
                                        name="_replyto"
                                    />
                                </div>
                                <div>
                                    <TextField
                                        id="outlined-textarea"
                                        label="Message"
                                        placeholder="Message"
                                        multiline
                                        variant="outlined"
                                        name="message"
                                    />
                                </div>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    className={classes.button}
                                    type="submit"
                                >
                                    Send
							</Button>
                            </form>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        </div>

    );
}
