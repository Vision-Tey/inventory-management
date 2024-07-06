import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import './CreateProduct.css'
import LoginAdmin from './LoginAdmin'
import { useStateContext } from '../contexts/ContextProvider';

function CreateProduct() {
    const {admin} = useStateContext();
    const [name, setName] = React.useState('');
    const [quantity, setQuantity] = React.useState(0);
    const [rating, setRating] = React.useState(0);
    const [price, setPrice] = React.useState(0)
    const [category, setCategory] = React.useState('');
    const [image, setImage] = useState(null);
    const [progress, setProgress] = useState(0);
    const [details, setDetails] = useState('');
    const [categories, setCategories] = useState([]);
    const [error, setError] = useState('');


    const handleUpload = async (event) => {
        event.preventDefault();

       
    }

    const handleChange = (e) => {
        if (e.target.files[0]) {
            setImage(e.target.files[0]);
        }
    };

    return (

        <>
            {admin ? (
                <>
                    <div className="breadcrumbs admin-breads">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-6 col-md-6 col-12">
                                    <div className="breadcrumbs-content">
                                        <h1 className="page-title">Create Product</h1>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-12">
                                    <ul className="breadcrumb-nav">
                                        <li><Link to="/admin"><i className="lni lni-home"></i> Home</Link></li>
                                        <li>Create Product</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="account-login section">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6 offset-lg-3 col-md-10 offset-md-1 col-12">
                                    <div className="register-form create-prod">
                                        {
                                            error !== '' ? (
                                                <div className="alert alert-danger">
                                                    {error}
                                                </div>
                                            ) : ('')
                                        }
                                        <form className="row">
                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <label htmlFor="reg-fn">Product Name</label>
                                                    <input value={name} onChange={event => setName(event.target.value)} className="form-control" type="text" id="reg-fn" required />
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <label htmlFor="reg-ln">Picture</label>
                                                    <progress className="imageupload__progress" value={progress} max="100" />
                                                    <input className="form-control" type="file" id="reg-ln" onChange={handleChange} />
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <label htmlFor="reg-phone">Category</label>
                                                    <select className="form-control" onChange={event => setCategory(event.target.value)} id="reg-phone">
                                                        <option value="">Select Category</option>
                                                        {categories.map(({ id, category }) => (
                                                            <option key={id} value={category.name} className="category-options">{category.name}</option>
                                                        ))}
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <label htmlFor="reg-email">Price</label>
                                                    <input value={price} onChange={event => setPrice(event.target.value)} className="form-control" type="email" id="reg-email" required />
                                                </div>
                                            </div>

                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <label htmlFor="reg-pass">Quantity</label>
                                                    <input value={quantity} onChange={event => setQuantity(event.target.value)} className="form-control" type="text" id="reg-pass" required />
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <label htmlFor="reg-pass-confirm">Rating</label>
                                                    <input value={rating} onChange={event => setRating(event.target.value)} className="form-control" type="text" id="reg-pass-confirm" required />
                                                </div>
                                            </div>
                                            <div className="col-sm-12">
                                                <div className="form-group">
                                                    <label htmlFor="reg-pass-detail">Description</label>
                                                    <textarea value={details} onChange={event => setDetails(event.target.value)} className="form-control" type="text" id="reg-pass-detail" required>
                                                    </textarea>
                                                </div>
                                            </div>
                                            <div className="button">
                                                <button className="btn" type="submit" onClick={handleUpload} >Create Product</button>
                                            </div>

                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            ) : (
                <LoginAdmin />
            )}
        </>
    )
}

export default CreateProduct
