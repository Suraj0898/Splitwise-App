package com.example.Transaction.bean;

import java.util.HashMap;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;
@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
@ToString
public class Transaction {
	
	public int gid;
	public int expid;
	public HashMap<Integer ,Boolean> gstatus;
	public double splitAmount;
	
	
	public int getGid() {
		return gid;
	}
	public void setGid(int gid) {
		this.gid = gid;
	}
	public int getExpid() {
		return expid;
	}
	public void setExpid(int expid) {
		this.expid = expid;
	}
	public HashMap<Integer, Boolean> getGstatus() {
		return gstatus;
	}
	public void setGstatus(HashMap<Integer, Boolean> gstatus) {
		this.gstatus = gstatus;
	}
	public double getSplitAmount() {
		return splitAmount;
	}
	public void setSplitAmount(double splitAmount) {
		this.splitAmount = splitAmount;
	}
	@Override
	public String toString() {
		return "Trancaction [gid=" + gid + ", expid=" + expid + ", gstatus=" + gstatus + ", splitAmount=" + splitAmount
				+ "]";
	}
	public Transaction(int gid, int expid, HashMap<Integer, Boolean> gstatus, double splitAmount) {
		super();
		this.gid = gid;
		this.expid = expid;
		this.gstatus = gstatus;
		this.splitAmount = splitAmount;
	}
	
	public Transaction() {
		// TODO Auto-generated constructor stub
	}
	
	
	
	
	
}
