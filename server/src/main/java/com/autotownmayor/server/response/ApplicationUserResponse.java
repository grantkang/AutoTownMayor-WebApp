package com.autotownmayor.server.response;

import java.util.List;

public class ApplicationUserResponse {
    private String username;

    private String firstName;
    private String lastName;
    private String companyName;
    private String email;
    private String resaleNumber;
    private String addressLine1;
    private String addressLine2;
    private String addressCity;
    private String addressState;
    private String addressZip;
    private String mainPhone;
    private String workPhone;
    private String faxNumber;
    private boolean hasQuickBookAccount;

    private List<String> authorities;

    public ApplicationUserResponse() {
    }

    public ApplicationUserResponse(String username, String firstName, String lastName, String companyName, String email, String resaleNumber, String addressLine1, String addressLine2, String addressCity, String addressState, String addressZip, String mainPhone, String workPhone, String faxNumber, boolean hasQuickBookAccount) {
        this.username = username;
        this.firstName = firstName;
        this.lastName = lastName;
        this.companyName = companyName;
        this.email = email;
        this.resaleNumber = resaleNumber;
        this.addressLine1 = addressLine1;
        this.addressLine2 = addressLine2;
        this.addressCity = addressCity;
        this.addressState = addressState;
        this.addressZip = addressZip;
        this.mainPhone = mainPhone;
        this.workPhone = workPhone;
        this.faxNumber = faxNumber;
        this.hasQuickBookAccount = hasQuickBookAccount;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getCompanyName() {
        return companyName;
    }

    public void setCompanyName(String companyName) {
        this.companyName = companyName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getResaleNumber() {
        return resaleNumber;
    }

    public void setResaleNumber(String resaleNumber) {
        this.resaleNumber = resaleNumber;
    }

    public String getAddressLine1() {
        return addressLine1;
    }

    public void setAddressLine1(String addressLine1) {
        this.addressLine1 = addressLine1;
    }

    public String getAddressLine2() {
        return addressLine2;
    }

    public void setAddressLine2(String addressLine2) {
        this.addressLine2 = addressLine2;
    }

    public String getAddressCity() {
        return addressCity;
    }

    public void setAddressCity(String addressCity) {
        this.addressCity = addressCity;
    }

    public String getAddressState() {
        return addressState;
    }

    public void setAddressState(String addressState) {
        this.addressState = addressState;
    }

    public String getAddressZip() {
        return addressZip;
    }

    public void setAddressZip(String addressZip) {
        this.addressZip = addressZip;
    }

    public String getMainPhone() {
        return mainPhone;
    }

    public void setMainPhone(String mainPhone) {
        this.mainPhone = mainPhone;
    }

    public String getWorkPhone() {
        return workPhone;
    }

    public void setWorkPhone(String workPhone) {
        this.workPhone = workPhone;
    }

    public String getFaxNumber() {
        return faxNumber;
    }

    public void setFaxNumber(String faxNumber) {
        this.faxNumber = faxNumber;
    }

    public boolean hasQuickBookAccount() {
        return hasQuickBookAccount;
    }

    public void setHasQuickBookAccount(boolean hasQuickBookAccount) {
        this.hasQuickBookAccount = hasQuickBookAccount;
    }

    public List<String> getAuthorities() {
        return authorities;
    }

    public void setAuthorities(List<String> authorities) {
        this.authorities = authorities;
    }
}
