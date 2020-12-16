import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
function Header(){
    return ( <Grid
        container
        alignItems="flex-start"
        spacing={1}
      >
      <Grid item md={12} s={12} xs={12}></Grid>
      <Grid item md={1} s={1} xs={0}></Grid>
      <Grid item md={2} s={2} xs={2} lg={2}>
      <img src={'logo.png'} style={{ width:"160px",height:"56px" }} alt={"logo"}/>

      </Grid>
      <Grid item md={6} s={4} xs={4}>

      </Grid>
      <Grid item md={2} s={4} xs={4} lg={2} >
        <div style={{marginTop:"7%"}}>
        <span><label>PROFILE</label></span>
        <img src={'profile-icon.png'} style={{ width:"50px" , verticalAlign:'middle', marginBottom:"3%"}} alt={"profile icon"}/>
        </div>

      </Grid>
      <Grid item md={1} s={1} xs={1}>

      </Grid>


      </Grid>)
}
export default Header;