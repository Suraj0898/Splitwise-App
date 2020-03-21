package com.splitwise.springboot.splitwiseworksspring.repo;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.splitwise.springboot.splitwiseworksspring.beans.Group;

public interface GroupRepository extends MongoRepository<Group, Integer>{
	
	//if the mongo repository does not give implicit methods

}
