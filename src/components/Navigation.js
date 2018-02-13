import React from 'react'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import IconButton from 'material-ui/IconButton'
import MenuIcon from 'material-ui-icons/Menu'
import Button from 'material-ui/Button'

// With Styles
import { withStyles } from 'material-ui/styles'

// With Theme
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import { withTheme } from 'material-ui/styles'
import blue from 'material-ui/colors/blue'

const theme = createMuiTheme({
    palette: {
        primary: blue,
    },
});

const styles = {
    root: {
        width: '100%',
    },
    flex: {
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
        <div className={classes.root}>
            <MuiThemeProvider theme={theme}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="title" color="inherit" className={classes.flex}>
                            Title
                        </Typography>
                        <Button color="inherit">Login</Button>
                    </Toolbar>
                </AppBar>
            </MuiThemeProvider>
        </div>
    )
}

export default withStyles(styles)(Navigation)