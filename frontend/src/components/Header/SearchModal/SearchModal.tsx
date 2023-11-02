import Modal from "react-bootstrap/Modal";

import { BiSearchAlt } from "react-icons/bi";

import "./SearchModal.css";

export default function SearchModal(props: any) {
  return (
    <Modal
      {...props}
      className="search-modal"
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered>
      <Modal.Body>
        <form action="">
          <div className="custom-input position-relative m-0">
            <input type="text" className="custom-input__input" required />
            <label className="custom-input__label">چی دلت میخواد؟</label>
            <BiSearchAlt className="search-modal__search-icon" />
          </div>
        </form>
      </Modal.Body>
    </Modal>
  );
}
