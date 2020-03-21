package com.splitwise.springboot.splitwiseworksspring.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.netflix.hystrix.contrib.javanica.annotation.HystrixCommand;
import com.splitwise.springboot.splitwiseworksspring.beans.Group;
import com.splitwise.springboot.splitwiseworksspring.service.GroupDBService;
import com.splitwise.springboot.splitwiseworksspring.service.UserProxy;

@RestController
public class GroupDBController {

	@Autowired
	private GroupDBService groupService;
	
	@Autowired
	private UserProxy userProxy;
	
	@GetMapping("/group/{groupId}")
	public Optional<Group> getGroup(@PathVariable int groupId) {
		return groupService.getGroupById(groupId);
	}
	
	@PostMapping("/group")
	public Group insertGroup(@RequestBody Group group) {
		return groupService.insertGroup(group);
	}
	
	@PutMapping("/group")
	public Group updateGroup(@RequestBody Group group) {
		return groupService.updateGroup(group);
	}
	
	@DeleteMapping("/group/{groupId}")
	public void deleteGroup(@PathVariable int groupId) {
		groupService.deleteGroup(groupId);
	}
	
	@GetMapping("/group")
	public List<Group> getAllGroups() {
		return groupService.getAllGroups();
	}
	
	//Feign
	@HystrixCommand(fallbackMethod = "fallBackMethodGroup")
	@GetMapping("/group/{groupId}/{userid}")
	public Object getUserInGroup(@PathVariable int groupId, @PathVariable int userid) {
		return userProxy.getUserInGroup(userid);
	}
	
	public Object fallBackMethodGroup(int groupId, int userId) {
		throw new RuntimeException("Hysterix: User service not running ");
		//Object empty = new Object();
		//empty = "hysterix";
		//return empty;
	}
	
	@GetMapping("/group/userid/{userid}")
    public List<Group> getGroupsByUserId(@PathVariable int userid)
    {
      
        List<Group> groups = groupService.getAllGroups();
        List<Group> returnGroups=new ArrayList<Group>();
        for(Group g:groups)
        {
            for(Integer id:g.getMembers())
            {
                if(id==userid)
                {
                    returnGroups.add(g);
                }
            }
        }
        return returnGroups;
    }
	
}
