package com.splitwise.springboot.splitwiseworks.contoller;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.repository.MongoRepository;
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
import com.splitwise.springboot.splitwiseworks.beans.Expences;
import com.splitwise.springboot.splitwiseworks.mongorepo.ExpencesRepositry;
import com.splitwise.springboot.splitwiseworks.service.ExpencesService;
import com.splitwise.springboot.splitwiseworks.service.Groupeproxy;

@RestController
public class ExpencesControler  {
	
	
	@Autowired
	public ExpencesService es;
	@Autowired
	public Groupeproxy gp;
	
	@GetMapping("/exp/{expid}")
    public Optional<Expences> getExpence(@PathVariable int expid)
    {
        return es.getExpenceById(expid);
    }
	
	@PostMapping("/exp")
	public Expences saveExpences(@RequestBody Expences e)
	
	{
		
		//Expences ep=new Expences(101, "office",10101 , new Date(), "wdwh", "sdkdgj", 101);
				
		return es.InsertExpence(e);
	}
	
	@GetMapping("/exp")
	//@HystrixCommand(fallbackMethod="fallBackMethodUser")
	public List<Expences> getAllExpences(){
		return es.getAllExpences();
	}
	
	@DeleteMapping("/exp/{expid}")
	public void deleteExpence(@PathVariable int expid)
	{
		es.deleteExpence(expid);
	}
	
	@PutMapping("/exp")
	public Expences updateExpence(@RequestBody Expences e )
	{
		return  es.updateExpences(e);
	}
	
	
	
	@HystrixCommand(fallbackMethod =  "fallBackMethodExpence")
	@GetMapping("/exp/{expid}/{groupId}")
	public Object getUserInGroup(@PathVariable int expid,@PathVariable int groupId) {
		return gp.getGroupinExpence(groupId);
		
	}
	public Object fallBackMethodExpence(int expid,int groupId) {
		
		throw new RuntimeException("Hysterix: Group service not running");
	}
	
	@GetMapping("/exp/group/{groupId}")
    public List<Expences> getExpencesByGroupId(@PathVariable int groupId)
    {
		List<Expences> expences = es.getAllExpences();
        List<Expences> returnExpences=new ArrayList<Expences>();
        for(Expences e:expences)
        {
            if(e.getGroupeid()==groupId) {
                returnExpences.add(e);
                }
        }
        return returnExpences;
    }
}


	
	

