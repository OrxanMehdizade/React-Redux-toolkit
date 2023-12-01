import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {fetchContent} from "../store/reducerMyBag";
import {Spin} from "antd";

function MyBag() {
    let myBag = useSelector((state) => state.myBagArray.arrMyBag)
    let loading=useSelector((state)=>state.myBagArray.isLoading)
    let error=useSelector((state)=>state.myBagArray.error)

    let dispatch = useDispatch()
    let [flag, setFlag] = useState(false)

    useEffect(() => {
        dispatch(fetchContent())
    }, [dispatch,flag])

    if (loading === true) {

        return <Spin />;

    }
    if (error === true) {
        return <p >error</p>
    }

    return (
        <div className="MyBag">
            <ul className='mybagUlClass'>
                {myBag.map((item) => {
                    return (
                        <li>
                            <p>{item.product_name}</p>
                            <p>{item.product_description}</p>
                            <p>{item.product_price}</p>
                        </li>
                    )
                })}
            </ul>

        </div>
    );
}

export default MyBag;
