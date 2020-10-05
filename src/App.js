import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./Header";
import UserTable from "./UserTable";
import CustomModel from "./CustomModel";
import { Alert } from "reactstrap";

function App() {
  const [tableData, setTableData] = useState([]);
  const [enableUpdate, setEnableUpdate] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);

  useEffect(() => {
    setTableData([
      {
        id: 1,
        name: "william dane",
        username: "william@xyz.com",
        email: "williamdane@xyz.com",
      },
      {
        id: 2,
        name: "william dane",
        username: "william@xyz.com",
        email: "williamdane@xyz.com",
      },
      {
        id: 3,
        name: "william dane",
        username: "william@xyz.com",
        email: "williamdane@xyz.com",
      },
      {
        id: 4,
        name: "william dane",
        username: "william@xyz.com",
        email: "williamdane@xyz.com",
      },
      {
        id: 5,
        name: "william dane",
        username: "william@xyz.com",
        email: "williamdane@xyz.com",
      },
      {
        id: 6,
        name: "william dane",
        username: "william@xyz.com",
        email: "williamdane@xyz.com",
      },
      {
        id: 7,
        name: "william dane",
        username: "william@xyz.com",
        email: "williamdane@xyz.com",
      },
    ]);
    return () => {
      //cleanup;
    };
  }, []);

  const showUpdate = () => {
    setEnableUpdate(!enableUpdate);
  };

  const updateAction = (data, callback) => {
    data = {
      id: tableData.length + 1,
      ...data,
    };
    setTableData([...tableData, data]);
    callback();
    setIsUpdate(true);
    setTimeout(() => {
      setIsUpdate(false);
    }, 1500);
  };

  return (
    <div className="container pt-5 ">
      <Header />

      <Alert color="success" className={isUpdate ? "" : "d-none"}>
        User Details Updated Successfully
      </Alert>

      <div className="row py-4">
        <UserTable tableData={tableData} showUpdate={showUpdate} />
      </div>

      {enableUpdate && (
        <CustomModel
          buttonLabel="Update"
          className=""
          open={enableUpdate}
          updateAction={updateAction}
        />
      )}
    </div>
  );
}

export default App;
