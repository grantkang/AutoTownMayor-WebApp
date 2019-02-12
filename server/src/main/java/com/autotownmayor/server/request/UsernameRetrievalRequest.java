package com.autotownmayor.server.request;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;

public class UsernameRetrievalRequest {

    @NotNull
    @Email
    private String email;

    public UsernameRetrievalRequest() {
    }

    public UsernameRetrievalRequest(String email) {
        this.email = email;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}
