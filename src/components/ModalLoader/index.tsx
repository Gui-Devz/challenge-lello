import { Modal } from "./styles";

interface IModalLoaderProps {
  isOpen: boolean;
  children: React.ReactNode;
}

export const ModalLoader = ({ isOpen, children }: IModalLoaderProps) => {
  return <>{isOpen && <Modal className="p-2 p-lg-0">{children}</Modal>}</>;
};
