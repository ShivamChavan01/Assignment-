import React, { FC } from 'react';
import From from '../Form/form';


interface ModalProps {
  isVisible: boolean;
  onClose: () => void;
}

const Modal: FC<ModalProps> = ({ isVisible, onClose }) => {
  if (!isVisible) return null;

  

  return (
    <div className='fixed   inset-0 backdrop-blur-sm flex justify-center items-center'>
      <div className='w-[600px] flex flex-col'>
        <button className='text-white text-xl place-self-end' onClick={onClose}>
          X
        </button>
        <div className='bg-white p-2 rounded-md'>
            <div className='container'>
               
                <From></From>

            </div>

        </div>
      </div>
    </div>
  );
};

export default Modal;
