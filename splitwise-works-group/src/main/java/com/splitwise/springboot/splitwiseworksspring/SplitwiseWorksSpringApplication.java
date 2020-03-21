package com.splitwise.springboot.splitwiseworksspring;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.circuitbreaker.EnableCircuitBreaker;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.cloud.openfeign.EnableFeignClients;

@EnableCircuitBreaker
@EnableFeignClients("com.splitwise.springboot.splitwiseworksspring.service")
@EnableDiscoveryClient
@SpringBootApplication
public class SplitwiseWorksSpringApplication {
	

	public static void main(String[] args) {
		SpringApplication.run(SplitwiseWorksSpringApplication.class, args);
	}

}
