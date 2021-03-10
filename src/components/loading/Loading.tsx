import * as React from "react";
import { Modal, Spinner } from "react-bootstrap";

const Loading = () => {
  return (
    <Modal.Dialog>
      <Modal.Body className="d-flex justify-content-center align-items-center flex-column">
        <Spinner animation="border" role="status">
          <span className="sr-only">
            <i>Fetching data from API...</i>
          </span>
        </Spinner>
        <span>Fetching data from API...</span>
      </Modal.Body>
    </Modal.Dialog>
  );
};

export default Loading;
