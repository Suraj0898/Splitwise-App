package com.splitwise.springboot.splitwiseworks.service;

import java.util.List;
import java.util.Optional;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.HttpEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import com.splitwise.springboot.splitwiseworks.beans.Expences;

@FeignClient(name="splitwise-group-management")
public  interface Groupeproxy {
	
	@GetMapping("/group/{groupId}")
	public HttpEntity<Object> getGroupinExpence(@PathVariable("groupId") int groupId);
	
	@GetMapping("/group/{groupId}")
	public List<Expences> getExpenceByGroupId(@PathVariable("groupId") int groupId);
}

