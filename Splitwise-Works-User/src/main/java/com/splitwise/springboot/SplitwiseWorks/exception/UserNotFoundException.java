package com.splitwise.springboot.SplitwiseWorks.exception;

public class UserNotFoundException extends Exception{
	private String message;
	public UserNotFoundException(String message) {
		// TODO Auto-generated constructor stub
		
		super();
		this.message=message;
		
	}
	
	public String getMessage() {
		return this.message;
	}

}