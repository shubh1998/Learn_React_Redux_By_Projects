import { Divider, Drawer, IconButton, List, ListItem, ListItemText, useTheme } from '@material-ui/core';
import React, { useState } from 'react'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { Fragment } from 'react';
import MenuIcon from '@material-ui/icons/Menu'
import { NavbarOptions } from "../NavbarOptions"
import { useHistory } from 'react-router';

const NavBarUsingDrawer = () => {
    const theme = useTheme();
    const [open, setOpen] = useState(false);
    const history = useHistory();

    const handleDrawerClose = () => {
        setOpen(false);
    };
    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleClick = (route) => {
        history.push(route)
    }

    return (
        <Fragment>
            <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="end"
                onClick={handleDrawerOpen}
            >
                <MenuIcon />
            </IconButton>
            <Drawer
                variant="persistent"
                anchor="right"
                open={open}
                style={{width : '20%'}}
            >
                <div>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </div>
                <Divider />
                <List>
                    {NavbarOptions.map((menuOptions) => (
                        <ListItem button key={menuOptions.key} onClick={() => handleClick(menuOptions.path)} >
                            <ListItemText primary={menuOptions.label} />
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        </Fragment>
    )
}

export default NavBarUsingDrawer
