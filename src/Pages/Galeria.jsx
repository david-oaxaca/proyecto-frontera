import React from 'react';
import { useLocation } from 'react-router-dom';
import '../Assets/Styles/style.scss';

export default function Galeria() {
  const location = useLocation()
  const { option } = location.state ? location.state : "";
  return (
    <div className='main-bg'>
      <h1>{option}</h1>
    </div>
  )
}
