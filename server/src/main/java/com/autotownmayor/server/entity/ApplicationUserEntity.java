package com.autotownmayor.server.entity;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;

public class ApplicationUserEntity {
    // TODO: figure out how to enforce the uniqueness of usernames
    @Indexed(unique=true)
    private String username;
    private String password;

    public ApplicationUserEntity() {
        super();
    }

    public ApplicationUserEntity(String username, String password) {
        super();
        this.username = username;
        this.password = password;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
