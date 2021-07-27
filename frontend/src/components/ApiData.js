import React, { Component } from 'react';

import { Card } from 'react-bootstrap';

class ApiData extends Component {
    render() {

        return (
           

                <div class="card" style="width: 18rem;">
                    <img src={this.props.apiData.img} class="card-img-top" alt="">
                        <div class="card-body">
                            <h5 class="card-title">{this.props.apiData.title}</h5>
                            <p class="card-text"> {this.props.apiData.description}.</p>
                           <button onClick={e=>{this.props.addFavItem}}> Add to Fav</button>
                        </div>
                       </div>

        
        )
          }      
    
}

export default ApiData;