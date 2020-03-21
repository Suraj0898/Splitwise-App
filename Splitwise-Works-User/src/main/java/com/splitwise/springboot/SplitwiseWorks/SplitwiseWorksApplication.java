package com.splitwise.springboot.SplitwiseWorks;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.circuitbreaker.EnableCircuitBreaker;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

@EnableDiscoveryClient
@SpringBootApplication
public class SplitwiseWorksApplication {

	public static void main(String[] args) {
		SpringApplication.run(SplitwiseWorksApplication.class, args);
	}

}
