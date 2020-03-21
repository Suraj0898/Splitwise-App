package com.splitwise.eurekasplitwiseserver;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.server.EnableEurekaServer;

@EnableEurekaServer
@SpringBootApplication
public class EurekaSplitwiseServerApplication {

	public static void main(String[] args) {
		SpringApplication.run(EurekaSplitwiseServerApplication.class, args);
	}

}
