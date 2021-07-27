import React, {Component} from 'react';
import axios from 'axios'
const ApiData=require('./components/ApiData')

class Home extends Component {
    constructor(props){
        super(props)
        this.state={
            apiData:[],
            url:process.env.REACT_APP_BACKEND_URL,
        }
    }
  componentDidMount=async()=>{
     const data= axios.get(`${url}/retreive`,dataObj)
      this.setState({
          apiData:data
      })
  }

  addFavItem=()=>{
     const postrequest= axios.post(`${url}/create`,dataobj)
     req.send(postrequest);
  }

    render(){

        return(
            <>
            <ApiData apiData={this.state.apiData}/>
            </>
        
        )
    }
} 
 

export default Home;