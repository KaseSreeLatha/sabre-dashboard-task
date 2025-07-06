import React from 'react';

import { useTranslation } from 'react-i18next';

import './Footer.css';



const Footer: React.FC = () => {

  const { t } = useTranslation();



  return (

    <footer className="footer">

      <div className="footer-container">

        <div className="footer-content">

          {t('footer.copyright')}

        </div>

      </div>

    </footer>

  );

};



export default Footer;