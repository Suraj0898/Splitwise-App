package com.splitwise.springboot.SplitwiseWorks.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.netflix.hystrix.contrib.javanica.annotation.HystrixCommand;
import com.netflix.ribbon.proxy.annotation.Hystrix;
import com.splitwise.springboot.SplitwiseWorks.beans.User;
import com.splitwise.springboot.SplitwiseWorks.service.UserDBService;

@RestController
public class UserDBController {
	
	@Autowired
	private UserDBService userService;
	
	
	@PostMapping("/user-db")
	public User saveUser(@RequestBody User user) {
		return userService.insertUser(user);
	}
	
	@GetMapping("/user-db")
	//@HystrixCommand(fallbackMethod="fallBackMethodUser")
	public List<User> getAllUsers(){
		return userService.getAllUsers();
	}
	
	@PutMapping("/user-db")
	public User updateUser(@RequestBody User user) {
		return userService.updateUser(user);
	}
	
	@DeleteMapping("/user-db/{userid}")
	public void deleteEmployee(@PathVariable int userid) {
		userService.deleteUser(userid);
	}
	
	@GetMapping("user-db/{userid}")
	public Optional<User> getUsers(@PathVariable int userid){
		return userService.getUserById(userid);
	}
}

	