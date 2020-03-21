import React from 'react'
import Axios from 'axios'

class Groups extends React.Component {
constructor(props) {
    super(props);
    
    this.state = {
      group: {
        groupId: "",
        groupname: "",
        activity: "",
        grouplink: "",
        members: []
      },
      groups: [],
      isEdit:false
    };
    console.log(this.props);
  }  

  componentWillMount(){
    Axios.get("http://localhost:8765/splitwise-group-management/group").then(res => {
      this.setState({groups:res.data})
      console.log(this.state.groups);
      
    })
  }

  editGroup = group => {
  this.setState({ group, isEdit: !this.state.isEdit });
  };

  updateGroup = () => {
    Axios
      .put("http://localhost:8765/splitwise-group-management/group" , this.state.group)
      .then(res => {
        this.getAllGroups();
        this.setState({ isEdit: !this.state.isEdit });
      });
  };

  getAllGroups() {
      Axios.get("http://localhost:8765/splitwise-group-management/group").then(res => {
        this.setState({ groups: res.data });
      });
    }  
   
  deleteGroup = group => {
      console.log(group);
      Axios.delete("http://localhost:8765/splitwise-group-management/group/"+group.groupId).then(res => {
        this.getAllGroups();
      }); 
    };  

  render() {
    return (
    <div className="container">
    <h1>List of Groups</h1>
    <table className="table">
            <tr>
              <th>Group Id</th>
              <th>Group Name</th>
              <th>Activity</th>
              <th>Link</th>
              <th>Members</th>
            </tr>
            {this.state.groups.map(group=>{
              return <tr key={group}>{Object.values(group).map((val)=>{
              return <td key={val}>{val}</td>})}
                    <td>
                      <button
                        className="btn btn-danger"
                        onClick={() => {
                          this.deleteGroup(group);
                        }}
                      >
                        Delete
                      </button>
                    </td>
                
              </tr>

            })}
          </table>
      </div> 
    )
}
}
export default Groups