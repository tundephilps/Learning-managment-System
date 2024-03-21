import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import styled from "styled-components";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (formData: { message: string; file: File | null }) => void;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, onSubmit }) => {
  const [message, setMessage] = useState("");
  const [file, setFile] = useState<File | null>(null);

  const handleSave = () => {
    const formData = {
      message,
      file,
    };

    onSubmit(formData);
    onClose();
  };

  return (
    <ModalContainer style={{ display: isOpen ? "flex" : "none" }}>
      <ModalContent>
        <Header>
          <Title>Home Work Details</Title>
          <button onClick={() => onClose()}>
            <IoMdClose />
          </button>
        </Header>

        <p>Description</p>
        <Question>
          Write a 300 words essay on the financial Market situation during the
          last World economic meltdown. (Download Attached pdf for more details)
        </Question>

        <DownloadButton>Download Question Booklet</DownloadButton>
        <Label>
          Message:
          <Input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </Label>
        <Label>
          Attach Document: (Pls make sure your answers are delivered in doc/pdf
          format )
          <input
            type="file"
            onChange={(e) => setFile(e.target.files ? e.target.files[0] : null)}
          />
        </Label>
        <DownloadButton onClick={handleSave}>
          Submit Answer Sheet
        </DownloadButton>
      </ModalContent>
    </ModalContainer>
  );
};

const DownloadButton = styled.button`
  background-color: #3498db;
  color: #fff;
  padding: 5px 8px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 10px;

  &:hover {
    background-color: #2980b9;
  }
`;

const ModalContent = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;

  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h1`
  font-weight: 800;
  font-size: 15px;
`;

const Question = styled.p`
  font-size: 10px;
`;

const Label = styled.label`
  font-size: 12px;
  color: gray;
`;

const Input = styled.input`
  height: 200px;
`;
const ModalContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;

  label {
    display: block;
    margin-bottom: 10px;
  }

  input {
    width: 100%;
    padding: 8px;
    margin-top: 5px;
    box-sizing: border-box;
  }

  button {
    background-color: #4caf50;
    color: #fff;
    padding: 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
`;
