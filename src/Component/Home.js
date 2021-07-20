import React, { useState } from "react";
import AddContact from "./AddContact";
import Header from "./Header";
import ShowAllContact from "./ShowAllContact";

const Home = () => {
  const [currentContact, setCurrentContact] = useState({});

  const handelEdite = (con) => {
    setCurrentContact(con);
  };
  return (
    <React.Fragment>
      <Header />
      <AddContact
        setCurrentContact={setCurrentContact}
        currentContact={currentContact}
      />
      <ShowAllContact handelEdite={handelEdite} />
    </React.Fragment>
  );
};

export default Home;
