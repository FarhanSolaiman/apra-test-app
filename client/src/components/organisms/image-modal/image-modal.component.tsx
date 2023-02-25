import React from "react";
import Modal from "@material-ui/core/Modal";
import "./image-modal.component.css";
import { IImageData } from "src/types/image.type";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

type childProps = {
  data: number;
  list: Array<IImageData> | undefined;
  open: boolean;
  handleClose: () => void;
};

const ImageModal: React.FC<childProps> = ({
  data,
  list,
  open,
  handleClose,
}) => {
  const select = list?.find((item) => item.id === data);
  return (
    <Modal
      className="modalContainer"
      open={open}
      onClose={handleClose}
      aria-labelledby={select?.title}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <img className="image" src={select?.url} alt={select?.title} />
      </Fade>
    </Modal>
  );
};

export default ImageModal;
