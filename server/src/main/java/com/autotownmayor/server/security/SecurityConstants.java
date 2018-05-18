package com.autotownmayor.server.security;

import org.springframework.beans.factory.annotation.Value;

public class SecurityConstants {
    @Value("${jwt.secret}")
    public static final String SECRET = "";       // TODO: Use a better secret
    public static final long TEST_EXPIRATION_TIME = 300_000; // 5 minutes
    public static final long TEST_EXPIRATION_TIME_24HOURS = 86_400_000;
    public static final String TOKEN_PREFIX = "Bearer ";
    public static final String HEADER_STRING = "Authorization";
}
