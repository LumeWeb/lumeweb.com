import React from 'react'
import Grid from 'dynamic-react-grid'
import './GridStyles.css'

function Grids() {
    return (
        <div className='centered'>
            <div className='column'>
                <div className='grid-container'
                    style={
                        {padding: 50}
                }>
                    <Grid row
                        spacing={10}>
                        <div className='bordered'>
                            <Grid xs>
                                <h5 className='h5-padding'>Web3 Universal Storage</h5><br/><h6>Get access to a universal network drive, powered by the Web3/dWeb cloud. Enjoy portability to any device or platform you wish.
                                </h6>
                            </Grid>
                        </div>
                        <div className='bordered'>
                            <Grid xs>
                                <h5 className='h5-padding'>Web3 Gateway</h5>
                                <h6>Install the Lume Web3 Extension and have a 1-click gateway into the Web3 internet on Opera, Vivaldi, Edge, and Firefox.
                                </h6>
                            </Grid>
                        </div>
                        <div className='bordered'>
                            <Grid xs>
                                <h5 className='h5-padding'>Build Your Site,<br/>Censorship Free</h5>
                                <h6>Combining Lume and Skynet technologies, you can build a website just like you are on the Web2 internet.</h6>
                            </Grid>
                        </div>
                    </Grid>
                </div>
                <div style={
                    {padding: 50}
                } className='div2'>
                    <Grid row
                        spacing={10}>
                        <div className='bordered'>
                            <Grid xs>
                                <h5 className='h5-padding'>Web3 Universal Storage</h5><br/><h6>Get access to a universal network drive, powered by the Web3/dWeb cloud. Enjoy portability to any device or platform you wish.
                                </h6>
                            </Grid>
                        </div>
                        <div className='bordered'>
                            <Grid xs>
                                <h5 className='h5-padding'>Web3 Gateway</h5>
                                <h6>Install the Lume Web3 Extension and have a 1-click gateway into the Web3 internet on Opera, Vivaldi, Edge, and Firefox.
                                </h6>
                            </Grid>
                        </div>
                        <div className='bordered'>
                            <Grid xs>
                                <h5 className='h5-padding'>Build Your Site,<br/>Censorship Free</h5>
                                <h6>Combining Lume and Skynet technologies, you can build a website just like you are on the Web2 internet.</h6>
                            </Grid>
                        </div>
                    </Grid>
                </div>
            </div>
        </div>
    )
}

export default Grids
