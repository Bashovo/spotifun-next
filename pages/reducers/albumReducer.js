
const AlbumReducer = (state= 1,action)=>{
    console.debug("action",action.payload);
    switch (action.type){
        case 'ID':
            return action.payload;
        default:
            return state;
    }
    //state = action.payload;
}
export default AlbumReducer;