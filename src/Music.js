import React,{Component} from 'react';

import './Music.css'
import axios from 'axios'

class ValidatingForm extends Component{

    constructor(props){
        super(props);
        this.state={
            artistid:'',
            artistname:'',
            releasedate:'',
            song:''
        };
    }
    
    handleartistidChange=(event)=>{
        this.setState({artistid:event.target.value})
    };
    handleartistnameChange=(event)=>{
        this.setState({artistname:event.target.value})
    };
    handlereleasedateChange=(event)=>{
        this.setState({releasedate:event.target.value})
    };
    handlesongChange=(event)=>{
        this.setState({song:event.target.value})
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const data = {
            artistid: this.state.artistid,
            artistname: this.state.artistname,
            releasedate: this.state.releasedate,
            song: this.state.song,
        };
        
        axios.post('http://127.0.0.1:8080/post', data)
    }

    render(){
    return ( <div className='q'>
        <><center>
        <div className='container'>
            
        <form onSubmit={this.handleSubmit}>
            <h1>Music</h1>
            
            <div className='row'>
                <label>artistid : </label><br></br>
                <input type="number" id='artistid' placeholder='  Enter your artistid...' value={this.state.artistid}
                    onChange={this.handleartistidChange}/>
            </div><br></br>
            {/* <p  style={{color:"red"}}>{formErrors.id}</p> */}

            <div className='row'>
                <label>artistname : </label><br></br>
                <input type="text" id='artistname' placeholder='  Enter your artistname...' value={this.state.artistname}
                    onChange={this.handleartistnameChange}/>
            </div><br></br>
            {/* <p  style={{color:"red"}}>{formErrors.username}</p> */}

            <div className='row'>
                <label>releasedate : </label><br></br>
                <input type="text" id='releasedate' placeholder='  Enter your releasedate...' value={this.state.releasedate}
                    onChange={this.handlereleasedateChange}/>
            </div><br></br>
            {/* <p  style={{color:"red"}}>{formErrors.email}</p> */}

            <div className='row'>
                <label>song : </label><br></br>
                <input type="text" id='song' placeholder='  Enter the song...' value={this.state.song}
                    onChange={this.handlesongChange}/>
            </div><br></br>
            
            {/* <p  style={{color:"red"}}>{formErrors.password}</p> */}
            <br></br>

            <div className='row'>
                <button className='btn btn-primary'>Add</button>
            </div>
        </form>
        </div></center>
        </>
        </div>
     );
    }
}

export default ValidatingForm