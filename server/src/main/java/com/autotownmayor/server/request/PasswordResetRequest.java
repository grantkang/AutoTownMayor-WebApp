package com.autotownmayor.server.request;

import com.autotownmayor.server.config.ApplicationConstant;

import javax.validation.constraints.Email;
import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;

public class PasswordResetRequest {
    @NotNull
    @Min(ApplicationConstant.USERNAME_MIN_LENGTH)
    @Max(ApplicationConstant.USERNAME_MAX_LENGTH)
    private String username;
    @Email
    private String email;

    public PasswordResetRequest() {
    }

    public PasswordResetRequest(String username, String email) {
        this.username = username;
        this.email = email;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}
