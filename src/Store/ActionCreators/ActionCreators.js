// import * as actionTypes from "../actions/actions";
// import axios from "axios";

// export const getData = (image, whiteTitle, greenTitle, description) => {
//     return dispatch =>{
//         let Link = "http://45.9.190.133:6339/avh/api/getTopNews#";

//         axios.get(Link)
//         .then(res=>{
//             console.log(res);
//             dispatch(ImageSet(res.data));
//         }).catch(err=>{
//             console.log('Something wrong');
//         })
//     }
// };


// export const ImageSet = (data)=>{
//     return {
//     type: actionTypes.data.Get_Image,
//     dataR: data
//     }
// };