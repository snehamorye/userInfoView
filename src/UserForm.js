import React, { useEffect, useState, useRef } from "react";
import {
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  FormFeedback,
  FormText,
} from "reactstrap";

const UserForm = () => {
  const inputRef = useRef(null);

  const updateAction = () => {
    return values;
  };

  useEffect(() => {
    inputRef.current.focus();
  }, []);
};

export default UserForm;
