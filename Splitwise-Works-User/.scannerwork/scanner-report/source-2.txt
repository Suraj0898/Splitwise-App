package com.splitwise.springboot.SplitwiseWorks.beans;

import org.springframework.data.annotation.Id;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

public class User {
	
	@Id
	private int userid;
    private String name;
    private String email;
    private String password;
    private String phone;
	public int getUserid() {
		return userid;
	}
	public void setUserid(int userid) {
		this.userid = userid;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getPhone() {
		return phone;
	}
	public void setPhone(String phone) {
		this.phone = phone;
	}
	
	
	public User(int userid, String name, String email, String password, String phone) {
		super();
		this.userid = userid;
		this.name = name;
		this.email = email;
		this.password = password;
		this.phone = phone;
	}
	public User() {
	}
	
	
	
    
    
}
