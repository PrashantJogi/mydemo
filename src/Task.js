import React from "react";
import Switch from "@mui/material/Switch";
import SimpleCom from "./Class Components/SimpleComClass";
import ParentChildClass from "./Class Components/ParentChildClass";
import EmployesClass from "./Class Components/EmployesClass";
import IfClass from "./Class Components/IfClass";
import TernoryClass from "./Class Components/TernoryClass";
import IfAndProp from "./Class Components/IfAndProp";
import MajorLifeCycle from "./Class Components/MajorLifeCycle";
import Formfields from "./Class Components/Formfields";
import CounterState from "./Class Components/CounterState";

class Task extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      simple: false,
      parentChild: false,
      employe: false,
      ifClass: false,
      ternory: false,
      IfAndProp: false,
      MajorLifeCycle: false,
      formFields: false,
      counterStat: false,
    };
  }

  simpleHandleChange = () => {
    this.setState({ simple: !this.state.simple });
  };

  parentChildHandleChange = () => {
    this.setState({ parentChild: !this.state.parentChild });
  };

  employeHandleChange = () => {
    this.setState({ employe: !this.state.employe });
  };

  IfClassHandleChange = () => {
    this.setState({ ifClass: !this.state.ifClass });
  };

  ternoryHandleChange = () => {
    this.setState({ ternory: !this.state.ternory });
  };

  IfAndPropHandleChange = () => {
    this.setState({ IfAndProp: !this.state.IfAndProp });
  };

  majorLifeCycleHandleChange = () => {
    this.setState({ MajorLifeCycle: !this.state.MajorLifeCycle });
  };

  formFieldsHandleChange = () => {
    this.setState({ formFields: !this.state.formFields });
  };

  counterStateHandleChange = () => {
    this.setState({ counterStat: !this.state.counterStat });
  };
  render() {
    return (
      <>
      <h1>Using Class Component</h1>
        <label>Simple component</label>
        <Switch
          onChange={this.simpleHandleChange}
          inputProps={{ "aria-label": "controlled" }}
        />
        <br />
        <label>Parent Child component</label>
        <Switch
          onChange={this.parentChildHandleChange}
          inputProps={{ "aria-label": "controlled" }}
        />
        <br />
        <label>Employes Parent Child component</label>
        <Switch
          onChange={this.employeHandleChange}
          inputProps={{ "aria-label": "controlled" }}
        />
        <br />
        <label>Conditional Rendering using If Else</label>
        <Switch
          onChange={this.IfClassHandleChange}
          inputProps={{ "aria-label": "controlled" }}
        />
        <br />
        <label>Conditional Rendering using Ternory operator</label>
        <Switch
          onChange={this.ternoryHandleChange}
          inputProps={{ "aria-label": "controlled" }}
        />
        <br />
        <label>Conditional Rendering using If and Props</label>
        <Switch
          onChange={this.IfAndPropHandleChange}
          inputProps={{ "aria-label": "controlled" }}
        />
        <br />
        <label>Major Class Life Cycle Events</label>
        <Switch
          onChange={this.majorLifeCycleHandleChange}
          inputProps={{ "aria-label": "controlled" }}
        />
        <br />
        <label>formFields</label>
        <Switch
          onChange={this.formFieldsHandleChange}
          inputProps={{ "aria-label": "controlled" }}
        />
        <br />
        <label>Counter State Component</label>
        <Switch
          onChange={this.counterStateHandleChange}
          inputProps={{ "aria-label": "controlled" }}
        />
        <br />
        {this.state.simple && (
          <>
            <SimpleCom />
          </>
        )}
        {this.state.parentChild && (
          <>
            <ParentChildClass />
          </>
        )}
        {this.state.employe && (
          <>
            <EmployesClass />
          </>
        )}
        {this.state.ifClass && (
          <>
            <IfClass />
          </>
        )}
        {this.state.ternory && (
          <>
            <TernoryClass />
          </>
        )}
        {this.state.IfAndProp && (
          <>
            <IfAndProp />
          </>
        )}
        {this.state.MajorLifeCycle && (
          <>
            <MajorLifeCycle />
          </>
        )}
        {this.state.formFields && (
          <>
            <Formfields />
          </>
        )}
        {this.state.counterStat && (
          <>
            <CounterState />
          </>
        )}
      </>
    );
  }
}

export default Task;
