import Modal, { ModalProps } from "react-native-modal";

import React from "react";

export interface IModalProps {
  children?: React.ReactNode;
  visible?: boolean;
  onClose: () => void;
}

const IModal = ({ children, visible, onClose, ...props }: IModalProps) => {
  return (
    <Modal
      onBackButtonPress={onClose}
      animationOut="fadeOutDown"
      onBackdropPress={onClose}
      animationOutTiming={800}
      animationInTiming={800}
      animationIn="fadeInUp"
      isVisible={visible}
      {...props}>
      {children}
    </Modal>
  );
};

export default IModal;
