package com.autotownmayor.server.security.aspect;

import com.autotownmayor.server.persistence.enums.AuthorityName;
import com.autotownmayor.server.security.annotation.RestSecurity;
import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.aspectj.lang.reflect.MethodSignature;
import org.springframework.core.annotation.AnnotationUtils;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;

import java.lang.reflect.Method;
import java.util.Arrays;
import java.util.HashSet;
import java.util.Set;
import java.util.stream.Collectors;

@Aspect
@Component
public class RestSecurityAspect {
    private static final String ACCESS_DENIED_MESSAGE = "You are not authorized to access this resource.";

    @Before("execution(* com.autotownmayor.server.rest..*(..))")
    public void before(JoinPoint joinPoint) throws AccessDeniedException {
        System.out.println("Intercepted");
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();

        Set<String> userPermissions = auth.getAuthorities().stream().map(g -> g.getAuthority()).collect(Collectors.toSet());

        Method method = ((MethodSignature)joinPoint.getSignature()).getMethod();

        if (userPermissions.contains(AuthorityName.ROLE_ADMIN.name())) {
            return;
        }

        RestSecurity restSecurity = AnnotationUtils.findAnnotation(method, RestSecurity.class);

        Set<String> allowedPermissions = new HashSet<>();

        if (restSecurity != null) {
            allowedPermissions.addAll(Arrays.asList(restSecurity.value()).stream().map(r -> r.name()).collect(Collectors.toSet()));
        }

        // If the allowedPermissions set is empty, then everyone with a valid Authentication is allowed to access the resource.
        if (allowedPermissions.isEmpty() || allowedPermissions.removeAll(userPermissions)) {
            return;
        }

        // Deny access if none of the permissions match.
        else {
            throw new AccessDeniedException(ACCESS_DENIED_MESSAGE);
        }
    }

}
