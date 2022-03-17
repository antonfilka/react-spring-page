import React from 'react';
import classes from './SideBar.module.css';
import DropDownTab from './DropDownTab/DropDownTab';
import Tab from './Tab/Tab';
import clsx from 'clsx';
import { setOverlayIsActive } from '../../store/actions/homePageActions';
import { useDispatch } from 'react-redux';

const SideBar = ({ tabs, overlayIsActive }) => {
  const dispatch = useDispatch();

  const handlerCloseButtonOnClick = () => {
    dispatch(setOverlayIsActive(false));
  };

  return (
    <div
      className={clsx(
        classes.overlay,
        { [classes.overlayOpen]: overlayIsActive },
        { [classes.overlayClose]: !overlayIsActive }
      )}
    >
      <img
        className={classes.closebtn}
        src="https://flaticons.net/icon.php?slug_category=mobile-application&slug_icon=close"
        alt="img"
        onClick={() => handlerCloseButtonOnClick()}
      />
      <div className={classes.overlayContent}>
        {tabs.map(tab =>
          tab.isDropdown ? (
            <DropDownTab key={tab.id} tab={tab} />
          ) : (
            <Tab key={tab.id} tab={tab} />
          )
        )}
      </div>
    </div>
  );
};

export default SideBar;
