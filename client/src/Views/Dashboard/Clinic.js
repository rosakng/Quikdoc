import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Components/Title';
import Typography from '@material-ui/core/Typography';


function createData(name, rating, type, waitTime, location) {
  return { name, rating, type, waitTime, location };
}

const rows = [
  createData('Stoufville Hospital', '1/5', 'Appointment', '4 days', 'Markham'),
  createData('Sun Hospital', '3/5', 'Appointment', '6 days', 'Richmond Hill'),
  createData('Tim Hospital', '4/5', 'Walk-in', '1 hour', 'Waterloo'),
  createData('Chris Hospital', '5/5', 'Walk-in', '30 minutes', 'Thornhill'),
  createData('Owl Hospital', '3.5/5', 'Walk-in', '1.5 hours', 'Ottawa'),
];

const drawerWidth = 240;

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    width: '1250px'
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
  seeMore: {
    marginTop: theme.spacing(3),
  },
  depositContext: {
    flex: 1,
  },
}));

export default function Clinic() {
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={6}>
              <Paper className={fixedHeightPaper}>
                <React.Fragment>
                  <Title>Clinic</Title>
                  <Typography component="p" variant="h4" className={classes.depositContext}>
                    Stouffville Hospital
                  </Typography>
                  <Typography color="textSecondary" >
                    Type: Walk-in
                  </Typography>
                  <Typography color="textSecondary" >
                    Rating: 3.5/5
                  </Typography>
                  <Typography color="textSecondary" >
                    Distance (km): 5
                  </Typography>
                  <Typography color="textSecondary" >
                    Wait Time: 30 minutes
                  </Typography>
                </React.Fragment>
              </Paper>
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
              <Paper className={fixedHeightPaper}>
                <React.Fragment>
                  <Title>Schedule</Title>
                  <Typography component="p" variant="h4">
                    Weekdays: 
                  </Typography>
                  <Typography component="p" variant="h4"  className={classes.depositContext}>
                    Weekends: 
                  </Typography>
                  <div>
                    <Button color="primary" href="#" onClick={preventDefault}>
                        Get Form
                    </Button>
                    <Button color="primary" href="#" onClick={preventDefault}>
                        Add Form
                    </Button>
                    <Button color="primary" href="#" onClick={preventDefault}>
                        Book Appointment
                    </Button>
                  </div>
                </React.Fragment>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </main>
    </div>
  );
}