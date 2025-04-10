package com.project.IndoMarketProject.service;

import com.project.IndoMarketProject.models.Product;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface ProductService {
    Product createProduct(Product product);
    List<Product> getAllProducts();
    Product getProductByID(int productID);
    Product updateProduct(int productID, Product product);
    void deleteProduct(int productID);
}