package com.anil.converter.core;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

/**
 * @author anil
 */
@SpringBootApplication(scanBasePackages = "com.anil.converter")
@EnableAutoConfiguration
@ComponentScan("com.anil.converter")
public class App {

	public static void main(String[] args) {
		SpringApplication.run(App.class, args);
	}

}
