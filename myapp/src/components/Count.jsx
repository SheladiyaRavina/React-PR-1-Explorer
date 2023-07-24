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

    // const dataList = record.map((data, index) => (
    //      <tr key={index}>
    //         <td>{data.grid}</td>
    //         <td>{data.name}</td>
    //         <td>{data.email}</td>
    //         <td>{data.password}</td>
    //         <td>{data.course}</td>
    //         <td>{data.city}</td>
    //     </tr>
    // ));

      return(
        <center>
            <h1>Table</h1>
            <table border={1} cellPadding={18}>
            <thead>
                <tr>
                    <th>Grid</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Password</th>
                    <th>Course</th>
                    <th>City</th>
                    
                </tr>
            </thead>
            <tbody>
                { record.map((v)=>(
                        <tr key={v.grid}>
                            <td>{v.grid}</td>
                            <td>{v.name}</td>
                            <td>{v.email}</td>
                            <td>{v.password}</td>
                            <td>{v.course}</td>
                            <td>{v.city}</td>
                        </tr>
                ))
                }
            </tbody>
        </table>
        <h2>{this.state.ctn}</h2>
              <button onClick={this.countPlus}>+</button>
              <button onClick={this.countMiuns}>-</button>
        </center>
    );
  }
}

export default Count;