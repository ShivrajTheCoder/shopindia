import React, { Component, useEffect, useReducer, useState } from 'react';
// import { data } from '../fakedata.js';
import axios from "axios";
import * as actions from "./actions.js";
import { Link } from "react-router-dom";

const reducer = (state, action) => {
    switch (action.type) {
        case actions.FETCH:
            return { ...state, loading: true };
        case actions.SUCCESS:
            return { ...state, loading: false, products: action.payload };
        case actions.FAIL:
            return { ...state, loading: false, error: action.payload };
        default:
            return { ...state };
    }
}

export default function AllProducts() {
    // const [products,setProducts]=useState([]);
    const [{ loading, error, products }, dispatch] = useReducer(reducer, {
        products: [],
        loading: true,
        error: "",
    })
    useEffect(() => {
        dispatch({ type: actions.FETCH });
        const fetchData = async () => {
            try {
                const result = await axios.get("/api/products");
                // setProducts(result.data);
                dispatch({ type: actions.SUCCESS, payload: result.data })
            }
            catch (err) {
                dispatch({ type: actions.FAIL, payload: err.message });
            }
        }
        fetchData();
    }, []);
    return (
        <div className='container '>
            {
                loading === true ? <div>...Loading</div> :
                    error ? <div class="alert alert-danger" role="alert">
                        {error}
                    </div> :
                        products.map(product => (
                            <div className="card d-inline-flex col-3 flex-fill my-3 mx-0" style={{ height: "10 px", marginLeft: "5px" }} key={product.id}>
                                <a href={`/product/${product.id}`}>
                                    <img src={product.image} className="card-img-top" alt="..." height={300} />
                                </a>
                                <div className="card-body">
                                    <a href={`/product/${product.id}`}>
                                        <h5 className="card-title">{product.title}</h5>
                                    </a>
                                    <p className="card-text">{(product.description.length < 250) ? product.description : product.description.slice(0, 250) + "...more"}</p>
                                    <a href="#" className="btn btn-warning">Add to cart</a>
                                </div>
                            </div>
                        ))}
        </div>

    )
}
