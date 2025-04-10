package com.project.IndoMarketProject.service;


import com.project.IndoMarketProject.models.Product;
import com.project.IndoMarketProject.repository.ProductRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductServiceImpl implements ProductService{

    private final ProductRepo productRepository;

    @Autowired
    public ProductServiceImpl(ProductRepo productRepository) {
        this.productRepository = productRepository;
    }

    @Override
    public Product createProduct(Product product) {
        return productRepository.save(product);
    }

    @Override
    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    @Override
    public Product getProductByID(int productID) {
        return productRepository.findById(productID)
                .orElseThrow(() -> new RuntimeException("No Product Found by ID" + productID));
    }

    @Override
    public Product updateProduct(int productID, Product product) {
        Product newProduct = getProductByID(productID);
        newProduct.setProductName(product.getProductName());
        newProduct.setProductDetails(product.getProductDetails());
        newProduct.setProductQuantity(product.getProductQuantity());
        newProduct.setProductPrice(product.getProductPrice());
        return productRepository.save(newProduct);
    }

    @Override
    public void deleteProduct(int productID) {
        Product deletedProduct = getProductByID(productID);
        productRepository.delete(deletedProduct);
    }
}