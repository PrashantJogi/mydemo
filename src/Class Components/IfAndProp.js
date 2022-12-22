import React from 'react';


class Parent extends React.Component{
    

    render(){
      
        return(<>
          {(()=>{
            if(this.props.show && <Child1/>){
              return <Child1 />;
            }
          })()}
        </>)
      
            
    }
}

class Child1 extends React.Component{

  render(){
    return(<>
      <h1>Child1</h1>
    </>)
  }
}

class IfAndProp extends React.Component{
    constructor(props){
        super(props)
        this.state = {show:false}
    }
    render(){
        return (
          <>
            <label>Using If and Props</label>
            <br/>
            <button onClick={() => this.setState({ show: !this.state.show })}>
              Click to Change
            </button>
            {<Parent show={this.state.show}/>}
          </>
        );
    }
}

export default IfAndProp;