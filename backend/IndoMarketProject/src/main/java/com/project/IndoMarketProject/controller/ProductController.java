package com.project.IndoMarketProject.controller;

import com.project.IndoMarketProject.models.Product;
import com.project.IndoMarketProject.service.ProductServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/products")
@CrossOrigin(origins = "http://localhost:3000")
public class ProductController {
    private final ProductServiceImpl productService;

    @Autowired
    public ProductController(ProductServiceImpl productService) {
        this.productService = productService;
    }

    @PostMapping("/create")
    public ResponseEntity<Product> generateProduct(@RequestBody Product product) {
        try {
            Product newProduct = productService.createProduct(product);
            return new ResponseEntity<>(newProduct, HttpStatus.CREATED);
        } catch (RuntimeException e) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping("/get/{id}")
    public ResponseEntity<Product> fetchProductByID(@PathVariable ("id") int productID) {
        try {
            Product fetchProduct = productService.getProductByID(productID);
            return new ResponseEntity<>(fetchProduct, HttpStatus.OK);
        } catch (RuntimeException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/getProducts")
    public ResponseEntity<List<Product>> fetchProducts() {
        try {
            List<Product> allProducts = productService.getAllProducts();
            return new ResponseEntity<>(allProducts, HttpStatus.OK);
        } catch (RuntimeException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<Product> editProduct(@RequestBody Product product, @PathVariable ("id") int productID) {
        try {
            Product existingProduct = productService.updateProduct(productID, product);
            return new ResponseEntity<>(existingProduct, HttpStatus.OK);
        } catch (RuntimeException e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteProduct(@PathVariable ("id") int productID) {
        try {
            productService.deleteProduct(productID);
            return new ResponseEntity<>("Successfully deleted!", HttpStatus.OK);
        } catch (RuntimeException e) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
    }
}

