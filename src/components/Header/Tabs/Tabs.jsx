import React from 'react';
import classes from './Tabs.module.css';
import Switcher from './Switcher/Switcher';
import Tab from './Tab/Tab';
import DropdownTab from './DropdownTab/DropdownTab';
import { useSelector } from 'react-redux';

const Tabs = () => {
  const tabs = useSelector(state => state.homePage.tabs);
  return (
    <>
      <div className={classes.tabs}>
        {tabs.map(tab =>
          tab.isDropdown ? (
            <DropdownTab key={tab.id} tab={tab} />
          ) : (
            <Tab key={tab.id} link={tab.link} tabTitle={tab.tabTitle} />
          )
        )}
      </div>
      <Switcher className={classes.switcher} />
    </>
  );
};

export default Tabs;
