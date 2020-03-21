package com.splitwise.springboot.splitwiseworks.beans;

import java.util.Date;
import java.util.HashMap;
import java.util.List;

import org.springframework.data.annotation.Id;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
public class Expences {
	
	@Id
	public int expenseId;
	public String expenseName;
	public double expense;
	public Date date;
	public String paidby;
	public String status;
	public int groupeid;
	public HashMap<Integer ,Boolean> gstatus;
	
	
	
	public int getExpenseId() {
		return expenseId;
	}



	public void setExpenseId(int expenseId) {
		this.expenseId = expenseId;
	}



	public String getExpenseName() {
		return expenseName;
	}



	public void setExpenseName(String expenseName) {
		this.expenseName = expenseName;
	}



	public double getExpense() {
		return expense;
	}



	public void setExpense(double expense) {
		this.expense = expense;
	}



	public Date getDate() {
		return date;
	}



	public void setDate(Date date) {
		this.date = date;
	}



	public String getPaidby() {
		return paidby;
	}



	public void setPaidby(String paidby) {
		this.paidby = paidby;
	}



	public String getStatus() {
		return status;
	}



	public void setStatus(String status) {
		this.status = status;
	}



	public int getGroupeid() {
		return groupeid;
	}



	public void setGroupeid(int groupeid) {
		this.groupeid = groupeid;
	}



	public HashMap<Integer, Boolean> getGstatus() {
		return gstatus;
	}



	public void setGstatus(HashMap<Integer, Boolean> gstatus) {
		this.gstatus = gstatus;
	}



	public Expences(int expenseId, String expenseName, double expense, Date date, String paidby, String status,
			int groupeid) {
		super();
		this.expenseId = expenseId;
		this.expenseName = expenseName;
		this.expense = expense;
		this.date = date;
		this.paidby = paidby;
		this.status = status;
		this.groupeid = groupeid;
	}
	
	


}
