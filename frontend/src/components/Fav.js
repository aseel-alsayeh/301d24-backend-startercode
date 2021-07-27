import React, {Component} from 'react';
import axios from 'axios'
const ApiCrudData=require('./components/ApiCrudData')

class Home extends Component {
    constructor(props){
        super(props)
        this.state={
            apiCrudData:[],
            url:process.env.REACT_APP_BACKEND_URL,
        }
    }
  componentDidMount=async()=>{
     const data= axios.get(`${url}/fav-list`,dataObj)
      this.setState({
          apiCrudData:data
      })
  }
 

  deleteFromFav=()=>{
   const deleteRequest= axios.delete(`${url}/delete/:id`,dataObj)
   this.setState({
    apiCrudData:deleteRequest
})
  }
  
    render(){

        return(
            <>
            <ApiCrudData apiCrudData={this.state.apiCrudData}/>
            </>
        
        )
    }
} 
 

export default Home;