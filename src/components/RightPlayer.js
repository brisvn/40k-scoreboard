

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

function getRightVP(){
  const [globalState] = useGlobal();
  var VP = 0;
  
  VP = VP + globalState.rightPrimary2;
  VP = VP + globalState.rightPrimary3;
  VP = VP + globalState.rightPrimary4;
  VP = VP + globalState.rightPrimary5;
  if(VP > 45){
    VP = 45;
  };
  VP = VP + parseInt(globalState.rightSecondaryVal1);
  VP = VP + parseInt(globalState.rightSecondaryVal2);
  VP = VP + parseInt(globalState.rightSecondaryVal3);
  return VP
}
function RightPlayer() {
  const classes = useStyles();
  const [globalState] = useGlobal();
  return (
    <div className="RightPlayer">
      <Grid container spacing ={1}>
       <Grid item xs = {12}>
          <Paper className={classes.outerPaper}>
            <Grid container spacing ={1} direction="column">
              <Grid item>
                <Paper className={classes.innerPaper}>
                  { globalState.rightName }
                </Paper>
              </Grid>
              <Grid item>
                <Paper className={classes.innerPaper}>
                  {globalState.rightFaction}
                </Paper>
              </Grid>
              <Grid item>
                <Paper className={classes.innerPaper}>
                  VP
                  <Paper className = {classes.innerPaper}>
                    {getRightVP()}
                  </Paper> 
                </Paper>
              </Grid>
              <Grid item>
                <Paper className={classes.innerPaper}>
                  CP 
                  <Paper className = {classes.innerPaper}>{globalState.rightCP}</Paper> 
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
                      <Paper className={classes.innerPaper} square>
                          {globalState.rightPrimary2}
                      </Paper>
                    </Grid>  
                    <Grid item xs = {3}>
                      T3
                      <Paper className={classes.innerPaper} square>
                       {globalState.rightPrimary3}
                      </Paper>
                    </Grid>
                    <Grid item xs = {3}>
                      T4
                      <Paper className={classes.innerPaper} square>
                        {globalState.rightPrimary4}
                      </Paper>
                    </Grid>
                    <Grid item xs = {3}>
                      T5
                      <Paper className={classes.innerPaper} square>
                        {globalState.rightPrimary5}
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
                      {globalState.rightSecondary1}
                    </Grid>
                    <Grid item xs = {4}>
                      <Paper className = {classes.innerPaper} square>
                        {globalState.rightSecondaryVal1}
                      </Paper>
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
              <Grid item>
              <Paper className={classes.innerPaper}>
                  <Grid container spacing = {1}>
                    <Grid item xs = {8}>
                    {globalState.rightSecondary2}
                    </Grid>
                    <Grid item xs = {4}>
                      <Paper className = {classes.innerPaper} square>
                        {globalState.rightSecondaryVal2}
                      </Paper>
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
              <Grid item>
              <Paper className={classes.innerPaper}>
                  <Grid container spacing = {1}>
                    <Grid item xs = {8}>
                    {globalState.rightSecondary3}
                    </Grid>
                    <Grid item xs = {4}>
                      <Paper className = {classes.innerPaper} square>
                        {globalState.rightSecondaryVal3}
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


export default RightPlayer;
