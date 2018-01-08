package com.autotownmayor.server.config;

import java.time.Duration;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.session.data.mongo.AbstractMongoSessionConverter;
import org.springframework.session.data.mongo.JdkMongoSessionConverter;
import org.springframework.session.data.mongo.config.annotation.web.http.EnableMongoHttpSession;

@Configuration
@EnableMongoHttpSession
public class HttpSessionConfig {

	@Bean
	public AbstractMongoSessionConverter mongoSessionConverter() {
		return new JdkMongoSessionConverter(Duration.ofMinutes(30));
	}
}