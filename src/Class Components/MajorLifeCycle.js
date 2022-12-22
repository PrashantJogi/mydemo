import React from 'react';


class Child extends React.Component{
constructor(props){
    super(props)
    this.state = {data:"Radhe"}
    this.anotherState = {data:""}
    
    }

componentDidMount(){
    alert("mounted")
    this.btn = document.getElementById("btn");
   this.btn.addEventListener("click",this.click)
}

componentWillUnmount(){
    alert("Unmounted")
    this.btn.removeEventListener("click",this.click);
}
change=(e)=>{
    
    this.anotherState.data = e.target.value;
}

click = () =>{
    
    this.setState({data:this.anotherState.data})
    document.getElementById("input").value="";
}
    render(){
        return (
          <>
            <h1>UserName is {this.state.data}</h1>
            <input id="input"
              type="text"
              
              onChange={this.change}
            />
            <button id="btn">Click</button>
          </>
        );
    }
}

class MajorLifeCycle extends React.Component{
    


    render(){
        return(<>
                <Child name={"ramesh"}/>
        </>)
    }
}

export default MajorLifeCycle;