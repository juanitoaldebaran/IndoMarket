export default function ProductCard({products, onEdit, onDelete}) {

    return (
        <div className="product-card-container">
            <table className="product-table">
                <thead>
                    <tr>
                        <th className="header id-header">ID</th>
                        <th className="header name-header">Name</th>
                        <th className="header details-header">Details</th>
                        <th className="header quantity-header">Quantity</th>
                        <th className="header price-header">Price</th>
                        <th className="header actions-header">Actions</th>
                    </tr>
                </thead>
                <tbody>
                {products.map((product) => (
                    <tr key={product.id} className="product-row">
                        <td className="product-cell">{product.id}</td>
                        <td className="product-cell">{product.name}</td>
                        <td className="product-cell">{product.details}</td>
                        <td className="product-cell">{product.quantity}</td>
                        <td className="product-cell">${product.price.toFixed(2)}</td>
                        <td className="actions-container">
                            <button className="edit-btn" onClick={() => onEdit(product.id)}>Edit</button>
                            <button className="delete-btn" onClick={() => onDelete(product.id)}>Delete</button>
                        </td>
                    </tr>
                ))}
                {products.length === 0  && (
                    <tr>
                        <td className="empty-message">No Products Available. Add a new product to get started</td>
                    </tr>
                )}
                </tbody>
            </table>
        </div>
    )
}