package com.autotownmayor.server.service;

import com.autotownmayor.server.persistence.entity.ApplicationUserEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.MailException;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class NotificationService {

    private JavaMailSender javaMailSender;

    private final String COMPANY_NAME = "Auto Town Mayor";
    private final String HELP_EMAIL = "help.autotownmayor@gmail.com";

    @Value("${frontend.url}")
    private String frontEndUrl;

    @Autowired
    public NotificationService(JavaMailSender javaMailSender) {
        this.javaMailSender = javaMailSender;
    }

    // TODO: beginning 3 LoC get reused over and over again, make a function.

    // TODO: Notification for PW recovery
    public void sendPasswordResetNotification(ApplicationUserEntity user, String newPassword) throws MailException {
        SimpleMailMessage mail = new SimpleMailMessage();
        mail.setTo(user.getEmail());
        mail.setFrom(HELP_EMAIL);
        mail.setSubject("Password Reset");
        mail.setText("New Password: " + newPassword);

        javaMailSender.send(mail);

    }

    public void sendPasswordResetStartNotification(ApplicationUserEntity user, String passwordResetToken) throws MailException {
        SimpleMailMessage mail = new SimpleMailMessage();
        mail.setTo(user.getEmail());
        mail.setFrom(HELP_EMAIL);
        mail.setSubject("Password Reset");

        String passwordResetUrl = frontEndUrl + "?token=" + passwordResetToken;

        javaMailSender.send(mail);
    }

    public void sendSuccessfulPasswordReset(ApplicationUserEntity user) throws MailException {
        SimpleMailMessage mail = new SimpleMailMessage();
        mail.setTo(user.getEmail());
        mail.setFrom(HELP_EMAIL);
        mail.setSubject("Password Reset Success");
        mail.setText("Your password has been successfully reset.");

        javaMailSender.send(mail);
    }

    public void sendUsernameRecoveryNotification(ApplicationUserEntity user) throws MailException {
        SimpleMailMessage mail = new SimpleMailMessage();
        mail.setTo(user.getEmail());
        mail.setFrom(HELP_EMAIL);
        mail.setSubject("Username Recovery");
        mail.setText("Username: " + user.getUsername());

        javaMailSender.send(mail);
    }
}
