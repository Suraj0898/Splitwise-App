package com.splitwise.springboot.SplitwiseWorks.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.splitwise.springboot.SplitwiseWorks.beans.User;
import com.splitwise.springboot.SplitwiseWorks.repo.UserRepository;

@Service
public class UserDBService {
	
	@Autowired
	private UserRepository userRepository;
	
	public  Optional<User> getUserById(Integer userid) 
	{
		return userRepository.findById(userid);
	}
	
	public User insertUser(User user) {
		return userRepository.insert(user);
	}
	
	//Make sure to give ID
	public User updateUser(User user) {
		return userRepository.save(user);
	}
	
	public void deleteUser(Integer userid) {
		userRepository.deleteById(userid);
	}
	
	public List<User> getAllUsers(){
		return userRepository.findAll();		
	}
	

	
}

