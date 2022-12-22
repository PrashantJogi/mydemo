
import React from 'react';


class Formfields extends React.Component {
  constructor(props) {
    super(props);
    this.state = {fname:"",lname:""};
    this.Arr = []
  }
 
  change = (e) => {
    const {value , name }= e.target;
   
    this.setState({[name]:value})
  };

  handleSubmit = (e) =>{
    e.preventDefault();

    this.Arr.push(this.state)
    this.setState({fname:"",lname:""})
    
  } 
  render() {
   const temp =  this.Arr.map((e,index) => {
               
               return (
                   <tr id={index} key={index}>
                     <td>{e.fname}</td>
                     <td>{e.lname}</td>
                   </tr>
                  );
             })

    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <label>First Name</label>
          <input
            type="text"
            name="fname"
            value={this.state.fname}
            onChange={this.change}
          />

          <label>Last Name</label>
          <input
            type="text"
            name="lname"
            value={this.state.lname}
            onChange={this.change}
          />

          <input type="submit" />
        </form>
        <table>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
            </tr>
          </thead>
          <tbody>
           {temp}
          </tbody>
        </table>
      </>
    );
  }
}

export default Formfields;