import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { IProduct, categories, initialProducts} from '../constants/product';


const ProductList = (props: any) => {

    const [produts, setProducts] = useState(initialProducts);

    const getProductByCategory = (catId: number) => {

        const newProducts = initialProducts.filter((item) => {
            return item.category_id == catId;
        })

        setProducts(newProducts);
    }
    

    return (
        <>
            <div className="container">
                <div className="row">
                    <div style={{marginTop: '55px'}} className="col-3">
                        <ul className="list-group">
                            <li className="list-group-item active">Product Category</li>

                            {
                                categories.map((item) => {
                                    return (
                                        <li key={item.id} className="list-group-item "><Link onClick={() => getProductByCategory(item.id)} to={`/products`}>{item.name}</Link></li>
                                    );
                                })
                            }

                        </ul>
                    </div>
                    <div className="col-9">
                
                        <div className="row">
                            <h5 style={{width: '100%'}} className="text-center mt-3 mb-3">Product List</h5>
                        </div>
                        <div className="row">

                        {
                            produts.map((item: IProduct) => {
                                return (
                                    <div className="col-4 mb-3" key={item.id}>
                                        <div className="card">
                                            <div className="card-header">
                                                <h5 className="text-center">{item.name}</h5>
                                            </div>
                                            <div className="card-body">
                                                <div>
                                                    <Link to={`/products/${item.id}`}>
                                                        <img width="200" src={item.src} alt="" />
                                                    </Link>
                                                </div>
                                                <div>
                                                    <strong>Price : $ {item.price} </strong>
                                                </div>
                                            </div>
                                            <div className="card-footer">
                                                <button className="btn btn-primary">Add To Cart</button>
                                                <Link to={`/products/${item.id}`} className="btn btn-warning">View More</Link>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })
                        }





                    </div>
                    </div>
                </div>

            </div>
        </>
    );
}

export default ProductList;