import { useState } from "react"
import ProductCard from "../../components/ProductCard/ProductCard";
import EditCard from "../../components/EditCard/EditCard";
import AddCard from "../../components/AddCard/AddCard";
import "../Products/Products.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function Products() {

    const initialProducts = [];

    const [products, setProducts] = useState(initialProducts);
    const [searchProduct, setSearchProduct] = useState("");
    const [filteredProducts, setFilteredProducts] = useState(initialProducts);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [isEdit, setIsEdit] = useState(false);
    const [isAdd, setIsAdd] = useState(false);

    const handleSearch = () => {
        try {
            if (searchProduct.trim()) {
                const filtered = products.filter((productItem) => (
                    productItem.name.toLowerCase().includes(searchProduct.toLowerCase()) || productItem.details.toLowerCase().includes(searchProduct.toLowerCase()))
                );
                
                if (filtered.length > 0) {
                    setFilteredProducts(filtered);
                } else {
                    alert(`No products found by ${searchProduct}`);
                }
            } else {
                alert("Please input a valid product name or details");
            }
        } catch (error) {
            console.log(error);
        }
       
    }

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        handleSearch();
        setSearchProduct("");
    }

    const handleEdit = (id) => {
        try {
            const editProduct = products.find((productItem) => (
                productItem.id === id
            ));
            setSelectedProduct(editProduct);
            setIsEdit(true);
        } catch (error) {
            console.log("Edit product", error);
        }
    }
    
    const handleDelete = (id) => {
        try {
            if (window.confirm("Are you sure to delete this product? ")) {
                const deleteProduct = products.filter((productItem) => (
                    productItem.id != id
                ));
                setProducts(deleteProduct);
                setFilteredProducts(deleteProduct);
            }
        } catch (error) {
            console.log("Delete product", error);
        }
    }   

    const handleSave = (product) => {
        try {
            if (product.id) {
                const updatedProduct = products.map((updateProduct) => (
                    updateProduct.id === product.id ? product : updateProduct
                ));
                setProducts(updatedProduct);
                setFilteredProducts(updatedProduct);
                setIsEdit(false);
                setSelectedProduct(null);
            }
        } catch (error) {
            console.log("Save Product", error);
        }
    }

    const handleAdd = (product) => {
        try {
            const newProduct = {
                ...product, 
                id: products.length > 0 ? products[products.length - 1].id + 1 : 1
            }
            const updatedProduct = [...products, newProduct];
            setProducts(updatedProduct);
            setFilteredProducts(updatedProduct);
            setIsAdd(false);
        } catch (error) {
            console.log("Handle Add", error);
        }
    }


    return (
        <div className="products-container">
            <header>
                <h1 className="products-title">Product Management Storage</h1>
                <div className="header-actions">
                    <button className="logout-btn">
                        <FontAwesomeIcon icon={faRightFromBracket} className="font-logout"/>
                        Logout
                    </button>
                </div>
            </header>           
            <div className="controls-container">
                <form onSubmit={handleSearchSubmit} className="form-container">
                    <input type="text" className="search-product" placeholder="Search products..." value={searchProduct} onChange={(e) => setSearchProduct(e.target.value)}/>
                    <button className="search-btn">
                        <FontAwesomeIcon icon={faMagnifyingGlass} className="font-button"/>
                    </button>
                </form>
                <div className="add-product-container">
                    <button className="add-product-btn" onClick={() => setIsAdd(true)}>Add Product</button>
                </div>
            </div>
            <ProductCard products={filteredProducts} onEdit={handleEdit} onDelete={handleDelete}/>
            {isEdit && <EditCard product={selectedProduct} onSave={handleSave} onClose={() => setIsEdit(false)}/>}
            {isAdd && <AddCard onAdd={handleAdd} onClose={() => setIsAdd(false)}/>}
        </div>
    )
}