import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GiHamburgerMenu } from 'react-icons/gi';
import { SlArrowRight, SlArrowDown } from 'react-icons/sl';
import { setLanguage } from '../../redux/languageReducer';
import Menu from './menu';
import './header.css';

const Header = () => {
  const dispatch = useDispatch();
  const languageKey = useSelector((state) => state.languageReducer);
  const [showMenu, setMenu] = useState(false);
  const [selctedLang, setLang] = useState(languageKey.languageKey);
  const [showLanguages, setShowLanguages] = useState(false);
  const hidMenu = () => {
    setMenu(false);
  };

  const languages = [
    {
      name: 'Engish', symbol: 'EN',
    },
    {
      name: 'Français', symbol: 'FR',
    },
  ];

  const selectLanguage = (lang) => {
    setShowLanguages(false);
    setLang(lang);
    dispatch(setLanguage(lang));
  };

  if (showLanguages) {
    document.onkeydown = (e) => {
      e = e || window.event;
      if (e.keyCode === 38 || e.keyCode === '38') {
        setLang(0);
      } else if (e.keyCode === 40 || e.keyCode === '40') {
        setLang(1);
      }
    };
  }

  return (
    <div className="header-container">
      <div className="logo-wrapp">
        <div className="logo-back-blur" />
        <div className="logo-cont">
          <a href="#intro">Camile</a>
        </div>
      </div>
      <div className="select-language-container">
        <button className="select-language-button" onClick={() => setShowLanguages(!showLanguages)}>
          {
              showLanguages
                ? <SlArrowRight />
                : <SlArrowDown />
            }
          <span>{languages[selctedLang].symbol}</span>
        </button>
        {
            showLanguages ? (
              <div className="languages-list">
                {
                languages.map((lang, key) => (
                  <div
                    className={key === selctedLang ? 'language-to-select selected-language' : 'language-to-select'}
                    onClick={() => selectLanguage(key)}
                    key={key}
                  >
                    {lang.name}
                  </div>
                ))
              }
              </div>
            )
              : (<></>)
          }
      </div>

      <div className="hamburger-button-wrap" onClick={() => setMenu(true)}>
        <GiHamburgerMenu />
      </div>
      {
        showMenu
          ? <Menu showMenu={hidMenu} />
          : <></>
      }
    </div>
  );
};

export default Header;
