
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Avatar from '@material-ui/core/Avatar';
const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});
export default function EMployeeTable({ employees, search }) {
  const classes = useStyles();

  return (
    <TableContainer>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell component="th">Avatar</TableCell>
            <TableCell component="th">Name</TableCell>
            <TableCell component="th">Address</TableCell>
            <TableCell component="th">Contact No</TableCell>
            <TableCell component="th">Sellary</TableCell>
            <TableCell component="th">Leaves</TableCell>
            <TableCell component="th">Performance</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {search === "" ?
            (
              employees.map((employee) => (
                <TableRow key={employee.id}>
                  <TableCell>
                    {employee.id}
                  </TableCell>
                  <TableCell>
                  <Avatar alt={employee.name} src={employee.avatar} />
                  </TableCell>
                  <TableCell>{employee.name}</TableCell>
                  <TableCell>{employee.address}</TableCell>
                  <TableCell>{employee.contact}</TableCell>
                  <TableCell>{employee.leaves}</TableCell>
                  <TableCell>{employee.sellary}</TableCell>
                  <TableCell>{employee.performance}</TableCell>
                </TableRow>
              ))
            )
            :
            (
              employees.filter(emp => emp.name === search).map((filteredemp) => (
                <>
                 <TableRow key={filteredemp.id}>
                  <TableCell>
                    {filteredemp.id}
                  </TableCell>
                  <TableCell>
                  <Avatar alt={filteredemp.name} src={filteredemp.avatar} />
                  </TableCell>
                  <TableCell>{filteredemp.name}</TableCell>
                  <TableCell>{filteredemp.address}</TableCell>
                  <TableCell>{filteredemp.contact}</TableCell>
                  <TableCell>{filteredemp.leaves}</TableCell>
                  <TableCell>{filteredemp.sellary}</TableCell>
                  <TableCell>{filteredemp.performance}</TableCell>
                </TableRow>
                </>

              ))
            )
          }

        </TableBody>
      </Table>
    </TableContainer>
  );
}
