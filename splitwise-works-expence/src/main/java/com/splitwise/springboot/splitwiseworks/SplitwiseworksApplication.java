package com.splitwise.springboot.splitwiseworks;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.circuitbreaker.EnableCircuitBreaker;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.cloud.openfeign.EnableFeignClients;

@EnableCircuitBreaker
@EnableFeignClients("com.splitwise.springboot.splitwiseworks.service")
@EnableDiscoveryClient
@SpringBootApplication
public class SplitwiseworksApplication {

	public static void main(String[] args) {
		SpringApplication.run(SplitwiseworksApplication.class, args);
	}

}
