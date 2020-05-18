import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Home from '@material-ui/icons/Home';
import LocalDining from '@material-ui/icons/LocalDining';
import PeopleIcon from '@material-ui/icons/People';
import  LocalShippingOutlined from '@material-ui/icons/LocalShippingOutlined';

import Link from './Link';

export const mainListItems = (
  <div>
    <ListItem button component={Link} naked href="/">
      <ListItemIcon>
        <Home />
      </ListItemIcon>
      <ListItemText primary="Inicio" />
    </ListItem>
    <ListItem button component={Link} naked href="/customer">
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Clientes" />
    </ListItem>
    <ListItem button component={Link} naked href="/seller">
      <ListItemIcon>
        <LocalShippingOutlined />
      </ListItemIcon>
      <ListItemText primary="Vendedores" />
    </ListItem>
    <ListItem button component={Link} naked href="/product">
      <ListItemIcon>
        <LocalDining />
      </ListItemIcon>
      <ListItemText primary="Productos" />
    </ListItem>
  </div>
);