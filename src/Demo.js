import React from "react";

class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { user: [] };
    this.UpdateState = {};
  }

  change = (e) => {
    // console.log(value.target.value, "value");
    // this.setState(() => ({
    //   user: value.target.value,
    // }));
    const { value, name } = e.target;
    this.UpdateState[name] = value;
  };

  click = () => {
    this.setState({ user: [...this.state.user, this.UpdateState] });
       
  };

  render() {
    return (
      <div>
        <div>
          <table>
            <thead>
              <tr>
                <td>Name</td>
                <td>Email</td>
                <td>Mobile</td>
              </tr>
            </thead>
            <tbody>
              {this.state.user &&
                this.state.user.map((e) => {
                  return (
                    <>
                      <tr>
                        <td>{e.name}</td>
                        <td>{e.email}</td>
                        <td>{e.mobile}</td>
                      </tr>
                    </>
                  );
                })}
            </tbody>
          </table>
        </div>
        {/* <p>{this.state.user.name}</p>
        <p>{this.state.user.email}</p>
        <p>{this.state.user.mobile}</p> */}

        <div id="btn">
          <label id="label">Name</label>
          <input type="text" name="name" onChange={this.change} />
          <br />
          <label>Email</label>
          <input type="text" name="email" onChange={this.change} />
          <br />
          <label>Mobile</label>
          <input type="number" name="mobile" onChange={this.change} />
          <br />
          <button onClick={this.click}>Submit</button>
        </div>
      </div>
    );
  }
}

export default Demo;
