import React from 'react';

class Teacher extends React.Component{
    render(){
        return(<><h1>Teachers componet</h1></>)
    }
}

class Student extends React.Component{
    render(){
        return(<><h1>Students componet</h1></>)
    }
}

class TernoryClass extends React.Component{
    constructor(props){
        super(props)
        this.state = {show:true}
    }
    render(){
        return (
          <>
            <button onClick={() => this.setState({ show: !this.state.show })}>
              Click to change
            </button>

            {this.state.show ? <Teacher /> : <Student />}
          </>
        );
    }
}

export default TernoryClass;