import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import "../EditCard/EditCard.css";
import { useState } from "react";

export default function EditCard({product, onSave, onClose}) {

    const [productData, setProductData] = useState(
       {
        id: product?.id || null,
        name: product?.name || "",
        details: product?.details || "",
        quantity: product?.quantity || 0,
        price: product?.price || 0,
       }
    );

    const handleChange = (e) => {
        const {name, value} = e.target;
        setProductData((prevData) => ({
            ...prevData, 
            [name]: name === "quantity" || name === "price" ? parseFloat(value) || 0 : value,
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            if (productData.name.trim() === "" || productData.details.trim() === "") {
                alert("Please fill the blank field");
            }

            onSave(productData);
        } catch (error) {
            console.log("Error in submit the field", error);
        }
    }

    return (
        <div className="edit-card-backdrop">
            <div className="edit-card-container">
                <div className="edit-card-header-container">
                    <h2 className="edit-card-header">Edit Products</h2>
                    <button className="close-btn" onClick={onClose} type="button">
                        <FontAwesomeIcon icon={faXmark} className="close-icon"/>
                    </button>
                </div>
                <form onSubmit={handleSubmit} className="edit-form-container">
                    <div className="form-group">
                        <label htmlFor="name" className="label name">Product Name</label>
                        <input id="name" name="name" type="text" required className="product-name" value={productData.name} onChange={handleChange}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="details" className="label details">Product Details</label>
                        <textarea id="details" name="details" required className="product-details" value={productData.details} onChange={handleChange}></textarea>
                    </div>
                    <div className="form-row">
                        <div className="form-quantity">
                            <label htmlFor="quantity" className="label quantity">Quantity</label>
                            <input id="quantity" name="quantity" className="input-quantity" type="number" required value={productData.quantity} min={0} onChange={handleChange}/>
                        </div>
                        <div className="form-row">
                            <div className="form-price">
                                <label htmlFor="price" className="label price">Price</label>
                                <input id="price" name="price" className="input-price" type="number" required value={productData.price} min={0} onChange={handleChange}/>
                            </div>
                        </div>
                    </div>
                    <div className="form-option-button">
                        <button type="submit" className="button-option save">Save</button>
                        <button type="button" className="button-option cancel" onClick={onClose}>Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    )
}