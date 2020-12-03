import React, {useState} from 'react';
import { Link, useParams } from 'react-router-dom';

import { initialProducts } from '../constants/product';

const ProductDetail = (props: any) => {

    const params: any = useParams();

    const id = params.id;
    
    const product = initialProducts.filter((item) => item.id == id)[0];
    // const product = params;

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-6 offset-3">

                        <h5 className="text-center">{product.name }</h5>
                        <div>
                            <img width="500" src={product.src} alt=""/>
                        </div>
                        <div>
                            <strong>Price: {product.price}</strong>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProductDetail;