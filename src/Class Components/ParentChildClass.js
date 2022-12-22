import React from 'react';

class Child extends React.Component{
    
   render() {
    return (
        <h1>Child Name is {this.props.name} and his Age is {this.props.age}</h1>    
    )
   }

}

class ParentChildClass extends React.Component{
    

    render(){
        return(<>
                <Child name={"raju"} age={"26"}/>
        </>)
    }
}

export default ParentChildClass