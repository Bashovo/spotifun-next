import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

function Footer(){
    return (<Box width="100%" style={{backgroundColor:"#1b191a"}} >
    <Box pt={10} pb={5}>
    <Grid
container

>
 
     <Grid item md={1} s={1} xs={1}></Grid>
     <Box pb={1}>
     <img src={'logo-white.png'} style={{ width:"150px", }} alt={"logo white"}/> 

     </Box>

      </Grid>
    <Grid
container
>
 
     <Grid item md={4} s={1} xs={1}></Grid>

     <Grid item md={1} s={1} xs={2}>
     <Grid
container
spacing={2}>
  <Grid item>
  <a href="" style={{textDecoration:"none"}}>PROFILE</a>
  </Grid>
  <Grid item>
  <a href="" style={{textDecoration:"none"}}>SIGN IN</a>
  </Grid>
  <Grid item>
  <a href="" style={{textDecoration:"none"}}>MUSIC</a>
  </Grid>
</Grid>
     </Grid>
      </Grid>
<Box  pt={14}>
 <Grid container justify="space-evenly">
 <Grid item md={1} s={1} xs={1}></Grid>
 <Grid item md={9} s={9} xs={9}>
    <Grid container>
   <Grid item md={1} s={6} xs={6}>
<a href="" style={{textDecoration:"none"}}>LEGAL</a>
</Grid>

<Grid item md={2} s={6} xs={6}>
<a href="" style={{textDecoration:"none"}}>PRIVACY CENTER</a>
</Grid>

<Grid item md={2} s={6} xs={6}>
<a href="" style={{textDecoration:"none"}}>PRIVACY POLICY</a></Grid>
<Grid item md={1} s={6} xs={6}>
<a href="" style={{textDecoration:"none"}}>COOKIES</a>
</Grid>

<Grid item md={2} s={6} xs={6}>
<a href="" style={{textDecoration:"none"}}>ABOUT ADS</a>
   </Grid>
   </Grid>
   </Grid>
  <Grid item md={2} s={10} xs={2}>
<a href="" style={{textDecoration:"none"}}>©2019 MUSICDB</a>

   </Grid>

 </Grid>

</Box>

    </Box>
   </Box>);
}
export default Footer;
