import React from 'react';

class Hi extends React.Component{
    render() {
        return (
             <><h1>Hi</h1></>
        );
    }
}

class Hello extends React.Component{
    render() {
        return (
             <><h1>Hello</h1></>
        );
    }
}

class IfClass extends React.Component{
    constructor(props){
        super(props)
        this.state = {show:true}
    }

    render() 
    
    {
        let render = ""
        if (this.state.show === true) {
          
           
            render =  <Hello />
           
          
        } else {
         
             render = <Hi />;
         
        }
       return(<>
        <label>Choose to display </label>
        <button onClick={()=>this.setState({show:!this.state.show})}> Click to Change</button>
        {render}

       </>)
        
    }
}

export default IfClass;