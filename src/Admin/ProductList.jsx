import React, { useEffect, useState } from 'react'
import '../Pages/Cart.css'
import { Link } from 'react-router-dom'
import ProductCard from './ProductCard';
import LoginAdmin from './LoginAdmin'
import { useStateContext } from '../contexts/ContextProvider';

const dummyData = [
    {
        id: 1,
        product: {
            productId: 'PRD001',
            productName: 'Product A',
            category: 'Category 1',
            unitPrice: 25.99,
            quantity: 1000,
            rating: 4.5,
            image: 'path/to/image1.jpg'
        }
    },
    {
        id: 2,
        product: {
            productId: 'PRD002',
            productName: 'Product B',
            category: 'Category 2',
            unitPrice: 19.99,
            quantity: 800,
            rating: 4.2,
            image: 'path/to/image2.jpg'
        }
    },
    {
        id: 3,
        product: {
            productId: 'PRD003',
            productName: 'Product C',
            category: 'Category 1',
            unitPrice: 15.49,
            quantity: 1500,
            rating: 4.0,
            image: 'path/to/image3.jpg'
        }
    },
    {
        id: 4,
        product: {
            productId: 'PRD004',
            productName: 'Product D',
            category: 'Category 3',
            unitPrice: 29.99,
            quantity: 100,
            rating: 4.7,
            image: 'path/to/image4.jpg'
        }
    },
    {
        id: 5,
        product: {
            productId: 'PRD005',
            productName: 'Product E',
            category: 'Category 2',
            unitPrice: 22.99,
            quantity: 20,
            rating: 4.3,
            image: 'path/to/image5.jpg'
        }
    },
    {
        id: 6,
        product: {
            productId: 'PRD006',
            productName: 'Product F',
            category: 'Category 1',
            unitPrice: 17.99,
            quantity: 500,
            rating: 4.1,
            image: 'path/to/image6.jpg'
        }
    },
    {
        id: 7,
        product: {
            productId: 'PRD007',
            productName: 'Product G',
            category: 'Category 3',
            unitPrice: 24.99,
            quantity: 400,
            rating: 4.6,
            image: 'path/to/image7.jpg'
        }
    },
    {
        id: 8,
        product: {
            productId: 'PRD008',
            productName: 'Product H',
            category: 'Category 2',
            unitPrice: 18.75,
            quantity: 160,
            rating: 4.4,
            image: 'path/to/image8.jpg'
        }
    },
    {
        id: 9,
        product: {
            productId: 'PRD009',
            productName: 'Product I',
            category: 'Category 1',
            unitPrice: 21.50,
            quantity: 280,
            rating: 4.8,
            image: 'path/to/image9.jpg'
        }
    },
    {
        id: 10,
        product: {
            productId: 'PRD010',
            productName: 'Product J',
            category: 'Category 3',
            unitPrice: 27.99,
            quantity: 9,
            rating: 4.9,
            image: 'path/to/image10.jpg'
        }
    },
    {
        id: 11,
        product: {
            productId: 'PRD011',
            productName: 'Product K',
            category: 'Category 2',
            unitPrice: 16.99,
            quantity: 250,
            rating: 3.9,
            image: 'path/to/image11.jpg'
        }
    },
    {
        id: 12,
        product: {
            productId: 'PRD012',
            productName: 'Product L',
            category: 'Category 1',
            unitPrice: 23.49,
            quantity: 100,
            rating: 4.2,
            image: 'path/to/image12.jpg'
        }
    },
    {
        id: 13,
        product: {
            productId: 'PRD013',
            productName: 'Product M',
            category: 'Category 3',
            unitPrice: 19.25,
            quantity: 13,
            rating: 4.5,
            image: 'path/to/image13.jpg'
        }
    },
    {
        id: 14,
        product: {
            productId: 'PRD014',
            productName: 'Product N',
            category: 'Category 2',
            unitPrice: 14.99,
            quantity: 17,
            rating: 4.0,
            image: 'path/to/image14.jpg'
        }
    },
    {
        id: 15,
        product: {
            productId: 'PRD015',
            productName: 'Product O',
            category: 'Category 1',
            unitPrice: 26.99,
            quantity: 7,
            rating: 4.6,
            image: 'path/to/image15.jpg'
        }
    },
];



function ProductList() {
    const [products, setProducts] = useState(dummyData);
    const {admin} = useStateContext();


    return (
        <>
            {!admin ? <LoginAdmin /> : (
                <>
                    <div className="breadcrumbs admin-breads">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-6 col-md-6 col-12">
                                    <div className="breadcrumbs-content">
                                        <h1 className="page-title">Products List</h1>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-12">
                                    <ul className="breadcrumb-nav">
                                        <li><Link to="/admin"><i className="lni lni-home"></i> Home</Link></li>
                                        <li>Products</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="shopping-cart section">
                        <div className="container">
                            <div className="cart-list-head">
                                <div className="row">
                                    <div className="col-lg-12 col-md-6 col-12 row-admd">
                                        <div className="cart-list-head-right row-add">
                                            <Link to="/admin/createproduct"><i className="lni lni-plus"></i> Add Product</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="cart-list-title">
                                    <div className="row">
                                        <div className="col-lg-1 col-md-3 col-12">
                                            <p> No.</p>
                                        </div>
                                        <div className="col-lg-1 col-md-1 col-12">
                                            <p> Image</p>
                                        </div>
                                        <div className="col-lg-2 col-md-3 col-12">
                                            <p>Product ID</p>
                                        </div>
                                        <div className="col-lg-3 col-md-3 col-12">
                                            <p>Product Name</p>
                                        </div>
                                        <div className="col-lg-2 col-md-2 col-12">
                                            <p>Category</p>
                                        </div>
                                        <div className="col-lg-1 col-md-2 col-12">
                                            <p>Unit Price</p>
                                        </div>
                                        <div className="col-lg-1 col-md-2 col-12">
                                            <p>Quantity</p>
                                        </div>
                                        <div className="col-lg-1 col-md-2 col-12">
                                            <p>Rating</p>
                                        </div>

                                    </div>
                                </div>

                                {

                                    products.map(({ id, product }, index) => (

                                        <ProductCard key={id} id={id} item={product} index={index} />
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </>
            )}
        </>
    )
}

export default ProductList
