package com.autotownmayor.server.request;

import com.autotownmayor.server.config.ApplicationConstant;

import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;

public class PasswordChangeRequest {

    @NotNull
    @Min(ApplicationConstant.PASSWORD_MIN_LENGTH)
    @Max(ApplicationConstant.PASSWORD_MAX_LENGTH)
    private String unhashedPassword;

    public PasswordChangeRequest() {
    }

    public PasswordChangeRequest(String unhashedPassword) {
        this.unhashedPassword = unhashedPassword;
    }

    public String getUnhashedPassword() {
        return unhashedPassword;
    }

    public void setUnhashedPassword(String unhashedPassword) {
        this.unhashedPassword = unhashedPassword;
    }
}
