import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {addFetchToBag } from '../store/fetchs';
import {fetchContent} from "../store/reducerGoods";
import {Spin} from "antd";
function Goods() {
    let goods = useSelector((state) => state.myGoodsArray.arrGoods)
    let loading=useSelector((state)=>state.myGoodsArray.isLoading)
    let error=useSelector((state)=>state.myGoodsArray.error)
    let element = useSelector((state) => state.myGoodsArray.postData)
    let dispatch = useDispatch()
    let [flag, setFlag] = useState(false)

    useEffect(() => {
        dispatch(fetchContent())
    }, [dispatch])


    if (loading === true) {

        return <Spin />;

    }

    if (error === true) {
        return <p >error</p>
    }

    console.log(goods)
    return (
        <div className="Goods">
            <ul className='goodsUlClass'>
                {goods.map((item) => {
                    return (
                        <li>
                            <p>{item.product_name}</p>
                            <p>{item.product_description}</p>
                            <p>{item.product_price}</p>
                            <button id='goodsBtnId' onClick={() => {
                                dispatch(addFetchToBag(item))
                                setFlag(true)
                            }}>ADD</button>
                        </li>
                    )
                })}
            </ul>

            {flag && <div className='editWindow'>
                <div >
                    <p>{element}</p>
                    <button onClick={() => {
                        setFlag(!flag)
                    }}>EXIT</button>
                </div>
            </div>}
        </div>
    );
}

export default Goods;
