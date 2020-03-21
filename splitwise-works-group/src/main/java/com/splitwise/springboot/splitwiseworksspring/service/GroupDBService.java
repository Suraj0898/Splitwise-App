package com.splitwise.springboot.splitwiseworksspring.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.splitwise.springboot.splitwiseworksspring.beans.Group;
import com.splitwise.springboot.splitwiseworksspring.repo.GroupRepository;

@Service
public class GroupDBService {

	@Autowired
	private GroupRepository groupRepository;
	
	public Optional<Group> getGroupById(Integer groupId) {
		return groupRepository.findById(groupId);
	}
	
	public Group insertGroup(Group group) {
		return groupRepository.insert(group);
	}
	
	public void deleteGroup(Integer groupId) {
		groupRepository.deleteById(groupId);
	}
	
	//make sure you give id, otherwise it will insert
	public Group updateGroup(Group group) {
		return groupRepository.save(group);
	}
	
	public List<Group> getAllGroups(){
		return groupRepository.findAll();
	}
	
	
	
	
}
