import React from 'react';
import { AiOutlineCopyrightCircle } from 'react-icons/ai';
import { useSelector } from 'react-redux';
import './footer.css';

const Footer = () => {
  const showFooter = useSelector((state) => state.footerReducer);
  return (
    <div className="footer-container" style={showFooter.state ? { display: 'flex' } : { display: 'none' }}>
      <h5 className="copyright-title">
        <AiOutlineCopyrightCircle />
        Camile Vahviraki 2020
      </h5>
    </div>
  );
};

export default Footer;
