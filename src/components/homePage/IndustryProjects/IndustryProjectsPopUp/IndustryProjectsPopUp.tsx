import React, { useEffect, useState } from "react";
import { Modal } from "office-ui-fabric-react";
import "./IndustryProjectsPopUp.scss";

const cancelIcon = require("../../../../assets/cancel-icon.png");

export const IndustryProjectsPopUp = (props: any) => {
  const { isModalOpened } = props;
  const [isModalOpenState, setIsModelOpenState] = useState(false);
  const [modalData, setModalData] = useState(props);

  useEffect(() => {
    if (isModalOpened) {
      setModalData(props);
    } else {
      setModalData(null);
    }
    setIsModelOpenState(isModalOpened);
  }, [isModalOpened, props]);

  return isModalOpenState ? (
    <Modal
      isOpen={isModalOpenState}
      containerClassName="modalContainer"
      styles={{
        main: {
          width: props.width ? props.width : "800px",
          height: "785px",
        },
      }}
    >
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${modalData.modalThumbnail})`,
        }}
      >
        <button
          className="cancelButton"
          onClick={modalData.handleCancelBtnClick}
          type="button"
        >
          <img alt="close pop up" src={cancelIcon}></img>
        </button>
        <div className="modalHeading">{modalData.heading}</div>
        {modalData.body ? modalData.body : null}
      </div>
    </Modal>
  ) : null;
};

export default IndustryProjectsPopUp;
