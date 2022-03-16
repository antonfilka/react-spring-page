import React from 'react';
import classes from './DropDownTab.module.css';
import DropDownContent from './DropDownContent/DropDownContent';
import clsx from 'clsx';
import { setActiveTabId } from './../../../store/homePage-reducer';
import { useSelector, useDispatch } from 'react-redux';

const DropDownTab = ({ tab }) => {
  const activeTabId = useSelector(state => state.homePage.activeTabId);
  const dispatch = useDispatch();

  return (
    <div>
      <div className={classes.isDropdown}>
        <a href={tab.link}>{tab.tabTitle}</a>
        <img
          className={clsx({ [classes.flipped]: activeTabId.includes(tab.id) })}
          src="https://icon-library.com/images/white-down-arrow-icon/white-down-arrow-icon-7.jpg"
          alt="img"
          onClick={() => dispatch(setActiveTabId(tab.id))}
        />
      </div>
      <hr className={classes.hr} />
      {activeTabId.includes(tab.id) ? (
        <DropDownContent activeTabId={activeTabId} tab={tab} />
      ) : null}
    </div>
  );
};

export default DropDownTab;
