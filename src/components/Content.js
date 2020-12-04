import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, Grid, Typography } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';

import EmployeeTable from './employeeTable';
const useStyles = makeStyles({
    root: {
        maxWidth: "80%",
        margin: "auto",
        padding: "0"
    },
});
const Content = ({ employees }) => {
    const [search, setSearch] = React.useState("");
    const classes = useStyles();

    const handleSearch = (e) => {
        setSearch(e.target.value);
     }
    return (
        <Card className={classes.root}>
            <Grid container className="card-header">
                <Grid item xs={10} sm={10} md={10}><Typography variant="h4">Employees Table</Typography></Grid>
                <Grid item xs={2} sm={2} md={2}>
                    <TextField
                        id="standard-password-input"
                        label="Search by Name"
                        type="text"
                        onChange={handleSearch}
                    />
                </Grid>
            </Grid>
            <CardContent>
                <EmployeeTable employees={employees} search={search} />
            </CardContent>
        </Card>
    );

}
export default Content;