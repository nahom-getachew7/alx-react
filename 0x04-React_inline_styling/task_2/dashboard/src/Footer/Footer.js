import React from 'react';
import { getFullYear, getFooterCopy } from '../utils/utils';

function Footer() {
  return (
    <footer>
      <p>
        Copyright {getFullYear()} - {getFooterCopy(true)}
      </p>
    </footer>
  );
}

export default Footer;
