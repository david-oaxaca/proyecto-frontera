import React from 'react';
import { useLocation } from 'react-router-dom';
import '../Assets/Styles/style.scss';

export default function Documentos() {
  const location = useLocation();
  const { option } = location.state ? location.state : "";
  return (
    <div className='main-bg'>
      <div className='main-bg'>
        <h1>{option}</h1>
      </div>
    </div>
  )
}
