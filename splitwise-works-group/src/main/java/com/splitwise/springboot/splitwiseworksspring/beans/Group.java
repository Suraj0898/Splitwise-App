package com.splitwise.springboot.splitwiseworksspring.beans;

import java.util.List;

import org.springframework.data.annotation.Id;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString

public class Group {
	
	@Id
	private int groupId;
	private String groupName;
	private String activity;
	private String groupLink;
	private List<Integer> members;
	public int getGroupId() {
		return groupId;
	}
	public void setGroupId(int groupId) {
		this.groupId = groupId;
	}
	public String getGroupName() {
		return groupName;
	}
	public void setGroupName(String groupName) {
		this.groupName = groupName;
	}
	public String getActivity() {
		return activity;
	}
	public void setActivity(String activity) {
		this.activity = activity;
	}
	public String getGroupLink() {
		return groupLink;
	}
	public void setGroupLink(String groupLink) {
		this.groupLink = groupLink;
	}
	public List<Integer> getMembers() {
		return members;
	}
	public void setMembers(List<Integer> members) {
		this.members = members;
	}
	public Group(int groupId, String groupName, String activity, String groupLink, List<Integer> members) {
		super();
		this.groupId = groupId;
		this.groupName = groupName;
		this.activity = activity;
		this.groupLink = groupLink;
		this.members = members;
	}
	@Override
	public String toString() {
		return "Group [groupId=" + groupId + ", groupName=" + groupName + ", activity=" + activity + ", groupLink="
				+ groupLink + ", members=" + members + "]";
	}
	public Group() {
	}
	
	

	
}
