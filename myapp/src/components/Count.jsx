import React, { Component } from 'react';

class Count extends Component {
  constructor(Props){
      super(Props)
      this.state={
          ctn:0
      }
  }

  countPlus = () =>{
      this.setState(
          {
              ctn:this.state.ctn + 1
          }
      )
  }

  countMiuns = () =>{
      this.setState(
          {
              ctn:this.state.ctn - 1
          }
      )
  }

  render() {
    const { record } = this.props;

    const dataList = record.map((data, index) => (
         <tr key={index}>
            <td>{data.grid}</td>
            <td>{data.name}</td>
            <td>{data.email}</td>
            <td>{data.password}</td>
            <td>{data.course}</td>
            <td>{data.city}</td>
        </tr>
    ));

    return (
      <div>
        <center>
          <h1>Table</h1>
            <table border={1} cellPadding={20}>{dataList}</table>
            <h2>{this.state.ctn}</h2>
            <button onClick={this.countPlus}>+</button>
            <button onClick={this.countMiuns}>-</button>
        </center>
      </div>
    );
  }
}

export default Count;