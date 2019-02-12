package com.autotownmayor.server.security;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component
public class SecurityConstants {
    public static String HEADER_STRING;
    public static long LOGIN_EXPIRATION_TIME;
    public static long PASSWORD_RESET_EXPIRATION_TIME;
    public static String PASSWORD_RESET_SECRET;
    public static String SECRET;
    public static String TOKEN_PREFIX;

    @Value("${sec.headerString}")
    public void setHeaderString(String headerString) {
        HEADER_STRING = headerString;
    }

    @Value("${sec.loginExpirationTime}")
    public void setLoginExpirationTime(long expirationTime) {
        LOGIN_EXPIRATION_TIME = expirationTime;
    }

    @Value("${sec.passwordResetExpirationTime}")
    public void setPasswordResetExpirationTime(long passwordResetExpirationTime) { PASSWORD_RESET_EXPIRATION_TIME = passwordResetExpirationTime; }

    @Value("${sec.passwordResetSecret}")
    public void setPasswordResetSecret(String passwordResetSecret) { PASSWORD_RESET_SECRET = passwordResetSecret; }

    @Value("${sec.secret}")
    public void setSecret(String secret) {
        SECRET = secret;
    }

    @Value("${sec.tokenPrefix}")
    public void setTokenPrefix(String tokenPrefix) {
        TOKEN_PREFIX = tokenPrefix;
    }
}
