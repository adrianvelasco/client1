import  React from 'react';
import clsx from 'clsx';
import { AppBar, Toolbar, IconButton } from '@material-ui/core';
import { useStyles } from './styles';
import MenuIcon from '@material-ui/icons/Menu';


const Navbar = ({open, handleDrawerOpen}) => {
  const classes = useStyles();

  return(
    <AppBar  position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
      <Toolbar className={classes.toolbar}>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
        >
          <MenuIcon />
        </IconButton>
        {/* <IconButton color="inherit">
          <Badge badgeContent={4} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton> */}
      </Toolbar>
    </AppBar>
  )
}

export default Navbar;