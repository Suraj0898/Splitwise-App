import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';

class Home extends React.Component {
  render() {
    return (
      <div className="col-md-12" style={{
        padding: "0px",
        margin: "0px",
        width: "100%",
        fontFamily: "Monospace",
        fontSize: 20,
        fontWeight: 600,
        backgroundColor:"cyan",
        textAlign: "center",
      }}>
        <br></br>
        <br></br>
        <h1>Welcome to Splitwise</h1>
        <h2>Splitting Bills the Easy Way!</h2>
        <div style={{
            backgroundColor:"cyan"
        }}>
        <p>
            <br/>
        </p>
        <div style={{
          backgroundColor:"yellow",
          fontFamily: "Comic Sans MS",
          fontWeight:20
      }}>
          <p>
            <br/>
        Splitwise is the easiest way to share expenses with friends and family and stop stressing about “who owes who.” <br/>
        Millions of people around the world use Splitwise to organize group bills for households, trips, and more. <br/>
        Our mission is to reduce the stress and awkwardness that money places on our most important relationships.
        </p>
        <div style={{
            backgroundColor:"yellow"
        }}>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <h4 style= {{
              margin: "0px"
            }}>Copyright @ All Rights Reserved</h4>
        </div>
      </div>
      </div>
      </div>
    )
  }
}
export default Home