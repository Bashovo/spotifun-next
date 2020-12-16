import Head from 'next/head'
import { withApollo } from "next-apollo";
import {ApolloClient, ApolloProvider, gql, InMemoryCache, useQuery} from "@apollo/client";
import {useRouter} from "next/router";
import Grid from "@material-ui/core/Grid";
import Link from "next/link";
import Header from "../components/header";
import Box from "@material-ui/core/Box";
import Footer from "../components/footer";
import {makeStyles, styled} from "@material-ui/core/styles";
import Albums from "../components/albums";
import Dets from "./details/dets";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 2,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

export default function Home() {
  return (
        <div>
        <Header></Header>
            <Albums></Albums>
        <Box height={400} width="100%" pt={12}>
            <Grid container
                  alignItems="flex-start"
                  spacing={1}>
            <Grid item md={1} s={1} xs={1}></Grid>
                <Grid item md={11} s={11} xs={11}>
                    <Grid item md={11} s={11} xs={10}>
                        <h1 style={{fontSize: "50px"}}>GET PRODUCIN WITH MUSICDB</h1>
                    </Grid>
                    <Grid item md={11} s={11} xs={11}>

                        <h1 style={{marginBottom: "unset"}}>PICK YOUR PREFERED INSRUMENT</h1>
                    </Grid>
                    <Grid item md={11} s={11} xs={11}>

                        <h5 style={{marginTop: "unset"}}>PICK THE INSTRUMENT YOU NEED TO COMPOSE YOUR PIECE</h5>
                        <h5 style={{color: "red"}}>START COMPOSING</h5>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
        <Footer></Footer>

    </div>

  )
}
