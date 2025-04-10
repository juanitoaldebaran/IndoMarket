package com.project.IndoMarketProject.models;

import jakarta.persistence.*;

@Entity
@Table(name = "products_table")
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column (nullable = false, name = "product_id")
    private int productID;

    @Column (nullable = false, name = "product_name")
    private String productName;
    @Column (nullable = false, name = "product_details")
    private String productDetails;
    @Column (nullable = false, name = "product_quantity")
    private int productQuantity;
    @Column (nullable = false, name = "product_price")
    private double productPrice;

    public Product(int productID, String productName, String productDetails, int productQuantity, double productPrice) {
        this.productID = productID;
        this.productName = productName;
        this.productDetails = productDetails;
        this.productQuantity = productQuantity;
        this.productPrice = productPrice;
    }

    public Product() {
    }

    public int getProductID() {
        return productID;
    }

    public void setProductID(int productID) {
        this.productID = productID;
    }

    public String getProductName() {
        return productName;
    }

    public void setProductName(String productName) {
        this.productName = productName;
    }

    public String getProductDetails() {
        return productDetails;
    }

    public void setProductDetails(String productDetails) {
        this.productDetails = productDetails;
    }

    public int getProductQuantity() {
        return productQuantity;
    }

    public void setProductQuantity(int productQuantity) {
        this.productQuantity = productQuantity;
    }

    public double getProductPrice() {
        return productPrice;
    }

    public void setProductPrice(double productPrice) {
        this.productPrice = productPrice;
    }
}