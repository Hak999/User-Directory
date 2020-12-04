import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Avatar1 from './components/avatars/1.jpg';
import Avatar2 from './components/avatars/2.jpg';
import Avatar3 from './components/avatars/3.jpg';
import './App.css';

// Custom Ui Components
import Content from './components/Content';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));


function App() {
  const classes = useStyles();

  const Employees=[
    {
      id:1,
      avatar:Avatar1,
      name:"john",
      address:"USA",
      contact:"+15236541258",
      sellary:"$2000",
      leaves:"0",
      performance:"Good",
    },
    {
      id:2,
      avatar:Avatar2,
      name:"Edward",
      address:"USA",
      contact:"+15236541258",
      sellary:"$2200",
      leaves:"0",
      performance:"Exellent",
    },
    {
      id:3,
      avatar:Avatar1,
      name:"Jason",
      address:"USA",
      contact:"+15226541258",
      sellary:"$1800",
      leaves:"2",
      performance:"Poor",
    },
    {
      id:4,
      avatar:Avatar2,
      name:"Lee",
      address:"USA",
      contact:"+15136541258",
      sellary:"$2600",
      leaves:"1",
      performance:"Best",
    },
    {
      id:5,
      avatar:Avatar3,
      name:"Lisa",
      address:"UK",
      contact:"+15236641258",
      sellary:"$3000",
      leaves:"0",
      performance:"Good",
    }
  ];

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit">
            Employees
          </Typography>
        </Toolbar>
      </AppBar>
    <br />
      {/* Use Custom Component */}

      <Content employees={Employees}/>

    </div>
  );
}

export default App;
