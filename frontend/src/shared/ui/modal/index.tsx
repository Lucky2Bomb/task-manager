import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const style = {
  position: "absolute" as const,
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90vw",
  maxWidth: "520px",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 2,
};

export interface BasicModalProps {
  setOpen: (value: boolean) => void;
  open: boolean;
  header?: JSX.Element;
  isCloseButton?: boolean;
  children?: any;
  title?: string;
}

export function BasicModal({
  open,
  setOpen,
  children,
  title = "",
  header,
  isCloseButton = true,
}: BasicModalProps) {
  const handleClose = () => {
    setOpen(false);
  };

  const closeButton = isCloseButton ? (
    <Box>
      <IconButton onClick={handleClose}>
        <CloseIcon />
      </IconButton>
    </Box>
  ) : null;

  const titleComponent =
    !(title.length === 0) || isCloseButton ? (
      <Typography variant="h6" component="span">
        {title}
      </Typography>
    ) : null;

  return (
    <Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        disableAutoFocus
      >
        <Box sx={style}>
          <Box display="flex" justifyContent="space-between" pb={1.5}>
            {titleComponent}
            {closeButton}
          </Box>
          <Box>{children}</Box>
        </Box>
      </Modal>
    </Box>
  );
}
