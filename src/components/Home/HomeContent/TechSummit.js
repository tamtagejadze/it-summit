import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import summit from '../../../images/summit.png';
import i18n from '../../../i18next/i18n';

function TechSummit() {
    const {t} = useTranslation();
  return (
    <div className='techSummit-container'>        
        <div className='techSummit-container-content'>
            <h1>{t('MAINHEADER')}</h1>
            <h3>{t('CITY')}</h3>
            <h3>{t('DATE')}</h3>
            <div className='techSummit-container-content-btns'>
                <div >
                    <Link to={'/registration'} className='register-btn' target='_blank'>{t('REGISTRATION')}</Link>
                </div>
                <div>
                    <a href='#techEvent' className='learnMore-btn'>{t('LEARNMORE')}</a>
                </div>
            </div>
        </div>
        <img className='summit-img' src ={summit} />
    </div>
  )
}

export default TechSummit