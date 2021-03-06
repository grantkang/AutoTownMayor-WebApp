package com.autotownmayor.server.security.annotation;

import com.autotownmayor.server.persistence.enums.AuthorityName;

import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

@Retention(RetentionPolicy.RUNTIME)
@Target(ElementType.METHOD)
public @interface RestSecurity {
    AuthorityName[] value() default {};
}
