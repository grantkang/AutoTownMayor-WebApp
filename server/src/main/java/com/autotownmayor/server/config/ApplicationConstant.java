package com.autotownmayor.server.config;

// TODO: Maybe set the values of these constants application-{environment}.properties
public class ApplicationConstant {
    public static final int USERNAME_MIN_LENGTH = 4;
    public static final int USERNAME_MAX_LENGTH = 30;
    public static final String USERNAME_PATTERN = "^(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$";
    public static final int PASSWORD_MIN_LENGTH = 8;
    public static final int PASSWORD_MAX_LENGTH = 100;
    public static final String EMAIL_PATTERN = "[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?";
}
