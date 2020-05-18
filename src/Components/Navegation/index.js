import React, {useState} from 'react'
import { Container } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import { useStyles } from './styles';
import Navbar from './Appbar';
import Desktop from './Drawer';
import { useRouter } from 'next/router'



const Navegation = ({children}) => {
  const classes = useStyles();
  const [open, setOpen] = useState(true);

  const router = useRouter();
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  return(
    <div>
      {
        router.pathname === '/login' ? (
          <div>
            <main className={classes.content}>
              {children}
            </main>
          </div>
        ): (
          <div className={classes.root}>
            <CssBaseline/>
            <Navbar
              handleDrawerOpen={handleDrawerOpen}
              open={open}
            />
            <Desktop
              handleDrawerClose={handleDrawerClose}
              open={open}
            />
            <main className={classes.content}>
            <div className={classes.appBarSpacer} />
              <Container maxWidth="lg" className={classes.container}>
                {children}
              </Container>
            </main>
          </div>
        )
      }
    </div>
  )
}

export default Navegation;