package com.project.IndoMarketProject.repository;

import com.project.IndoMarketProject.models.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepo extends JpaRepository<Product, Integer> {
}
