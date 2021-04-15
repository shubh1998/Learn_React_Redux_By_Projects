import React, { Component } from "react";
import "./css/counter.css"

class Counter extends Component {
    constructor(props){
        super(props);
        // console.log(this.props);
        this.handlePlusOne = this.handlePlusOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.handleVisiblityButton = this.handleVisiblityButton.bind(this);
        this.state = {
            count: props.count,
            name: "Shubham",
            visibility: false
        };
    }


    handlePlusOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            };
        });
    }

    handleMinusOne() {
        this.setState((prevState) =>{
            return {
              count: prevState.count - 1
            };
        })
    }

    handleReset() {
        this.setState(() => {
          return {
            count: 0
          };
        });
    }

    handleVisiblityButton() {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            }
        })
    }
  
    render() {
        return (
        <div>
            <div className="container">
            <div className="row">
                <h1 className="col-lg-12 heading text-center">
                Counter App Using State
                </h1>
            </div><br/>

            <div className="row">
                <div className="col-lg-12">
                    <h2 className="brown">Hi {this.state.name} !</h2>
                    <button className="btn btn-warning" onClick={this.handleVisiblityButton}>{this.state.visibility ? "Hide Details" : "Show Details"}</button>
                    {
                        this.state.visibility &&
                        (<p>Use +1, -1 and reset buttons to use counter.</p>)
                    }
                    <h2>Counter : {this.state.count}</h2>
                </div>
            </div><br/>

            <div className="row">
                <div className="col-lg-4">
                <button className="btn btn-success" onClick={this.handlePlusOne}>
                    +1
                </button>
                </div>
                <div className="col-lg-4">
                <button className="btn btn-danger" onClick={this.handleMinusOne}>
                    -1
                </button>
                </div>
                <div className="col-lg-4">
                <button className="btn btn-primary" onClick={this.handleReset}>
                    Reset
                </button>
                </div>
            </div>
            </div>
        </div>
        );
    }
}

//Using Default Props
Counter.defaultProps = {
    count: 0
}

export default Counter;