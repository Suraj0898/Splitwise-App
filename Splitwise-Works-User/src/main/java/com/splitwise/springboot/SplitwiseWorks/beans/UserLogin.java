package com.splitwise.springboot.SplitwiseWorks.beans;

public class UserLogin {
	private int userid;
	private String password;
	public int getUserid() {
		return userid;
	}
	public void setUserid(int userid) {
		this.userid = userid;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	@Override
	public String toString() {
		return "UserLogin [userid=" + userid + ", password=" + password + "]";
	}
	public UserLogin(int userid, String password) {
		super();
		this.userid = userid;
		this.password = password;
	}
	public UserLogin() {
	}
	
	
}
