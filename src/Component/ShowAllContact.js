import React from "react";
import { Alert, Container, Table } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import Loading from "./Loading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt, faTrash } from "@fortawesome/free-solid-svg-icons";
import { deletContact } from "../Redux/Action";
import { toast } from "react-toastify";

const ShowAllContact = (props) => {
  const dispatch = useDispatch();

  const { contact, loading, error } = useSelector(
    (state) => state.contactReducer
  );

  const handelDelet = (con) => {
    const id = con._id;  
    dispatch(deletContact(id));
    return toast.success("Contact delete successfully");
  };

  const renderContact = () => (
    <Table responsive bordered>
      <thead>
        <tr>
          <th>Sr.</th>
          <th>Name</th>
          <th>Email</th>
          <th>Number</th>
          <th>Action</th>
        </tr>
      </thead>

      <tbody>
        {contact.map((con, index) => (
          <tr key={con._id}>
            <td>{index + 1}</td>
            <td>{con.name}</td>
            <td>{con.email}</td>
            <td>{con.phone}</td>
            <td>
              <span
                onClick={() => props.handelEdite(con)}
                className="mx-2 cursor-pointer"
              >
                <FontAwesomeIcon icon={faPencilAlt} />
              </span>
              <span
                onClick={() => handelDelet(con)}
                className="mx-2 cursor-pointer"
              >
                <FontAwesomeIcon icon={faTrash} />
              </span>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );

  return (
    <Container className="mt-5">
      {loading ? (
        <Loading />
      ) : error ? (
        <Alert variant={"error"}>Some error found</Alert>
      ) : contact.length < 1 ? (
        <Alert variant={"warning"}>Not Contact to show</Alert>
      ) : (
        renderContact()
      )}

      {/* <ReactModal  modalIsOpen={modalIsOpen} closeModal={closeModal} /> */}
    </Container>
  );
};

export default ShowAllContact;
