import React from 'react'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import IconButton from 'material-ui/IconButton'
import MenuIcon from 'material-ui-icons/Menu'
import Button from 'material-ui/Button'
import { withStyles } from 'material-ui/styles'
import logo from '../assets/images/logo.png'

const styles = {
    appBar: {
        width: '100%',
    },
    pullRight: {
        flex: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
};

function Navigation(props){
    const { classes } = props;
    return(
        <div className={classes.appBar}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                        <img src={logo} />
                    </IconButton>
                    <Typography variant="headline" color="inherit" className={classes.pullRight}>
                        headybeats
                    </Typography>
                    <Button color="inherit" background-color="primary.light">Login</Button>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default withStyles(styles)(Navigation)