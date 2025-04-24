package com.project.IndoMarketProject.utils;

import com.project.IndoMarketProject.models.User;
import io.jsonwebtoken.Jwt;
import io.jsonwebtoken.Jwts;

import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.stereotype.Component;
import java.util.Date;


@Component
public class JwtUtils {

    private static final String SECRET_KEY = System.getenv("JWT_SECRET_KEY");

    private static final Long EXPIRATION_TIME = 1000L * 60 * 60 * 24;
    public String generateToken(User user) {

        Date now = new Date();

        Date expirationDate = new Date (now.getTime() * EXPIRATION_TIME);

        return Jwts.builder()
                .setSubject(user.getEmail())
                .setIssuedAt(new Date())
                .setExpiration(expirationDate)
                .signWith(SignatureAlgorithm.HS256, SECRET_KEY)
                .compact();
    }

    public boolean validateToken(String token) {
        try {
            Jwts.parserBuilder()
                    .setSigningKey(SECRET_KEY)
                    .build()
                    .parseClaimsJws(token);

            return true;
        } catch (Exception e) {
            return false;
        }
    }

    public String extractUsername(String token) {
        return Jwts.parserBuilder()
                .setSigningKey(SECRET_KEY)
                .build()
                .parseClaimsJws(token)
                .getBody()
                .getSubject();
    }

}
