import React, { Component } from 'react'
import { data } from '../fakedata.js'

export default class allProducts extends Component {
    // constructor(props){
    //     super(props);
    //     this.state={
    //         products:[],
    //     }
    // }
    // componentDidMount(){
    //     this.setState({
    //         products:[...this.products,data],
    //     })
    // }
    render() {
        return (
            <div className='container'>
                {data.map(product => (

                    <div className="card">
                        <img src="..." className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{product.title}</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                ))}
            </div>

        )
    }
}
