import { configureStore } from '@reduxjs/toolkit';
import goodsSlice from './reducerGoods'
import myBagSlice from './reducerMyBag'

let store = configureStore({
    reducer:{
        myGoodsArray: goodsSlice,
        myBagArray:myBagSlice
    }
})

export default store