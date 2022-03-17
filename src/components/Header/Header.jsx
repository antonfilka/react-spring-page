import React from 'react';
import classes from './Header.module.css';
import Tabs from './Tabs/Tabs';
import SideBar from './../SideBar/SideBar';
import { useDispatch, useSelector } from 'react-redux';
import { setOverlayIsActive } from '../../store/actions/homePageActions';

const Header = () => {
  const dispatch = useDispatch();
  const tabs = useSelector(state => state.homePage.tabs);
  const overlayIsActive = useSelector(state => state.homePage.overlayIsActive);

  const handlerBurgerOnClick = () => {
    dispatch(setOverlayIsActive(true));
  };

  return (
    <>
      <SideBar tabs={tabs} overlayIsActive={overlayIsActive} />
      <div className={classes.header}>
        <div>
          <a href="https://spring.io">
            <img
              className={classes.logo}
              src={
                'https://spring.io/images/spring-logo-9146a4d3298760c2e7e49595184e1975.svg'
              }
              alt="img"
            />
          </a>
        </div>
        <Tabs className={classes.tabs} />
        <div className={classes.burger}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1200px-Hamburger_icon.svg.png"
            alt="img"
            onClick={() => handlerBurgerOnClick()}
          />
        </div>
      </div>
    </>
  );
};

export default Header;
