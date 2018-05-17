package com.autotownmayor.server.security;

public class SecurityConstants {
    public static final String SECRET = "Secret";       // TODO: Use a better secret
    public static final long TEST_EXPIRATION_TIME = 300_000; // 5 minutes
    public static final long TEST_EXPIRATION_TIME_24HOURS = 86_400_000;
    public static final String TOKEN_PREFIX = "Bearer ";
    public static final String HEADER_STRING = "Authorization";
}
