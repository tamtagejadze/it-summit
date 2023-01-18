import React from 'react'
import { useTranslation } from 'react-i18next'
import event from '../../../images/event.png';

function TechEvent() {
  const {t} = useTranslation();
  return (
    <div className='techEvent-container' id='More'>        
        <div className='techEvent-container-content'>
            <h1>{t('ABOUTEVENT')}</h1>
            <p>{t('TEXT')}</p>
        </div>
        <img className='event-img' src={event} />
    </div>
  )
}

export default TechEvent