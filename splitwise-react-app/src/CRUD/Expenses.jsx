import React from 'react'
import Axios from 'axios'
import {Redirect} from 'react-router-dom';

class Expenses extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
          expense: {
            expenseId: "",
            expensename: "",
            expense: "",
            date: "",
            paidby: "",
            status: "",
            groupeid: ""
          },
          expenses: [],
          isEdit:false,
          isStatus:false
        };
        console.log(this.props);
      }  
    
      componentWillMount(){
        Axios.get("http://localhost:8765/splitwise-expences-management/exp").then(res => {
          this.setState({expenses:res.data},()=>{
          })
          console.log( "Expenses" ,this.state.expenses);
          
        })
      }
    
      editExpense = expense => {
      this.setState({ expense, isEdit: !this.state.isEdit });
      };
    
      updateExpense = () => {
        Axios
          .put("http://localhost:8765/splitwise-expences-management/exp/" , this.state.expense)
          .then(res => {
            this.getAllExpenses();
            this.setState({ isEdit: !this.state.isEdit });
          });
      };
    
      getAllExpenses(){
          Axios.get("http://localhost:8765/splitwise-expences-management/exp/").then(res => {
            this.setState({expenses: res.data });
          });
        }  

      displayStatus = (event) =>{

        const nodelist = event.target.parentNode.parentNode.childNodes

        localStorage.setItem("expid",nodelist[0].textContent)
          localStorage.setItem("gid",nodelist[6].textContent)

          console.log(localStorage.getItem("gid"),localStorage.getItem("expid"))
        this.setState({isStatus:true})
      }  
       
      deleteExpense = (expense) => {
          
          Axios.delete("http://localhost:8765/splitwise-expences-management/exp/" + expense.expenseId).then(res => {
            this.getAllExpenses();
          });
        };
           
    
      render() {
        if(this.state.isStatus===true){
          return <Redirect to="/status"/>
        }
        return (
        <div className="container-fluid">
        <h1>Table of Expenses</h1>
        <table className="table">
                <tr>
                  <th>Expense Id</th>
                  <th>Expense Name</th>
                  <th>Expense</th>
                  <th>Date</th>
                  <th>PaidBy</th>
                  <th>Status</th>
                  <th>Group Id</th>
                </tr>
                {this.state.expenses.map(expense=>{
                  return <tr key={expense}>{Object.values(expense).map((val)=>{
                  return <td key={val}>{val}</td>})}
                          <td>
                          <button
                            className="btn btn-primary"
                            onClick={
                              this.displayStatus
                            }
                          >
                            Status
                          </button>
                        </td>
                        <td>
                          <button
                            className="btn btn-danger"
                            onClick={() => {
                              this.deleteExpense(expense);
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
export default Expenses