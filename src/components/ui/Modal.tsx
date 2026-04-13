import type { ReactNode } from "react";
import ReactDom from "react-dom";
interface ModalProps {
  children: ReactNode;
  open: boolean;
}
function Modal({ children, open }: ModalProps) {
  if (!open) return null;
  return ReactDom.createPortal(
    <>
      <div style={{ position: "fixed", inset: 0, zIndex: 50 }}>{children}</div>
    </>,
    document.getElementById("portal")!,
  );
}

export default Modal;
