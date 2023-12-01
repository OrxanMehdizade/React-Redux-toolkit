import {createSlice,createAsyncThunk} from "@reduxjs/toolkit";

export const fetchContent = createAsyncThunk(
    'content/fetchContent',
    async () => {
        const res = await fetch('http://localhost:5000/my-bag')
        const data = await res.json()
        return data
    }
)

const myBagSlice=createSlice(
    {
        name:'myBagArray',
        initialState:{
            arrMyBag:[],
            postData: null,
            isLoading:false,
            error:null
        },
        extraReducers: (builder) => {
            builder.addCase(fetchContent.pending, (state) => {
                state.isLoading = true
            })
            builder.addCase(fetchContent.fulfilled, (state, action) => {
                state.arrMyBag = action.payload
                state.isLoading = false
            })
            builder.addCase(fetchContent.rejected, (state, action) => {
                state.isLoading = false
                state.error = true
            })
        },

    }
)




export default myBagSlice.reducer

