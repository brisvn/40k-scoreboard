import './App.css';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { makeStyles } from "@material-ui/core/styles";
import TextField from '@material-ui/core/TextField';
import useGlobal from "../store";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { borders } from '@material-ui/system';

const useStyles = makeStyles((theme) => ({
    paper:{
        height: 75,
        width: 75,
        textAlign: 'center',
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        backgroundColor:"blue",
        
    }
  }));


function TurnCounter(){
    const [globalState, globalActions] = useGlobal();
    const classes = useStyles();
    return(
        <div className = "TurnCounter">
            <Paper className = {classes.paper} margin = 'auto'>
                    Turn: 
                    {"\n"}
                    {globalState.turn}   
            </Paper>
        </div>
    );
}

export default TurnCounter;