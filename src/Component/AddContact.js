import React, { useEffect } from "react";
import { Form, Row, Col, Button, Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { createContact, updateContact } from "./../Redux/Action";
import { toast } from "react-toastify";

const AddContact = (props) => {
  const { currentContact, setCurrentContact } = props;
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();
  const { contact } = useSelector((state) => state.contactReducer);
  const handelUpdate = (data) => {
    data._id = currentContact._id;
    console.log("from handel update2", data);
    console.log("from handel update", currentContact);
    const { name, email, phone } = data;
    const checkEmail = contact.find((element) => element.email === email);
    const checkPhone = contact.find((element) => element.phone === phone);
    const checkName = contact.find((element) => element.name === name);
    if (checkName && checkEmail && checkPhone) {
      return toast.error("Contact up to date");
    } else {
      dispatch(updateContact(data));
      handelClear();
      return toast.success("Contact Update Successfully");
    }
  };

  const handelClear = () => {
    setCurrentContact();
  };

  const handelClen = () => {
    setValue("name", "");
    setValue("email", "");
    setValue("phone", "");
  };

  useEffect(() => {
    setValue("name", currentContact?.name);
    setValue("email", currentContact?.email);
    setValue("phone", currentContact?.phone);
  }, [currentContact, setValue]);

  const onSubmit = (data) => {
    const { email, phone } = data;
    const checkEmail = contact.find((element) => element.email === email);
    const checkPhone = contact.find((element) => element.phone === phone);
    if (checkEmail) {
      console.log("from if");
      return toast.error("Email alredy added!");
    } else if (checkPhone) {
      return toast.error("Phone Number alredy added!");
    } else {
      dispatch(createContact(data));
      handelClen();
      return toast.success("New Contact Added Successfully");
    }
  };

  return (
    <Container>
      <Form className="ps-5 pe-3 mt-5" onSubmit={handleSubmit(onSubmit)}>
        <Row>
          <Col>
            <Form.Control
              placeholder="Name"
              {...register("name", { required: true })}
            />
            {errors?.name?.type === "required" && (
              <span>This field is required</span>
            )}
          </Col>
          <Col>
            <Form.Control
              placeholder="Email"
              {...register("email", {
                required: true,
                pattern: /\S+@\S+\.\S+/,
              })}
            />
            {errors?.email?.type === "required" && (
              <span>This field is required</span>
            )}
            {errors?.email?.type === "pattern" && (
              <span>Input a valide email</span>
            )}
          </Col>
          <Col>
            <Form.Control
              placeholder="Number"
              {...register("phone", {
                required: true,
                minLength: 11,
                maxLength: 11,
              })}
            />
            {errors?.phone?.type === "required" && (
              <span>This field is required</span>
            )}
            {errors?.phone?.type === "minLength" && (
              <span>Mobile Number Must be 11 degit</span>
            )}
            {errors?.phone?.type === "maxLength" && (
              <span>Mobile Number Must be 11 degit</span>
            )}
          </Col>
          <Col>
            {currentContact?._id ? (
              <div>
                <Button variant="primary" onClick={handleSubmit(handelUpdate)}>
                  Update
                </Button>
                <Button
                  className="ms-3"
                  variant="primary"
                  onClick={handelClear}
                >
                  Censel
                </Button>
              </div>
            ) : (
              <Button variant="primary" type="submit">
                Submit
              </Button>
            )}
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default AddContact;
