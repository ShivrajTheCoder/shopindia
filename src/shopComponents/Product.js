import axios from 'axios';
import React, { useEffect, useReducer } from 'react'
import { useParams } from 'react-router-dom'
import * as actions from "./actions.js";

const reducer = (state, action) => {
    switch (action.type) {
        case actions.FETCH:
            return { ...state, loading: true };
        case actions.SUCCESS:
            return { ...state, loading: false, product: action.payload };
        case actions.FAIL:
            return { ...state, loading: false, error: action.payload };
        default:
            return { ...state };
    }
}

export default function Product() {

    const params = useParams();
    const { id } = params;
    console.log(id);

    const [{ loading, error, product }, dispatch] = useReducer(reducer, {
        product: [],
        loading: true,
        error: "",
    })

    useEffect(() => {
        dispatch({ type: actions.FETCH });
        const fetchData = async () => {
            try {
                const result = await axios.get(`/api/products/id/${id}`);
                dispatch({ type: actions.SUCCESS, payload: result.data })
            }
            catch (err) {
                dispatch({ type: actions.FAIL, payload: err.message });
            }
        }
        fetchData();
    }, [id]);

    return (
        loading ? <div>...loading</div>
            : error ? <div>{error}</div> :
                <div className="card">
                    <img src={product.image} className="card-img-top" alt="..." height={600} width={600}/>
                    <div className="card-body">
                        <h5 className="card-title">{product.title}: ${product.price}</h5>
                        <p className="card-text">{product.description}</p>
                        <a href="#" className="btn btn-primary">Add to cart</a>
                    </div>
                </div>
    )
}

