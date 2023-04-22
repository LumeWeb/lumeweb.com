import React from 'react'
import Grid from 'dynamic-react-grid'
import './FooterStyles.css'

function Footer() {
    return (
        <div className='footer-column'>
            <div className='footer-container'
                style={
                    {padding: 15}
            }>
                <Grid row
                    spacing={0}>
                        <Grid xs>
                            <h6>
                                <div className="footer-logo"></div>
                                <ul>
                                <li className='footer-li'><span  className='footer-email'></span>contact@lumeweb.com</li>
                                <li><span className='footer-h2'>Freedom, privacy, <br />ownership.</span></li>
                                </ul>
                            </h6>
                        </Grid>
                        <Grid xs>
                            <h5 className='footer-padding'>General</h5><br/><h6>
                                <li className='footer-li'>Home</li>
                                <li className='footer-li'>Get Started</li>
                                <li className='footer-li'>Documentation</li>
                                <li className='footer-li'>Projects</li>
                            </h6>
                        </Grid>
                        <Grid xs>
                            <h5 className='footer-padding'>Community</h5><br/><h6>
                                <li className='footer-li'>GitHub</li>
                                <li className='footer-li'>Discord</li>
                                <li className='footer-li'>Twitter</li>
                                <li className='footer-li'>facebook</li>
                            </h6>
                        </Grid>
                        <Grid xs>
                            <h5 className='footer-padding'>Other</h5><br/><h6>
                                <li className='footer-li'>BrowserUniversal</li>
                                <li className='footer-li'>Storage</li>
                            </h6>
                        </Grid>
                        <Grid xs>
                            <h5 className='footer-padding'>Other</h5><br/><h6>
                                <li className='footer-li'>BrowserUniversal</li>
                                <li className='footer-li'>Storage</li>
                            </h6>
                        </Grid>
                        <Grid xs>
                            <h5 className='footer-padding'>Support Us</h5><br/><h6>
                                <li className='footer-li'>Donate</li>
                                <li className='footer-li'>Download App</li>
                                <li className='footer-li'>Partnerships</li>
                            </h6>
                        </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default Footer
