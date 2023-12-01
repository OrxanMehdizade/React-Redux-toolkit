import {getPostData} from './reducerGoods'


export function addFetchToBag(obj) {
    return function (dispatch) {
        fetch('http://localhost:5000/add-goodsArray', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(obj)
        })
            .then(res => {
                console.log(res)
                if (!res.ok) {
                    console.log(res.statusText)
                }
                return res.text()
            })
            .then(data => dispatch(getPostData(data)))
    }
}

