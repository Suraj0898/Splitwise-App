package com.splitwise.springboot.SplitwiseWorks;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.Mockito.doNothing;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.boot.test.context.SpringBootTest;

import com.splitwise.springboot.SplitwiseWorks.beans.User;
import com.splitwise.springboot.SplitwiseWorks.controller.UserDBController;
import com.splitwise.springboot.SplitwiseWorks.exception.UserNotFoundException;
import com.splitwise.springboot.SplitwiseWorks.service.UserDBService;

@SpringBootTest
class SplitwiseWorksApplicationTests {

	@InjectMocks
	UserDBController userController;
	
	@Mock
	UserDBService userService;
	
	@BeforeEach
	void setup() throws Exception{
		MockitoAnnotations.initMocks(this);
	}
	
	@Test
	void testpostuser() {
		
		User user=new User();
		user.setUserid(200);
		user.setName("Suraj");
		user.setEmail("suraj@ps.com");
		user.setPassword("suraj1234");
		user.setPhone("9876543210");
		
		when(userService.insertUser(user)).thenReturn(user);
		
		User ex=userController.saveUser(user);
		
		assertNotNull(ex);
		assertEquals("Suraj",ex.getName());
		
	}
	
	@Test
	 void getAllUsersTest() {
        List<User> list = new ArrayList<User>();
        
        User user1 = new User(131,"Preeti","preeti@ps.com","preeti4343","7898765454" );
        User user2 = new User(102,"Vivek","vivek@ps.com","vivek84343","7898766543" );
        User user3 = new User(145,"Prerana","prer@ps.com","prer54343","7898765898" );
        
        list.add(user1);
        list.add(user2);
        list.add(user3);
         
        when(userService.getAllUsers()).thenReturn(list);
         
        //test
        List<User> usrList = userController.getAllUsers();
         
        assertEquals(3, usrList.size());
        verify(userService, times(1)).getAllUsers();
               
    }
	
	@Test
    void deleteUserTest() {
        
        doNothing().when(userService).deleteUser(101);
        //Mockito.doReturn(user).when(userDBService).getUserById(101);
        
        userController.deleteEmployee(101);
        
        // verify that service method was called once
        verify(userService, times(1)).deleteUser(101);
        
    }
	
	@Test
    void updateuserexception() throws UserNotFoundException{
        User user3=new User();
        user3.setUserid(121);
        when(userService.updateUser(user3)).thenReturn(user3);
		
		User ex=userController.updateUser(user3);
		
		assertNotNull(ex);
		assertEquals(121,ex.getUserid());
        
	}
}
	
	
	
	