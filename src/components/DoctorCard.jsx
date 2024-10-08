import React, { useState } from "react";
import { toast } from "react-hot-toast";
import BookAppointment from "../components/BookAppointment";
import "../styles/doctorcard.css";

const DoctorCard = ({ ele }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [token, setToken] = useState(localStorage.getItem("token") || "");

  const handleModal = () => {
    if (token === "") {
      return toast.error("You must log in first");
    }
    setModalOpen(true);
  };

  return (
    <div className="doctor-card">
      <div className="doctor-card-img">
        <img
          src={ele?.userId?.pic || "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"}
          alt="profile"
        />
      </div>
      <div className="doctor-card-details">
        <h3 className="doctor-card-name">
          Dr. {ele?.userId?.firstname} {ele?.userId?.lastname}
        </h3>
        <p className="doctor-card-specialization">
          <strong>Specialization: </strong>
          {ele?.specialization}
        </p>
        <p className="doctor-card-experience">
          <strong>Experience: </strong>
          {ele?.experience} yrs
        </p>
        <p className="doctor-card-fees">
          <strong>Fees per consultation: </strong>$ {ele?.fees}
        </p>
        <p className="doctor-card-phone">
          <strong>Phone: </strong>
          {ele?.userId?.mobile}
        </p>
        <button className="doctor-card-btn" onClick={handleModal}>
          Book Appointment
        </button>
      </div>
      {modalOpen && <BookAppointment setModalOpen={setModalOpen} ele={ele} />}
    </div>
  );
};

export default DoctorCard;
