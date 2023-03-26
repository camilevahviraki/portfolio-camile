import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import serviceEnglish from '../../data/english/pages/services';
import serviceFrench from '../../data/french/pages/services';
import { setPageInView } from '../../redux/componetInView';
import useIsInViewport from '../../reusables/checkInViewwPort/checkInViewPort';
import frontendImage from '../../images/services/frontend.svg';
import backendImage from '../../images/services/backend.svg';
import mobileDevImage from '../../images/services/mobile.svg';
import './services.css';

const Services = () => {
  const dispatch = useDispatch();
  const ref1 = useRef(null);
  const isInViewport1 = useIsInViewport(ref1);
  const pageInView = useSelector((state) => state.pageInViewReducer);
  const {
    services,
  } = pageInView;

  const language = useSelector((state) => state.languageReducer);
  let pageData = serviceEnglish();
  if (language.languageKey === 0) {
    pageData = serviceEnglish();
  } else if (language.languageKey === 1) {
    pageData = serviceFrench();
  }

  if (isInViewport1 && !services) {
    dispatch(setPageInView({
      state: true,
      page: 'services',
    }));
  } else if (!isInViewport1 && services) {
    dispatch(setPageInView({
      state: false,
      page: 'services',
    }));
  }

  const {
    servicesTitle,
    title,
    ilustration,
  } = pageData;

  const {
    serv1, serv2, serv3, serv4,
  } = pageData.services;

  return (
    <div className="services-container" id="services" ref={ref1}>
      <div className="services-left-wrapp">
        <h5 className="my-services">{servicesTitle}</h5>
        <h2 className="services-title">
          {title.part1}
          {' '}
          <span className="title-highlight">{title.part2}</span>
          {' '}
          {title.part3}
        </h2>

        <ul className="services-list">
          <li className="service-name">
            <div className="serv-dot" />
            {serv1}
          </li>
          <li className="service-name">
            <div className="serv-dot" />
            {serv2}
          </li>
          <li className="service-name">
            <div className="serv-dot" />
            {serv3}
          </li>
          <li className="service-name">
            <div className="serv-dot" />
            {serv4}
          </li>
        </ul>
      </div>

      <div className="services-technologies">
        <div className="services-connect-line connect-front" />
        <div className="services-connect-line connect-mobile" />
        <div className="services-icon-container services-backend">
          <img src={backendImage} alt="" className="service-icon" />
          <h5>{ilustration.backend}</h5>
        </div>
        <div className="services-icon-container  services-frontend">
          <img src={frontendImage} alt="" className="service-icon" />
          <h5>{ilustration.frontend}</h5>
        </div>
        <div className="services-icon-container services-mobile">
          <img src={mobileDevImage} alt="" className="service-icon" />
          <h5>{ilustration.mobile}</h5>
        </div>
      </div>
    </div>
  );
};

export default Services;
