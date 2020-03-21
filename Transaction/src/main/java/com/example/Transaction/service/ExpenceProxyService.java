package com.example.Transaction.service;

import java.util.Optional;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.HttpEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import com.example.Transaction.bean.Expences;

@FeignClient(name="splitwise-expences-management")
public interface ExpenceProxyService {
	@GetMapping("/exp/{expid}")
	public Expences getExpence(@PathVariable("expid") int expid);
	
	
}
