/*
    This component is used for displaying some statistics of user clicks and buttons
*/

import React from 'react';
import ColourPicker from './ColourPicker';

const TopBar = () => {
  return (
    <div className="container-topbar">
      <ColourPicker colour="black"/>
      <ColourPicker colour="blue"/>
      <ColourPicker colour="red"/>
    </div>
  );

}

export default TopBar;
