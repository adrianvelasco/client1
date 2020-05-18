import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { useQuery, gql } from '@apollo/client'
import LinearProgress from '@material-ui/core/LinearProgress';


const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const CUSTOMERS = gql`
  query Custmers{
    customers{
      id
      firstName
      lastName
      email
      CustomerInformation{
        addressLine1
        groceryName
        phone
      }
    }
  }
`;


import Navegation from '../src/Components/Navegation';

export default function Customer() {
  const classes = useStyles();
  const { data, loading, error } = useQuery(CUSTOMERS);

  console.log(data);
  console.log(error);

  
  

  return (
    <Navegation>
      <TableContainer component={Paper}>
        {
          loading ? (
            <div>
              <LinearProgress/>
            </div>
          ):(
            <div>
              <Table className={classes.table} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Nombre</TableCell>
                    <TableCell>Teléfono</TableCell>
                    <TableCell>Establecimiento</TableCell>
                    <TableCell>Colonía</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data.customers.map((item) => (
                    <TableRow key={item.id}>
                      <TableCell component="th" scope="row">
                        {item.firstName +' '+ item.lastName}
                      </TableCell>
                      <TableCell component="th" scope="row">
                        {item.CustomerInformation.phone}
                      </TableCell>
                      <TableCell component="th" scope="row">
                        {item.CustomerInformation.groceryName}
                      </TableCell>
                      <TableCell component="th" scope="row">
                        {item.CustomerInformation.addressLine1}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )
        }
      </TableContainer>
    </Navegation>
  );
}
