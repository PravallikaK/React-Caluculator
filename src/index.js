import React, { Component } from 'react';
import ReactDOM from "react-dom";
import Buttoncmp from "./components/buttoncmp";
import "./index.css";
import * as math from "mathjs";

export default class App extends Component {
    constructor(){
        super();
        this.state={
            inputval:""
        }
    }
    
    clickbutton=(e)=>{
        this.setState({
            inputval : this.state.inputval+e
        })
    }
    
    handleequal=()=>{
        this.setState({
            inputval: math.evaluate(this.state.inputval)
        })
    }

    render() {
        return (
            <div className="app">
                <div className="wrapper">
                    <input type="text" value={this.state.inputval} className="inputvalsty" />
                    <div className="btn-wrapper">
                        <div className="row-card">
                            <Buttoncmp handleclick={this.clickbutton}>7</Buttoncmp>
                            <Buttoncmp handleclick={this.clickbutton}>8</Buttoncmp>
                            <Buttoncmp handleclick={this.clickbutton}>9</Buttoncmp>
                            <Buttoncmp handleclick={this.clickbutton}>/</Buttoncmp>
                        </div>
                        <div className="row-card">
                            <Buttoncmp handleclick={this.clickbutton}>4</Buttoncmp>
                            <Buttoncmp handleclick={this.clickbutton}>5</Buttoncmp>
                            <Buttoncmp handleclick={this.clickbutton}>6</Buttoncmp>
                            <Buttoncmp handleclick={this.clickbutton}>*</Buttoncmp>
                        </div>
                        <div className="row-card">
                            <Buttoncmp handleclick={this.clickbutton}>1</Buttoncmp>
                            <Buttoncmp handleclick={this.clickbutton}>2</Buttoncmp>
                            <Buttoncmp handleclick={this.clickbutton}>3</Buttoncmp>
                            <Buttoncmp handleclick={this.clickbutton}>+</Buttoncmp>
                        </div>
                        <div className="row-card">
                            <Buttoncmp handleclick={this.clickbutton}>.</Buttoncmp>
                            <Buttoncmp handleclick={this.clickbutton}>0</Buttoncmp>
                            <Buttoncmp handleclick={this.handleequal}>=</Buttoncmp>
                            <Buttoncmp handleclick={this.clickbutton}>-</Buttoncmp>
                        </div>
                        </div>
                        <input type="button" value="clear" className="clearbtnsty" onClick={()=>this.setState({inputval:""})} />
                    </div>
                </div>
        );
    }
}
ReactDOM.render(<App />, document.getElementById("root"));