import axios from "axios";
import React, { Component } from "react";
import './Music.css'

class Showdata extends Component {
  state = {
  data: []
  }

  componentDidMount() {
  axios.get('http://127.0.0.1:8080/get')
    .then(response => {
      this.setState({ data: response.data });
    })
    .catch(error => {
      console.log(error);
    });
}


  render() {   
    return (<div className='q'>
        <center>
      <table border={1}>
      <thead>
        <tr>
          <th>artistid</th>
          <th>artistname</th>
          <th>releasedate</th>
          <th>song</th>
        </tr>
      </thead>
      <tbody>
        {this.state.data.map(user => (
          <tr key={user.artistid}>
            <td>{user.artistid}</td>
            <td>{user.artistname}</td>
            <td>{user.releasedate}</td>
            <td>{user.song}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </center>
    </div>
    );
  }}
  
export default Showdata;