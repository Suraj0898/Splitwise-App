package com.example.Transaction.service;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.HttpEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import com.example.Transaction.bean.Group;
@FeignClient(name="splitwise-group-management")
public interface GroupProxyService {
	@GetMapping("/group/{groupId}")
	public Group getGroupinExpence(@PathVariable("groupId") int groupId);

}



