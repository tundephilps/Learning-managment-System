// components/EditProfileModal.js

import Image from "next/image";
import React, { useState, FormEvent, ChangeEvent } from "react";
import styled from "styled-components";
import Teacher from "../../public/teacher.jpeg";
import { IoCameraOutline } from "react-icons/io5";

interface FormData {
  firstName: string;
  lastName: string;
  // Add other form fields here
}

interface EditProfileModalProps {
  onClose: () => void;
}

const EditProfileModal: React.FC<EditProfileModalProps> = ({ onClose }) => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    // Add other form fields here
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Send formData to API
    console.log("Form submitted:", formData);
    onClose(); // Close modal after submission
  };

  return (
    <ModalContainer>
      <ModalContent>
        <h2>Edit Profile</h2>

        <form
          onSubmit={handleSubmit}
          style={{ overflowY: "scroll", height: "70vh" }}
        >
          <div
            style={{
              height: "200px",
              width: "200px",
              borderRadius: "50%",
              borderColor: "lightgray",
              borderWidth: "1px",
              position: "relative",
            }}
          >
            <Image
              src={Teacher}
              width={180}
              height={180}
              alt=""
              style={{ borderRadius: "50%", margin: "auto" }}
            />
            <div
              style={{
                padding: "20px",
                background: "rgba(70, 36, 165, 0.5)",
                position: "absolute",
                borderRadius: "50%",
                top: "30%",
                right: "35%",
                cursor: "pointer",
              }}
            >
              <IoCameraOutline style={{ color: "white", fontSize: "25px" }} />
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              flexDirection: "row",
              gap: "10px",
            }}
          >
            <div style={{ padding: "20px", width: "285px" }}>
              <label>
                First Name:
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                />
              </label>
            </div>

            <div style={{ padding: "20px", width: "285px" }}>
              <label>
                Last Name:
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </label>
            </div>
            <div style={{ padding: "20px", width: "285px" }}>
              <label>
                Middle Name:
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </label>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              flexDirection: "row",
              gap: "10px",
            }}
          >
            <div style={{ padding: "20px", width: "285px" }}>
              <label>
                Mobile
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                />
              </label>
            </div>

            <div style={{ padding: "20px", width: "285px" }}>
              <label>
                Whatsapp
                <input
                  type="number"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </label>
            </div>
            <div style={{ padding: "20px", width: "285px" }}>
              <label>
                Email
                <input
                  type="email"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </label>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              flexDirection: "row",
              gap: "10px",
            }}
          >
            <div style={{ padding: "20px", width: "285px" }}>
              <label>
                Mobile
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                />
              </label>
            </div>

            <div style={{ padding: "20px", width: "285px" }}>
              <label>
                Whatsapp
                <input
                  type="number"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </label>
            </div>
            <div style={{ padding: "20px", width: "285px" }}>
              <label>
                Email
                <input
                  type="email"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </label>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              flexDirection: "row",
              gap: "10px",
            }}
          >
            <div style={{ padding: "20px", width: "285px" }}>
              <label>
                Mobile
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                />
              </label>
            </div>

            <div style={{ padding: "20px", width: "285px" }}>
              <label>
                Whatsapp
                <input
                  type="number"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </label>
            </div>
            <div style={{ padding: "20px", width: "285px" }}>
              <label>
                Email
                <input
                  type="email"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </label>
            </div>
          </div>
          {/* Add other form fields */}
          <button type="submit">Save</button>
        </form>
      </ModalContent>
    </ModalContainer>
  );
};

export default EditProfileModal;

const ModalContainer = styled.div`
  /* Styling for the modal container */
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  height: 100%;
`;

const ModalContent = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;

  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;
