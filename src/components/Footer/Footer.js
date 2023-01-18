import React from 'react'
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import i18next from '../../i18next/i18n'

function Footer() {
    const {t} = useTranslation();
  return (
    <footer>
        <div>
            <h3>EMAIL ADDRESS</h3>
            <span>hello@summit.com</span>
        </div>
        <div>
            <h3>MAILING ADDRESS</h3>
            <span>123 Anywhere St., Any City, ST 12345 </span>
        </div>
        <div>
            <h3>PHONE NUMBER</h3>
            <span>(123) 456-7890</span>
        </div>
        <div>
            <Link to={'/registration'} target='_blank'>{t('REGISTRATION')}</Link>
        </div>
    </footer>
  )
}

export default Footer