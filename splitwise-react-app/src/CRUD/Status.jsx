import React from 'react'
import Axios from 'axios';
import { ButtonToolbar } from 'react-bootstrap';

class Status extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
          transaction: {
            gid: "",
            expid: "",
            splitAmount: ""
          },
          transactions: [],
          isEdit:false
        };
        console.log(this.props);
      }  

      componentWillMount = transaction =>{
        
        Axios.get("http://localhost:8003/groupid/expid/"+localStorage.getItem("gid")+"/"+localStorage.getItem("expid")).then(res => {
          const data = res.data
          delete data.gstatus
          this.setState({transaction:data})
          
          console.log("Same" ,this.state.transaction)
          
        })
      }

      // getTransaction = transaction =>{
      //   Axios.get("http://localhost:8003/groupid/expid/1/1").then(res => {
      //     this.setState({ transaction: res.data });
      //   });
      // }  

  render() {
    return(
        <div className="container-fluid">
        <h1>Transaction</h1>
        <table className="table">
              <tr>
                  <th>Group Id</th>
                  <th>Expense Id</th>
                  {/* <th>Group Status</th> */}
                  <th>Amount Per Member</th>
              </tr>
              <tr>
              {Object.values(this.state.transaction).map(transaction=>{
                  
                    return (
                      <td>{transaction}</td>
                    )
                })}
                </tr>
              </table>
          </div> 
        )
    }
    }

export default Status