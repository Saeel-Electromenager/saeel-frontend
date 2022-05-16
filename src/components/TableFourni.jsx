import * as React from 'react';
import { Link } from 'react-router-dom';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(pseudo, nom, prenom) {
  return { pseudo, nom, prenom };
}

const rows = [
  createData('sidou07', 'mouhous', 'sidali'),
  createData('HAMZA', 'HAMZA', 'HAMZA'),
  createData('YANIS06', 'ouLhaci', 'yanis'),
];


export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table" pageSize={5} rowsPerPageOptions={[5]}>
        <TableHead>
          <TableRow>
            <TableCell>pseudo</TableCell>
            <TableCell align="right">Nom</TableCell>
            <TableCell align="right">prenom</TableCell>
            <TableCell align="right"> option</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.pseudo}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.pseudo}
              </TableCell>
              <TableCell align="right">{row.nom}</TableCell>
              <TableCell align="right">{row.prenom}</TableCell>
              <TableCell align="right">
                {' '}
                <Link to="/profil">Rejoignez-nous!</Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
