import React, { Component } from "react";
import { Table } from "react-bootstrap";
interface TestRowProps {
  todoList: any[];
}
class ToDoList extends Component<TestRowProps, {}> {

    render() {
       const {todoList} =  this.props;
        return (
            <React.Fragment>
                <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Email</th>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Reward Points</th>
                </tr>
              </thead>
              <tbody>
                {todoList.length > 0 && todoList.map((trans: any, index: number) => {
                  return (<tr>
                    <td>{index + 1}</td>
                    <td>{trans.email}</td>
                    <td>{trans.product}</td>
                    <td>{trans.price}</td>
                    <td>{trans.rewardPoints}</td>
                  </tr>)
                })}


              </tbody>
            </Table>

            </React.Fragment>
        )
    }
}
export default ToDoList