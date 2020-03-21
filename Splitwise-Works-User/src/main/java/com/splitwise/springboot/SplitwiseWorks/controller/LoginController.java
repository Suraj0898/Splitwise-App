package com.splitwise.springboot.SplitwiseWorks.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.splitwise.springboot.SplitwiseWorks.beans.User;
import com.splitwise.springboot.SplitwiseWorks.beans.UserLogin;
import com.splitwise.springboot.SplitwiseWorks.exception.UserNotFoundException;
import com.splitwise.springboot.SplitwiseWorks.service.UserDBService;

@RestController
public class LoginController {
	
	@Autowired
	private UserDBService userService;

	@PostMapping("/user-db/loginValidate")
    public ResponseEntity<UserLogin> login(@RequestBody UserLogin userLogin) throws UserNotFoundException {
        int userid = userLogin.getUserid();
        String password = userLogin.getPassword();
        if(existUser(userid)==false) {
            throw new UserNotFoundException("User Not Found");
        }
        Optional<User> user=userService.getUserById(userid);
        System.out.println(userid);
        System.out.println(password);
        if(user.isPresent()) {
            System.out.println("true1");
            User us = user.get();
            if(Integer.valueOf(userid).equals(us.getUserid()) && password.equals(us.getPassword())) {
                System.out.println("true");
                return new ResponseEntity<UserLogin>(userLogin, HttpStatus.OK);
            }
        }
        return new ResponseEntity<UserLogin>(HttpStatus.BAD_REQUEST);
    }
	
	public boolean existUser(int userid) {
		Optional<User> user=userService.getUserById(userid);
			if(!user.isPresent()) 
				return false;
			else
				return true;
			}
}
