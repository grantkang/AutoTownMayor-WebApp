package com.autotownmayor.server.persistence.entity;

import com.autotownmayor.server.persistence.enums.AuthorityName;
import com.fasterxml.jackson.annotation.JsonProperty;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.IndexDirection;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@Document
public class ApplicationUserEntity {
    @Id
    @JsonProperty
    private String id;

    // TODO:May have to make a sub-entities for diff kinds of users(ADMIN/EMPLOYEES/CUSTOMERS)
    // This Entity is supposed primarily represent the customers
    @Indexed(unique=true, direction=IndexDirection.DESCENDING, dropDups=true)
    private String username;
    private String password;
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

    public ApplicationUserEntity() {
        super();
    }

    public ApplicationUserEntity(String username, String password) {
        super();
        this.username = username;
        this.password = password;
    }

    public ApplicationUserEntity(String username, String password, Set<AuthorityName> authorities) {
        super();
        this.username = username;
        this.password = password;
        this.authorities = mapToStrings(authorities);
    }

    public ApplicationUserEntity(String username, String password, String firstName, String lastName, String companyName, String email, String resaleNumber, String addressLine1, String addressLine2, String addressCity, String addressState, String addressZip, String mainPhone, String workPhone, String faxNumber, boolean hasQuickBookAccount, List<String> authorities) {
        this.username = username;
        this.password = password;
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
        this.authorities = authorities;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
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

    public List<String> getAuthorities() {
        return authorities;
    }

    public void setAuthorities(Set<AuthorityName> authorities) {
        this.authorities = mapToStrings(authorities);
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

    public void setAuthorities(List<String> authorities) {
        this.authorities = authorities;
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

    // TODO: Previous error that I thought was caused by enums was caused by a typo in the constructor, look into seeing
    //       if enums work
    // Probably bad practice but I did this since MongoDB doesn't support enums by default
    private static List<String> mapToStrings(Set<AuthorityName> authorities) {
        return authorities.stream()
                .map(authority -> new String(authority.name()))
                .collect(Collectors.toList());
    }
}
