package com.splitwise.springboot.splitwiseworks.mongorepo;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.splitwise.springboot.splitwiseworks.beans.Expences;

public interface ExpencesRepositry  extends MongoRepository<Expences, Integer>{
	
	

}


