package com.example.Transaction.controller;

import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.example.Transaction.bean.Expences;
import com.example.Transaction.bean.Group;
import com.example.Transaction.bean.Transaction;
import com.example.Transaction.service.ExpenceProxyService;
import com.example.Transaction.service.GroupProxyService;

@RestController
public class TransactionContoller {
	
	@Autowired
	public ExpenceProxyService es;
	@Autowired
	public GroupProxyService gs;
	
	
	@GetMapping("/groupid/expid/{groupId}/{expid}")
	@CrossOrigin
	public Object getMembers(@PathVariable int groupId,@PathVariable int expid)
	{
		Group  g=gs.getGroupinExpence(groupId);
		Expences e=es.getExpence(expid);
		HashMap<Integer,Boolean> hmap=new HashMap<Integer, Boolean>();
		List <Integer> list=g.getMembers();
		for (Integer i:list) {
		
		hmap.put(i,false);
		}
		
		double amount = e.getExpense()/hmap.size();
		
		Transaction  t=new Transaction(g.getGroupId(),e.getExpenseId(),hmap,amount);
		
		return t;
	}
}
