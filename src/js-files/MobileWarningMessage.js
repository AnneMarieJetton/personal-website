import React from 'react';
import '../css-files/MobileWarningMessage.css';
import StarsBackdrop from './StarsBackdrop';

const MobileWarningMessage = () => (
  <div className="MobileWarningMessageParent">
    <StarsBackdrop/>
    <div className='MobileWarningMessageText'>
        <span>Whoops!</span>
        <spam>This website isn't compatable with mobile devices. Please swap to a desktop Browser.</spam>
    </div>
  </div>
);

export default MobileWarningMessage;