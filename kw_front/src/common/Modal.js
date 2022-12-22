import { useRef, useState } from "react";
import Login from "./Login";

function Modal({ token, setToken, setAuth, logInModal, setLogInModal }) {
  const [modalContent, setModalContent] = useState(0);
  const ModalBG = useRef();
  return (
    <div className="z-30 w-full fixed text-5xl ">
      {logInModal ? (
        <div
          className="W-full h-screen bg-transparent"
          ref={ModalBG}
          onClick={(e) => {
            if (ModalBG.current === e.target) {
              setLogInModal(false);
            }
          }}
        >
          <div className="z-25 w-3/12 bg-white fixed left-1/3 top-1/4 p-2.5 text-lg ">
            <Login
              token={token}
              setToken={setToken}
              setModalContent={setModalContent}
              setAuth={setAuth}
              setLogInModal={setLogInModal}
            />
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default Modal;
