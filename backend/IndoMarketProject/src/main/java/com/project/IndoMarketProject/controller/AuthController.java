package com.project.IndoMarketProject.controller;

import com.project.IndoMarketProject.service.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.project.IndoMarketProject.models.User;

@RestController
@RequestMapping("/api/auth")
public class AuthController {
    @Autowired
    private final AuthService authService;

    public AuthController(AuthService authService) {
        this.authService = authService;
    }

    @PostMapping("/signup")
    public ResponseEntity<String> registerUser(@RequestBody User user) {
        String message = authService.registerUser(user);
        return new ResponseEntity<>(message, HttpStatus.OK);
    }

    @PostMapping("/signin")
    public ResponseEntity<String> authenticateUser(@RequestBody User user) {
        String token = authService.authenticateUser(user);
        return new ResponseEntity<>(token, HttpStatus.OK);
    }


}
