package com.splitwise.springboot.splitwiseworks.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.splitwise.springboot.splitwiseworks.beans.Expences;
import com.splitwise.springboot.splitwiseworks.mongorepo.ExpencesRepositry;
@Service
public class ExpencesService {
	
	@Autowired
	private ExpencesRepositry exprepo;
	
	public Optional<Expences> getExpenceById(Integer id)
    {
        return exprepo.findById(id);
       
    }
	
	public List<Expences> getAllExpences(){
		return exprepo.findAll();		
	}
	public Expences InsertExpence(Expences e)
	{
		return exprepo.insert(e);
	}
	
	public Expences updateExpences(Expences e)
	{
		return exprepo.save(e);
	}
	public void deleteExpence(int id)
	{
		exprepo.deleteById(id);
	}
}
