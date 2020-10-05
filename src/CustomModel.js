import React, { useState, useEffect } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  Label,
  Form,
  FormGroup,
  Row,
  Col,
  FormFeedback,
  FormText,
} from "reactstrap";

const CustomModel = (props) => {
  const { buttonLabel, className, open, updateAction } = props;

  const [modal, setModal] = useState(open);
  const [unmountOnClose, setUnmountOnClose] = useState(true);

  const [values, setValues] = useState({
    name: "",
    username: "",
    email: "",
    error: {
      nameError: "",
      usernameError: "",
      emailError: "",
    },
  });

  const { name, username, email, error } = values;
  const { nameError, usernameError, emailError } = error;

  const toggle = () => setModal(!modal);

  const handleChange = (event) => {
    const { name, value } = event.target;
    validate(name, value);
  };

  const saveAction = () => {
    if (name != "" && username != "" && email != "") {
      updateAction(values, () => {
        toggle();
      });
    } else {
      validateAll();
    }
  };

  const validate = (name, value) => {
    let errorObj = { ...error };
    if (value != "") {
      errorObj[name + "Error"] = "";
      if (name === "email") {
        if (!value.includes("@")) {
          errorObj[name + "Error"] = "Enter Valid Input";
        }
      }
    } else {
      errorObj[name + "Error"] = "This Field Is Required";
    }

    setValues({
      ...values,
      [name]: value,
      error: errorObj,
    });
  };

  const validateAll = () => {
    let docArray = document.querySelectorAll("input");
    for (let i = 0; i < docArray.length; i++) {
      let doc = docArray[i];
      let name = doc.getAttribute("name");
      let value = doc.value;
      if (value == "") {
        doc.focus();
        validate(name, value);
        return;
      }
    }
  };

  useEffect(() => {
    console.dir(values);
  }, [name, username, email]);

  const userForm = () => {
    return (
      <Form>
        <Row form>
          <Col>
            <FormGroup>
              <Label>Name</Label>
              <span className="text-danger">*</span>
              <Input
                type="text"
                name="name"
                placeholder="name"
                value={name}
                onChange={(e) => handleChange(e)}
                maxLength="50"
                invalid={nameError != ""}
              />
              <FormFeedback name="nameError">{nameError}</FormFeedback>
            </FormGroup>
            <FormGroup>
              <Label>Username</Label>
              <span className="text-danger">*</span>
              <Input
                type="text"
                name="username"
                placeholder="Enter Username"
                value={username}
                onChange={(e) => handleChange(e)}
                maxLength="30"
                invalid={usernameError != ""}
              />
              <FormFeedback name="usernameError">{usernameError}</FormFeedback>
            </FormGroup>
            <FormGroup>
              <Label>Email</Label>
              <span className="text-danger">*</span>
              <Input
                type="email"
                name="email"
                placeholder="Enter Email Id"
                value={email}
                onChange={(e) => handleChange(e)}
                maxLength="30"
                invalid={emailError != ""}
              />
              <FormFeedback name="emailError">{emailError}</FormFeedback>
            </FormGroup>
          </Col>
        </Row>
      </Form>
    );
  };

  return (
    <div>
      <Modal
        isOpen={modal}
        toggle={toggle}
        className={className}
        unmountOnClose={unmountOnClose}
      >
        <ModalHeader toggle={toggle}>{buttonLabel}</ModalHeader>
        <ModalBody>{userForm()}</ModalBody>
        <ModalFooter>
          <Button
            color="primary"
            onClick={() => {
              saveAction();
            }}
          >
            Update
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default CustomModel;
