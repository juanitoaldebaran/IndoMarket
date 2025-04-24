package com.project.IndoMarketProject.service;

import com.project.IndoMarketProject.models.User;
import org.springframework.stereotype.Service;

@Service
public interface AuthService {
    String registerUser(User user);
    String authenticateUser(User user);

}
