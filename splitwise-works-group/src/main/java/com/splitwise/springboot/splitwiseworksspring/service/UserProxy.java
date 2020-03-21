package com.splitwise.springboot.splitwiseworksspring.service;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.HttpEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@FeignClient(name="splitwise-user-management")
public interface UserProxy {
	
	@GetMapping("/user-db/{userid}")
	public HttpEntity<Object> getUserInGroup(@PathVariable("userid") int userid);

}
