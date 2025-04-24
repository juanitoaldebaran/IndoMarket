package com.project.IndoMarketProject.service;

import com.project.IndoMarketProject.repository.UserRepository;
import com.project.IndoMarketProject.utils.JwtUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import com.project.IndoMarketProject.models.User;

@Service
public class AuthServiceImpl implements AuthService {

    @Autowired
    private final UserRepository userRepository;

    @Autowired
    private final JwtUtils jwtUtils;

    public AuthServiceImpl(UserRepository userRepository, JwtUtils jwtUtils) {
        this.userRepository = userRepository;
        this.jwtUtils = jwtUtils;
    }

    private PasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    @Override
    public String registerUser(User user) {
        if (userRepository.existByEmail(user.getEmail())) {
            throw new RuntimeException("Email is already in use");
        }
        user.setPassword(user.getPassword());
        userRepository.save(user);
        return "User registered successfully";
    }

    @Override
    public String authenticateUser(User user) {
        User existingUser = userRepository.findByEmail(user.getEmail())
                .orElseThrow(() -> new RuntimeException("User not found"));
        if (!passwordEncoder.matches(user.getPassword(), existingUser.getPassword())) {
            throw new RuntimeException("Invalid credentials");
        }
        return jwtUtils.generateToken(existingUser);
    }
}
