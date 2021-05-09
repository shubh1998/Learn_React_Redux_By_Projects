import { Button, IconButton, makeStyles } from '@material-ui/core';
import { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import Brightness4Icon from '@material-ui/icons/Brightness4'
import Brightness7Icon from '@material-ui/icons/Brightness7'
import { NavbarOptions } from "../NavbarOptions"

const useStyle = makeStyles((theme)=>({
    inActiveOption: {
        color: theme.palette.common.white,
        textDecoration: "none",
        paddingLeft: 10
    },
    activeOption: {
        color: "yellow",
        paddingLeft: 10
    },  
}))

const NavbarForDesktopView = ({ defaultTheme, setDefaultTheme }) => {
    const classes = useStyle();
    
    return (
        <Fragment>
            {
                NavbarOptions.map(route => (
                    <NavLink to={ `${route.path}` } className={classes.inActiveOption} activeClassName={classes.activeOption} exact key={route.key}>
                        <Button color="inherit" size="medium" variant="outlined">
                            { route.label }
                        </Button>
                    </NavLink>
                ))
            }
            <IconButton color="inherit" onClick={() => setDefaultTheme(!defaultTheme)}>
                {
                    defaultTheme ? <Brightness4Icon /> : <Brightness7Icon />
                }
            </IconButton>
        </Fragment>
    )
}

export default NavbarForDesktopView
