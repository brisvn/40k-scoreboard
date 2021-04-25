
import './App.css';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from "@material-ui/core/styles";
import useGlobal from "../store";

const useStyles = makeStyles((theme) => ({
  innerPaper:{
    background: "blue",
    padding: '3px',
    border: '3px solid ',
    textAlign: 'center',
  },

  outerPaper:{
    padding: '6px',
    border: '3px solid ',
    background: "grey",
  }

}));

function getLeftVP(){
  const [globalState] = useGlobal();
  var VP = 0;
  
  VP = VP + globalState.leftPrimary2;
  VP = VP + globalState.leftPrimary3;
  VP = VP + globalState.leftPrimary4;
  VP = VP + globalState.leftPrimary5;
  if(VP > 45){
    VP = 45;
  };
  VP = VP + parseInt(globalState.leftSecondaryVal1);
  VP = VP + parseInt(globalState.leftSecondaryVal2);
  VP = VP + parseInt(globalState.leftSecondaryVal3);
  return VP
}

function LeftPlayer() {
  const classes = useStyles();
  const [globalState] = useGlobal();
  return (
    <div className="LeftPlayer">
      <Grid container spacing ={1}>
       <Grid item xs = {12}>
          <Paper className={classes.outerPaper}>
            <Grid container spacing ={1} direction="column">
              <Grid item>
                <Paper className={classes.innerPaper}>
                  { globalState.leftName }
                </Paper>
              </Grid>
              <Grid item>
                <Paper className={classes.innerPaper}>
                  {globalState.leftFaction}
                </Paper>
              </Grid>
              <Grid item>
                <Paper className={classes.innerPaper}>
                  VP
                  <Paper className = {classes.innerPaper}>
                    {getLeftVP()}
                  </Paper> 
                </Paper>
              </Grid>
              <Grid item>
                <Paper className={classes.innerPaper}>
                  CP 
                  <Paper className = {classes.innerPaper}>{globalState.leftCP}</Paper> 
                </Paper>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs = {12}>
            <Paper className={classes.outerPaper}>
            <Grid container spacing = {1} direction="column">
              <Grid item>
                <Paper className={classes.innerPaper}>
                  { globalState.counter }
                </Paper>
              </Grid>
              <Grid item xs>
                <Paper className={classes.innerPaper}>
                  Turn { globalState.turn }
                </Paper>
              </Grid>
              <Grid item>
                <Paper className={classes.innerPaper}>
                  Primaries
                  <Grid container direction="row" spacing = {1}>
                    <Grid item xs = {3}>
                      T2
                      <Paper className={classes.innerPaper}>
                          {globalState.leftPrimary2}
                      </Paper>
                    </Grid>  
                    <Grid item xs = {3}>
                      T3
                      <Paper className={classes.innerPaper}>
                       {globalState.leftPrimary3}
                      </Paper>
                    </Grid>
                    <Grid item xs = {3}>
                      T4
                      <Paper className={classes.innerPaper}>
                        {globalState.leftPrimary4}
                      </Paper>
                    </Grid>
                    <Grid item xs = {3}>
                      T5
                      <Paper className={classes.innerPaper}>
                        {globalState.leftPrimary5}
                      </Paper>
                    </Grid>
                  </Grid> 
                </Paper>
              </Grid>
              <Grid item>
                <Paper className={classes.innerPaper}>
                  Secondaries
                </Paper>
              </Grid>
              <Grid item>
                <Paper className={classes.innerPaper}>
                  <Grid container spacing = {1}>
                    <Grid item xs = {8}>
                      {globalState.leftSecondary1}
                    </Grid>
                    <Grid item xs = {4}>
                      <Paper className = {classes.innerPaper}>
                        {globalState.leftSecondaryVal1}
                      </Paper>
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
              <Grid item>
              <Paper className={classes.innerPaper}>
                  <Grid container spacing = {1}>
                    <Grid item xs = {8}>
                    {globalState.leftSecondary2}
                    </Grid>
                    <Grid item xs = {4}>
                      <Paper className = {classes.innerPaper}>
                        {globalState.leftSecondaryVal2}
                      </Paper>
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
              <Grid item>
              <Paper className={classes.innerPaper}>
                  <Grid container spacing = {1}>
                    <Grid item xs = {8}>
                    {globalState.leftSecondary3}
                    </Grid>
                    <Grid item xs = {4}>
                      <Paper className = {classes.innerPaper}>
                        {globalState.leftSecondaryVal3}
                      </Paper>
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
            </Grid>
            </Paper>
        </Grid>
      </Grid>
    </div>
  );
}


export default LeftPlayer;
