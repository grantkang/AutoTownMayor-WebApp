package com.autotownmayor.server.service;

import com.autotownmayor.server.persistence.entity.ApplicationUserEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.ClassPathResource;
import org.springframework.mail.MailException;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;
import org.thymeleaf.TemplateEngine;
import org.thymeleaf.context.Context;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;

@Service
public class NotificationService {

    private JavaMailSender javaMailSender;
    private TemplateEngine templateEngine;

    private final String COMPANY_NAME = "Auto Town Mayor";

    private final String WELCOME_EMAIL_TEMPLATE_NAME = "mail/welcome";
    private final String PASSWORD_RESET_EMAIL_TEMPLATE_NAME_BAD = "mail/password-reset-bad";
    private final String PASSWORD_RESET_EMAIL_TEMPLATE_NAME_GOOD = "mail/password-reset-good";
    private final String USERNAME_RECOVERY_EMAIL_TEMPLATE = "mail/username-recovery";

    @Value("${frontend.url}")
    private String frontEndUrl;

    @Value("${footer}")
    private String emailFooter;

    @Value("${spring.mail.username}")
    private String HELP_EMAIL;

    @Autowired
    public NotificationService(JavaMailSender javaMailSender, TemplateEngine templateEngine) {
        this.javaMailSender = javaMailSender;
        this.templateEngine = templateEngine;
    }

    // DONE
    public void sendPasswordResetNotification(ApplicationUserEntity user, String newPassword) throws MessagingException {
        final Context ctx = new Context();
        ctx.setVariable("password", newPassword);
        ctx.setVariable("firstName", user.getFirstName());
        ctx.setVariable("logo","logo");
        ctx.setVariable("footerContent", emailFooter);
        ctx.setVariable("loginLink", frontEndUrl + "/login");
        ctx.setVariable("siteLink", frontEndUrl);

        final MimeMessage mimeMsg = this.javaMailSender.createMimeMessage();
        final MimeMessageHelper msg = new MimeMessageHelper(mimeMsg, true, "UTF-8");
        msg.setSubject("Password Reset");
        msg.setFrom(HELP_EMAIL);
        msg.setTo(user.getEmail());

        final String htmlContent = this.templateEngine.process(this.PASSWORD_RESET_EMAIL_TEMPLATE_NAME_BAD, ctx);
        msg.setText(htmlContent, true);

        msg.addInline("logo", new ClassPathResource("static/ATM_logo_email_header.png"), "image/png");
        javaMailSender.send(mimeMsg);
    }

    // TODO: Use tokens to reset password instead
    public void sendPasswordResetStartNotification(ApplicationUserEntity user, String passwordResetToken) throws MessagingException {
        String passwordResetUrl = frontEndUrl + "/passwordreset/?token=" + passwordResetToken;

        final Context ctx = new Context();
        ctx.setVariable("firstName", user.getFirstName());
        ctx.setVariable("logo","logo");
        ctx.setVariable("resetLink", passwordResetUrl);
        ctx.setVariable("footerContent", emailFooter);
        ctx.setVariable("siteLink", frontEndUrl);

        final MimeMessage mimeMsg = this.javaMailSender.createMimeMessage();
        final MimeMessageHelper msg = new MimeMessageHelper(mimeMsg, true, "UTF-8");
        msg.setSubject("Password Reset");
        msg.setFrom(HELP_EMAIL);
        msg.setTo(user.getEmail());

        final String htmlContent = this.templateEngine.process(this.PASSWORD_RESET_EMAIL_TEMPLATE_NAME_GOOD, ctx);
        msg.setText(htmlContent, true);

        msg.addInline("logo", new ClassPathResource("static/ATM_logo_email_header.png"), "image/png");
        javaMailSender.send(mimeMsg);
    }

    // TODO: Use tokens to reset password instead
    public void sendSuccessfulPasswordReset(ApplicationUserEntity user) throws MailException {
        SimpleMailMessage mail = new SimpleMailMessage();
        mail.setTo(user.getEmail());
        mail.setFrom(HELP_EMAIL);
        mail.setSubject("Password Reset Success");
        mail.setText("Your password has been successfully reset.");

        javaMailSender.send(mail);
    }

    // DONE
    public void sendUsernameRecoveryNotification(ApplicationUserEntity user) throws MessagingException {
        final Context ctx = new Context();
        ctx.setVariable("firstName", user.getFirstName());
        ctx.setVariable("logo","logo");
        ctx.setVariable("username", user.getUsername());
        ctx.setVariable("footerContent", emailFooter);
        ctx.setVariable("loginLink", frontEndUrl + "/login");
        ctx.setVariable("siteLink", frontEndUrl);

        final MimeMessage mimeMsg = this.javaMailSender.createMimeMessage();
        final MimeMessageHelper msg = new MimeMessageHelper(mimeMsg, true, "UTF-8");
        msg.setSubject("Username Recovery");
        msg.setFrom(HELP_EMAIL);
        msg.setTo(user.getEmail());

        final String htmlContent = this.templateEngine.process(this.USERNAME_RECOVERY_EMAIL_TEMPLATE, ctx);
        msg.setText(htmlContent, true);

        msg.addInline("logo", new ClassPathResource("static/ATM_logo_email_header.png"), "image/png");
        javaMailSender.send(mimeMsg);
    }

    // DONE
    public void sendNewUserNotification(ApplicationUserEntity user) throws MessagingException {
        final Context ctx = new Context();
        ctx.setVariable("companyName", user.getCompanyName());
        ctx.setVariable("firstName", user.getFirstName());
        ctx.setVariable("username", user.getUsername());
        ctx.setVariable("logo","logo");
        ctx.setVariable("footerContent", emailFooter);
        ctx.setVariable("loginLink", frontEndUrl + "/login");
        ctx.setVariable("siteLink", frontEndUrl);

        final MimeMessage mimeMsg = this.javaMailSender.createMimeMessage();
        final MimeMessageHelper msg = new MimeMessageHelper(mimeMsg, true, "UTF-8");
        msg.setSubject("Welcome");
        msg.setFrom(HELP_EMAIL);
        msg.setTo(user.getEmail());

        final String htmlContent = this.templateEngine.process(this.WELCOME_EMAIL_TEMPLATE_NAME, ctx);
        msg.setText(htmlContent, true);

        msg.addInline("logo", new ClassPathResource("static/ATM_logo_email_header.png"), "image/png");
        javaMailSender.send(mimeMsg);
    }
}
