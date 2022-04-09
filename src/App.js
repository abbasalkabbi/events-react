import React, { Component } from "react";



class App extends Component{
 constructor(){
     super();
     this.state={number:0,CheckNumber:false}
     this.plus=this.plus.bind(this)
     this.minus=this.minus.bind(this)
 }
plus(){
    this.setState(prevstate=>{return {number:prevstate.number +1}})
    this.setState(prevstate=>{return{CheckNumber:false}})
}
minus(){
    
    if(this.state.number >= 1){
        this.setState(prevstate=>{return{number:prevstate.number -1}})
    }else{
        this.setState(prevstate=>{return{CheckNumber:true}})
    }
}
CheckNumber(){
    if(this.state.CheckNumber){
        return(
            <div class="alert alert-danger alert-dismissible fade show" role="alert">
            <strong>Wrong</strong> The Number can't be less then 0
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
        )
    }
}
  render(){
      return(
          <div className='container'>
            
              {this.CheckNumber()}                   
              <h1 className='title text-center'>The Number= <span>{this.state.number}</span></h1>
              <div className='text-center '>
                        <button className='btn btn-primary ' onClick={this.plus}>+</button>
                        <button className='btn btn-warning m-1' onClick={this.minus}>-</button>
              </div>
              
          </div>
          )
      
  }
  
}
export default App;