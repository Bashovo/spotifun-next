import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import {styled} from "@material-ui/core/styles";
import {useRouter} from "next/router";
import {gql, useQuery} from "@apollo/client";
import {useDispatch} from "react-redux";
import {setId} from "../pages/actions";

const ALL_ALBUMS = gql`{
  albums {
    id
    albumName
    imageUrl
  }
}`;

const Background = styled(Box)({
    background: 'linear-gradient(to bottom,#f90038, #1c1c1c 90%)',

});
function FrameGrid(props) {
    const {classes} = props;
      const router = useRouter();
    const {loading, error, data} = useQuery(ALL_ALBUMS);
    if (loading) return <p>Loading...</p>
    let emptySquares = 0;
    emptySquares = 6 - data.albums.length;
    let emptyFrames = [];
    for (var i = 0; i < emptySquares; i++) {
        emptyFrames.push(
            <Grid item xs={3} sm={3} md={4} style={{maxWidth: "100%"}}>
                <img src={'frame.PNG'} style={{width: "170px"}} alt={"frame"}/>
            </Grid>
        );
    }
    const dispatch = useDispatch();

    return (
        <div>
            <Grid container justify="space-between" spacing={4} style={{maxWidth: "100%"}}>
                {
                    data.albums.map((
                        album, id
                    ) => (
                        <Grid item xs={3} sm={3} md={4} style={{maxWidth: "100%"}}>
    <img key={album.id} onClick={()=>{
        dispatch(setId(album.id));
        router.push({pathname:'/details/dets',query:{aid:album.id}})}

    } src={album.imageUrl} width="170"></img>
                        </Grid>

                    ))}

                {emptyFrames}

            </Grid>
        </div>
    );
}

export default function Albums(){
    return (<Background width="100%" py={14}>
            <Grid container>
                <Grid item md={1} s={1} xs={1} lg={1}></Grid>
                <Grid item md={4} s={11} xs={11} lg={4}>
                    <Grid container
                    >
                        <Grid item md={6} s={12} xs={12}>

                            <h1 style={{fontSize: "66px", color: "white"}}>AMP UP <br></br> THOSE DBS </h1>

                            <h2>MAKE MUSIC ON THE GO.</h2>
                        </Grid>
                        <Grid container>
                            <Box pb={2}>
                                <img src={'hit-it.png'} style={{width: "180px"}} alt={"hit it"}/>

                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={1} sm={1}></Grid>
                <Grid item xs={6} sm={6} md={6} style={{maxWidth: "100%"}}>
                    <Grid container>
                        <FrameGrid />

                    </Grid></Grid>
            </Grid>
        </Background>
)
}