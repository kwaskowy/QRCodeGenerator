import React from 'react';
import Swal from 'sweetalert2';
import { BsInfoLg } from "react-icons/bs";


function InfoPage({ theme }) {
  return (
    <div className="text-start mb-4">
      <button 
        onClick={() => Swal.fire({
          text: 'Aplikacja została wykonana jako projekt zaliczeniowy przedmiotu Wprowadzenie do Reacta',
          icon: 'info',
          footer: '<a href="https://github.com/kwaskowy/QRCodeGenerator.git">Link do githuba</a>',
          background: theme === 'light' ? '#F8F9FA' : '#000000',
          color: theme === 'light' ? '#000000' : '#F8F9FA',
          showConfirmButton: false, 
        })} 
        className="info-page btn"
      >
        {theme === 'light' ? <BsInfoLg color='black' /> : <BsInfoLg color='white' />}
      </button>
    </div>
  );
}


export default InfoPage;
