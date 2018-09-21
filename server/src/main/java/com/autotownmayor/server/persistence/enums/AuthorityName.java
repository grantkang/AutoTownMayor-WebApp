package com.autotownmayor.server.persistence.enums;

public enum AuthorityName {

    ROLE_USER ("ROLE_ADMIN", "Administrator"),
    ROLE_ADMIN ("ROLE_USER", "Standard user")

    ;

    private String name;
    private String category;
    private String categoryAction;
    private String description;

    private AuthorityName(String name, String description) {
        this.name = name;
        this.description = description;
    }

    private AuthorityName(String name, String category, String categoryAction, String description) {
        this.name = name;
        this.category = category;
        this.categoryAction = categoryAction;
        this.description = description;
    }

    public String getName() {
        return name;
    }

    public String getCategory() {
        return category;
    }

    public String getCategoryAction() {
        return categoryAction;
    }

    public String getDescription() {
        return description;
    }


}
