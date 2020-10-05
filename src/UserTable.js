import React from "react";
import { Table, Button } from "reactstrap";

const UserTable = ({ tableData, showUpdate }) => {
  return (
    <Table hover>
      <thead>
        <tr>
          <th>Sr No.</th>
          <th>Name</th>
          <th>Username</th>
          <th>Email</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {console.dir(tableData)}
        {tableData.map((data, index) => {
          return (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>{data.name}</td>
              <td>{data.username}</td>
              <td>{data.email}</td>
              <td>
                <Button
                  color="link"
                  className="p-0"
                  onClick={() => showUpdate()}
                >
                  <i
                    className="fa fa-pencil-square-o"
                    aria-hidden="true"
                    style={{ color: "#333", fontSize: "20px" }}
                  ></i>
                </Button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default UserTable;
