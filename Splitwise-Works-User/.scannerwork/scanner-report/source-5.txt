package com.splitwise.springboot.SplitwiseWorks.repo;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import com.splitwise.springboot.SplitwiseWorks.beans.User;

public interface UserRepository extends MongoRepository<User, Integer> {
	
	@Query(value="{'userid':1, 'email':1}")
	
	List<User> findById(int userid);
	
}
