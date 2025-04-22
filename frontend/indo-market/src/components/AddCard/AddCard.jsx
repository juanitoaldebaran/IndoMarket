import "../AddCard/AddCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function AddCard({onAdd, onClose}) {

    const [addProductData, setAddProductData] = useState({
        id: 0,
        name: "",
        details: "",
        price: 0,
        quantity: 0,
    })

    const handleChange = (e) => {
        const {name, value} = e.target;
        setAddProductData((prevProduct) => ({
            ...prevProduct, 
            [name]: name === "quantity" || name === "price" ? parseFloat(value) || 0 : value,
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            if (addProductData.name.trim() === "" || addProductData.details.trim() === "") {
                alert("Please fill out the empty blank field");
                return;
            }
            onAdd(addProductData);
        } catch (error) {
            console.log("Add Submit", error);
        }
    }


    return (
        <div className="add-product-backdrop">
            <div className="add-product-form-container">
                <div className="add-product-header">
                    <h3 className="add-header">Add Product</h3>
                    <button type="button" className="close-btn" onClick={onClose}>
                        <FontAwesomeIcon icon={faXmark} className="close-icon" />
                    </button>
                </div>
                <form onSubmit={handleSubmit} className="form-add-product">
                    <div className="form-group">
                        <label htmlFor="name">Product Name</label>
                        <input id="name" name="name" type="text" value={addProductData.name} className="product-name-input" onChange={handleChange}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="details">Details</label>
                        <input id="details" name="details" type="text" value={addProductData.details} className="product-details-input" onChange={handleChange}/>
                    </div>
                    <div className="form-row">
                        <div className="form-quantity">
                            <label htmlFor="quantity">Quantity</label>
                            <input id="quantity" name="quantity" type="number" value={addProductData.quantity} className="product-quantity-input" min={0} onChange={handleChange}/>
                        </div>
                        <div className="form-price">
                            <label htmlFor="price">Price</label>
                            <input id="price" name="price" type="number" value={addProductData.price} className="product-price-input" min={0} onChange={handleChange}/>
                        </div>
                    </div>
                    <div className="form-option-button">
                        <button type="submit" className="button-option save">Add</button>
                        <button type="button" className="button-option cancel" onClick={onClose}>Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    )
}