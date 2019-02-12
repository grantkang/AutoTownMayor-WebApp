package com.autotownmayor.server.rest;

// TODO: Maybe set the values of these constants application-{environment}.properties
public class ResourceConstants {
	public static final String SALES_ITEM_V1 = "/items/v1";
	public static final String CONTACT_MESSAGE_V1 = "/contact/v1";
	public static final String SINGLE_ITEM_PATH = "item/{id}";
	public static final String WITHOUT_PRICES_PATH = "withoutprices/";
	public static final String UPLOAD_ITEM_LIST = "/upload";

	public static final String USERS_V1 = "/users/v1";
	public static final String SIGN_UP = "/signup";
	public static final String LIST_USERS = "/list";
	public static final String CHANGE_PASSWORD = "/changepassword";
	public static final String RESET_PASSWORD = "/passwordreset";
	public static final String RECOVER_USERNAME = "/recoverusername";
	public static final String RESET_PASSWORD_START = "/passwordreset/start";
	public static final String RESET_PASSWORD_END = "/passwordreset/end";

	public static final String DEFAULT_ITEM_TYPE = "Inventory Part";
}
