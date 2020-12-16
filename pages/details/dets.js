import {useSelector} from "react-redux";
import React from "react";
import {gql, useQuery} from "@apollo/client";
import Grid from "@material-ui/core/Grid";

function Dets() {
    const albumId = useSelector(state => state.albumReducer);
    console.debug("album id", albumId);
    // this.route.query.aid

    const ALBUM = gql`{
    album(id:${albumId}){
    id
    albumName
    imageUrl
    artist
     songs{
      id
      title
    }
  }
   }`;
    //gi
    const {loading, error, data} = useQuery(ALBUM);
    if (loading) return <p>Loading...</p>
    if (error) return <p>error</p>
    console.debug("data", data.album)
    return (<div>
        <img src={data.album.imageUrl} width="170"></img>
        <h1>
            Album Name : {data.album.albumName}
        </h1>
                <br/>

        <h1>
            Artist : {data.album.artist}
        </h1>
        <br/>
        <h1>
            Songs :
        </h1>
        {
            data.album.songs.map((song,id)=>(
            <ol>
                <h3>
                    <li key={song.id}>
                   {song.title}
                </li>
                </h3>

            </ol>
            ))
        }
    </div>)
}

export default Dets;