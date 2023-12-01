import {createSlice,createAsyncThunk} from "@reduxjs/toolkit";

export const fetchContent = createAsyncThunk(
    'content/fetchContent',
    async () => {
        const res = await fetch('http://localhost:5000/goodsArray')
        const data = await res.json()
        return data
    }
)

const goodsSlice=createSlice(
    {
        name:'myGoodsArray',
        initialState:{
            arrGoods:[],
            postData: null,
            isLoading:false,
            error:null
        },
        reducers:{
            getPostData:(state,action)=>{
                return { ...state, postData: action.payload }
            },
        },
        extraReducers: (builder) => {
            builder.addCase(fetchContent.pending, (state) => {
                state.isLoading = true
            })
            builder.addCase(fetchContent.fulfilled, (state, action) => {
                state.arrGoods = action.payload
                state.isLoading = false
            })
            builder.addCase(fetchContent.rejected, (state, action) => {
                state.isLoading = false
                state.error = true
            })
        },

    }
)


export const {getPostData} =  goodsSlice.actions

export default goodsSlice.reducer

