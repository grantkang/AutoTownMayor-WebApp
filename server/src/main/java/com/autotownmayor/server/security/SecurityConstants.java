package com.autotownmayor.server.security;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component
public class SecurityConstants {
    public static String SECRET;
    public static long EXPIRATION_TIME;
    public static String TOKEN_PREFIX;
    public static String HEADER_STRING;

    @Value("${sec.secret}")
    public void setSecret(String secret) {
        SECRET = secret;
    }

    @Value("${sec.expirationTime}")
    public void setExpirationTime(long expirationTime) {
        EXPIRATION_TIME = expirationTime;
    }

    @Value("${sec.tokenPrefix}")
    public void setTokenPrefix(String tokenPrefix) {
        TOKEN_PREFIX = tokenPrefix;
    }

    @Value("${sec.headerString}")
    public void setHeaderString(String headerString) {
        HEADER_STRING = headerString;
    }
}
