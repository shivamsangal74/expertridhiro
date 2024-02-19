import { createSlice } from "@reduxjs/toolkit";

const users =  createSlice({

    name: 'userId',
    initialState:[],
    reducers:{
         setuserid(state,action){
                state.push(action.payload)
        },

        completelogout(state,action){
            state.pop()
        }
    }
})

// const api =  createSlice({

//          name: 'api',
//         initialState:'http://localhost:5000/',
//         reducers:{
            
//         }
    
// })


export const {setuserid,completelogout} = users.actions;
export default users.reducer;
