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


const useStyles = makeStyles((theme) => ({
  paper:{
    padding: '5px',
    border: '3px solid ',
    textAlign: 'center', 
  }
}));

function ControlPanel(){
    const classes = useStyles();
    // eslint-disable-next-line
    const [globalState, globalActions] = useGlobal();
    const handleMission = e => {
        globalActions.setMission(e.target.value);
    };
    const handleTurn = e => {
        globalActions.setTurn(e.target.value);
    };
    const handleLeftName = e =>{
        globalActions.setLeftName(e.target.value);
    };
    const handleLeftFaction = e =>{
        globalActions.setLeftFaction(e.target.value);
    };
    const handleLeftCP = e =>{
        globalActions.setLeftCP(e.target.value);
    };
    const handleLeftPrimary2 = e =>{
        globalActions.setLeftPrimary2(e.target.value)
    };
    const handleLeftPrimary3 = e =>{
        globalActions.setLeftPrimary3(e.target.value)
    };
    const handleLeftPrimary4 = e =>{
        globalActions.setLeftPrimary4(e.target.value)
    };
    const handleLeftPrimary5 = e =>{
        globalActions.setLeftPrimary5(e.target.value)
    };
    const handleLeftSecondaryVal1 = e =>{
        globalActions.setLeftSecondaryVal1(e.target.value)
    };
    const handleLeftSecondary1 = e =>{
        globalActions.setLeftSecondary1(e.target.value)
    };
    const handleLeftSecondaryVal2 = e =>{
        globalActions.setLeftSecondaryVal2(e.target.value)
    };
    const handleLeftSecondary2 = e =>{
        globalActions.setLeftSecondary2(e.target.value)
    };
    const handleLeftSecondaryVal3 = e =>{
        globalActions.setLeftSecondaryVal3(e.target.value)
    };
    const handleLeftSecondary3 = e =>{
        globalActions.setLeftSecondary3(e.target.value)
    };
    const handleRightName = e =>{
        globalActions.setRightName(e.target.value);
    };
    const handleRightFaction = e =>{
        globalActions.setRightFaction(e.target.value);
    };
    const handleRightCP = e =>{
        globalActions.setRightCP(e.target.value);
    };
    const handleRightPrimary2 = e =>{
        globalActions.setRightPrimary2(e.target.value)
    };
    const handleRightPrimary3 = e =>{
        globalActions.setRightPrimary3(e.target.value)
    };
    const handleRightPrimary4 = e =>{
        globalActions.setRightPrimary4(e.target.value)
    };
    const handleRightPrimary5 = e =>{
        globalActions.setRightPrimary5(e.target.value)
    };
    const handleRightSecondaryVal1 = e =>{
        globalActions.setRightSecondaryVal1(e.target.value)
    };
    const handleRightSecondary1 = e =>{
        globalActions.setRightSecondary1(e.target.value)
    };
    const handleRightSecondaryVal2 = e =>{
        globalActions.setRightSecondaryVal2(e.target.value)
    };
    const handleRightSecondary2 = e =>{
        globalActions.setRightSecondary2(e.target.value)
    };
    const handleRightSecondaryVal3 = e =>{
        globalActions.setRightSecondaryVal3(e.target.value)
    };
    const handleRightSecondary3 = e =>{
        globalActions.setRightSecondary3(e.target.value)
    };
    return (
        <div className = "ControlPanel">
            <Grid container spacing = {1} >
                <Grid item xs = {12}>
                    <Paper className = {classes.paper}>
                        <p>Scoreboard Control Panel</p>
                    </Paper>
                </Grid>
                <Grid item xs = {12}>
                    <Paper className = {classes.paper}>
                        Enter Mission and Turn
                        <form>
                            <TextField id="misson-id" label = "Mission" onChange={handleMission} />
                            <TextField id="turn-id" label = "Turn" onChange={handleTurn} />
                        </form>
                    </Paper>
                </Grid>
                <Grid item xs = {6}>
                    <Paper className = {classes.paper}>
                        <p>Left Player Controls</p>
                        <Grid container direction= "row" spacing = {1}>
                            <Grid item xs = {12}>
                                <Paper className = {classes.paper}>
                                    Player info
                                    <Grid container direction = "row" spacing = {1}> 
                                            <Grid item>
                                                <TextField id="leftname-id" label = "Name" onChange={handleLeftName} />
                                            </Grid>
                                            <Grid item>
                                                <TextField id="leftfaction-id" label = "Faction" onChange={handleLeftFaction} />
                                            </Grid>
                                            <Grid item>
                                                <TextField id="leftcp-id" label = "CP" onChange={handleLeftCP} />
                                            </Grid>
                                    </Grid>
                                </Paper>
                            </Grid>
                            <Grid item xs = {12}>
                                <Paper className = {classes.paper}>
                                    Primaries
                                    <Grid container direction="row" spacing = {1}>
                                        <Grid item xs = {3}>
                                            <Paper className = {classes.paper}>
                                                <Grid container direction="column" spacing = {1}>
                                                    <Grid item xs = {12}>
                                                        T2
                                                    </Grid>
                                                    <Grid item xs = {12}>
                                                    <FormControl className={classes.formControl}>
                                                        <InputLabel id="demo-simple-select-label">Points</InputLabel>
                                                        <Select
                                                        labelId="demo-simple-select-label"
                                                        id="demo-simple-select"
                                                        style={{minWidth:"80px"}}
                                                        onChange = {handleLeftPrimary2}
                                                        >
                                                        <MenuItem value={0}>0</MenuItem>
                                                        <MenuItem value={5}>5</MenuItem>
                                                        <MenuItem value={10}>10</MenuItem>
                                                        <MenuItem value={15}>15</MenuItem>
                                                        </Select>
                                                    </FormControl>
                                                    </Grid>
                                                </Grid>
                                            </Paper>
                                        </Grid>
                                        <Grid item xs = {3}>
                                            <Paper className = {classes.paper}>
                                                <Grid container direction="column" spacing = {1}>
                                                    <Grid item xs = {12}>
                                                        T3
                                                    </Grid>
                                                    <Grid item xs = {12}>
                                                    <FormControl className={classes.formControl}>
                                                        <InputLabel id="demo-simple-select-label">Points</InputLabel>
                                                        <Select
                                                        labelId="demo-simple-select-label"
                                                        id="demo-simple-select"
                                                        style={{minWidth:"80px"}}
                                                        onChange = {handleLeftPrimary3}
                                                        >
                                                        <MenuItem value={0}>0</MenuItem>
                                                        <MenuItem value={5}>5</MenuItem>
                                                        <MenuItem value={10}>10</MenuItem>
                                                        <MenuItem value={15}>15</MenuItem>
                                                        </Select>
                                                    </FormControl>
                                                    </Grid>
                                                </Grid>
                                            </Paper>
                                        </Grid>
                                        <Grid item xs = {3}>
                                            <Paper className = {classes.paper}>
                                                <Grid container direction="column" spacing = {1}>
                                                    <Grid item xs = {12}>
                                                        T4
                                                    </Grid>
                                                    <Grid item xs = {12}>
                                                    <FormControl className={classes.formControl}>
                                                        <InputLabel id="demo-simple-select-label">Points</InputLabel>
                                                        <Select
                                                        labelId="demo-simple-select-label"
                                                        id="demo-simple-select"
                                                        style={{minWidth:"80px"}}
                                                        onChange = {handleLeftPrimary4}
                                                        >
                                                        <MenuItem value={0}>0</MenuItem>
                                                        <MenuItem value={5}>5</MenuItem>
                                                        <MenuItem value={10}>10</MenuItem>
                                                        <MenuItem value={15}>15</MenuItem>
                                                        </Select>
                                                    </FormControl>
                                                    </Grid>
                                                </Grid>
                                            </Paper>
                                        </Grid>
                                        <Grid item xs = {3}>
                                            <Paper className = {classes.paper}>
                                                <Grid container direction="column" spacing = {1}>
                                                    <Grid item xs = {12}>
                                                        T5
                                                    </Grid>
                                                    <Grid item xs = {12}>
                                                    <FormControl className={classes.formControl}>
                                                        <InputLabel id="demo-simple-select-label">Points</InputLabel>
                                                        <Select
                                                        labelId="demo-simple-select-label"
                                                        id="demo-simple-select"
                                                        style={{minWidth:"80px"}}
                                                        onChange = {handleLeftPrimary5}
                                                        >
                                                        <MenuItem value={0}>0</MenuItem>
                                                        <MenuItem value={5}>5</MenuItem>
                                                        <MenuItem value={10}>10</MenuItem>
                                                        <MenuItem value={15}>15</MenuItem>
                                                        </Select>
                                                    </FormControl>
                                                    </Grid>
                                                </Grid>
                                            </Paper>
                                        </Grid>
                                    </Grid>
                                </Paper>
                            </Grid>
                            <Grid item xs = {12}>
                                <Paper className = {classes.paper}>
                                    Secondaries
                                    <Grid container direction="row" spacing = {1}>
                                        <Grid item xs = {4}>
                                            <Paper className = {classes.paper}>
                                                <Grid container direction="column" spacing = {1}>
                                                    <Grid item xs = {12}>
                                                        First Secondary
                                                        <TextField id="leftname-id" label = "Name" onChange={handleLeftSecondary1} />
                                                    </Grid>
                                                    <Grid item xs = {12}>
                                                        <TextField id="1stsecondarypoints-id" label = "Points" onChange={handleLeftSecondaryVal1} />
                                                    </Grid>
                                                </Grid>
                                            </Paper>
                                        </Grid>
                                        <Grid item xs = {4}>
                                            <Paper className = {classes.paper}>
                                                <Grid container direction="column" spacing = {1}>
                                                    <Grid item xs = {12}>
                                                        Second Secondary
                                                        <TextField id="leftname-id" label = "Name" onChange={handleLeftSecondary2} />
                                                    </Grid>
                                                    <Grid item xs = {12}>
                                                        <TextField id="1stsecondarypoints-id" label = "Points" onChange={handleLeftSecondaryVal2} />
                                                    </Grid>
                                                </Grid>
                                            </Paper>
                                        </Grid>
                                        <Grid item xs = {4}>
                                            <Paper className = {classes.paper}>
                                                <Grid container direction="column" spacing = {1}>
                                                    <Grid item xs = {12}>
                                                        Third Secondary
                                                        <TextField id="leftname-id" label = "Name" onChange={handleLeftSecondary3} />
                                                    </Grid>
                                                    <Grid item xs = {12}>
                                                        <TextField id="1stsecondarypoints-id" label = "Points" onChange={handleLeftSecondaryVal3} />
                                                    </Grid>
                                                </Grid>
                                            </Paper>
                                        </Grid>
                                    </Grid>
                                </Paper>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
                <Grid item xs = {6}>
                <Paper className = {classes.paper}>
                        <p>Right Player Controls</p>
                        <Grid container direction= "row" spacing = {1}>
                            <Grid item xs = {12}>
                                <Paper className = {classes.paper}>
                                    Player info
                                    <Grid container direction = "row" spacing = {1}> 
                                            <Grid item>
                                                <TextField id="leftname-id" label = "Name" onChange={handleRightName} />
                                            </Grid>
                                            <Grid item>
                                                <TextField id="leftfaction-id" label = "Faction" onChange={handleRightFaction} />
                                            </Grid>
                                            <Grid item>
                                                <TextField id="leftcp-id" label = "CP" onChange={handleRightCP} />
                                            </Grid>
                                    </Grid>
                                </Paper>
                            </Grid>
                            <Grid item xs = {12}>
                                <Paper className = {classes.paper}>
                                    Primaries
                                    <Grid container direction="row" spacing = {1}>
                                        <Grid item xs = {3}>
                                            <Paper className = {classes.paper}>
                                                <Grid container direction="column" spacing = {1}>
                                                    <Grid item xs = {12}>
                                                        T2
                                                    </Grid>
                                                    <Grid item xs = {12}>
                                                    <FormControl className={classes.formControl}>
                                                        <InputLabel id="demo-simple-select-label">Points</InputLabel>
                                                        <Select
                                                        labelId="demo-simple-select-label"
                                                        id="demo-simple-select"
                                                        style={{minWidth:"80px"}}
                                                        onChange = {handleRightPrimary2}
                                                        >
                                                        <MenuItem value={0}>0</MenuItem>
                                                        <MenuItem value={5}>5</MenuItem>
                                                        <MenuItem value={10}>10</MenuItem>
                                                        <MenuItem value={15}>15</MenuItem>
                                                        </Select>
                                                    </FormControl>
                                                    </Grid>
                                                </Grid>
                                            </Paper>
                                        </Grid>
                                        <Grid item xs = {3}>
                                            <Paper className = {classes.paper}>
                                                <Grid container direction="column" spacing = {1}>
                                                    <Grid item xs = {12}>
                                                        T3
                                                    </Grid>
                                                    <Grid item xs = {12}>
                                                    <FormControl className={classes.formControl}>
                                                        <InputLabel id="demo-simple-select-label">Points</InputLabel>
                                                        <Select
                                                        labelId="demo-simple-select-label"
                                                        id="demo-simple-select"
                                                        style={{minWidth:"80px"}}
                                                        onChange = {handleRightPrimary3}
                                                        >
                                                        <MenuItem value={0}>0</MenuItem>
                                                        <MenuItem value={5}>5</MenuItem>
                                                        <MenuItem value={10}>10</MenuItem>
                                                        <MenuItem value={15}>15</MenuItem>
                                                        </Select>
                                                    </FormControl>
                                                    </Grid>
                                                </Grid>
                                            </Paper>
                                        </Grid>
                                        <Grid item xs = {3}>
                                            <Paper className = {classes.paper}>
                                                <Grid container direction="column" spacing = {1}>
                                                    <Grid item xs = {12}>
                                                        T4
                                                    </Grid>
                                                    <Grid item xs = {12}>
                                                    <FormControl className={classes.formControl}>
                                                        <InputLabel id="demo-simple-select-label">Points</InputLabel>
                                                        <Select
                                                        labelId="demo-simple-select-label"
                                                        id="demo-simple-select"
                                                        style={{minWidth:"80px"}}
                                                        onChange = {handleRightPrimary4}
                                                        >
                                                        <MenuItem value={0}>0</MenuItem>
                                                        <MenuItem value={5}>5</MenuItem>
                                                        <MenuItem value={10}>10</MenuItem>
                                                        <MenuItem value={15}>15</MenuItem>
                                                        </Select>
                                                    </FormControl>
                                                    </Grid>
                                                </Grid>
                                            </Paper>
                                        </Grid>
                                        <Grid item xs = {3}>
                                            <Paper className = {classes.paper}>
                                                <Grid container direction="column" spacing = {1}>
                                                    <Grid item xs = {12}>
                                                        T5
                                                    </Grid>
                                                    <Grid item xs = {12}>
                                                    <FormControl className={classes.formControl}>
                                                        <InputLabel id="demo-simple-select-label">Points</InputLabel>
                                                        <Select
                                                        labelId="demo-simple-select-label"
                                                        id="demo-simple-select"
                                                        style={{minWidth:"80px"}}
                                                        onChange = {handleRightPrimary5}
                                                        >
                                                        <MenuItem value={0}>0</MenuItem>
                                                        <MenuItem value={5}>5</MenuItem>
                                                        <MenuItem value={10}>10</MenuItem>
                                                        <MenuItem value={15}>15</MenuItem>
                                                        </Select>
                                                    </FormControl>
                                                    </Grid>
                                                </Grid>
                                            </Paper>
                                        </Grid>
                                    </Grid>
                                </Paper>
                            </Grid>
                            <Grid item xs = {12}>
                                <Paper className = {classes.paper}>
                                    Secondaries
                                    <Grid container direction="row" spacing = {1}>
                                        <Grid item xs = {4}>
                                            <Paper className = {classes.paper}>
                                                <Grid container direction="column" spacing = {1}>
                                                    <Grid item xs = {12}>
                                                        First Secondary
                                                        <TextField id="leftname-id" label = "Name" onChange={handleRightSecondary1} />
                                                    </Grid>
                                                    <Grid item xs = {12}>
                                                        <TextField id="1stsecondarypoints-id" label = "Points" onChange={handleRightSecondaryVal1} />
                                                    </Grid>
                                                </Grid>
                                            </Paper>
                                        </Grid>
                                        <Grid item xs = {4}>
                                            <Paper className = {classes.paper}>
                                                <Grid container direction="column" spacing = {1}>
                                                    <Grid item xs = {12}>
                                                        Second Secondary
                                                        <TextField id="leftname-id" label = "Name" onChange={handleRightSecondary2} />
                                                    </Grid>
                                                    <Grid item xs = {12}>
                                                        <TextField id="2ndsecondarypoints-id" label = "Points" onChange={handleRightSecondaryVal2} />
                                                    </Grid>
                                                </Grid>
                                            </Paper>
                                        </Grid>
                                        <Grid item xs = {4}>
                                            <Paper className = {classes.paper}>
                                                <Grid container direction="column" spacing = {1}>
                                                    <Grid item xs = {12}>
                                                        Third Secondary
                                                        <TextField id="leftname-id" label = "Name" onChange={handleRightSecondary3} />
                                                    </Grid>
                                                    <Grid item xs = {12}>
                                                        <TextField id="3rdsecondarypoints-id" label = "Points" onChange={handleRightSecondaryVal3} />
                                                    </Grid>
                                                </Grid>
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
};



export default ControlPanel;