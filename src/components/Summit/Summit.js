import React from 'react';
import apiSummitRequest from '../../hooks/apiSummitRequest';
import { useQuery } from 'react-query';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import {FaComment} from 'react-icons/fa';

function Summit() {
    const {data} = useQuery("comments", () => apiSummitRequest("GET", "comments"))

  return (
    <>
    <Header/>
        <div className='summit-container'>
            <h1>FEEDBACKS</h1>
            <div className='summit-div'>
                {
                    (data || []).map(item => {
                        if(item.id<4) return (
                            <div className='feedback-div'>
                                <div className='background-div'>                                
                                    <div className='mail-div'>
                                    <FaComment/>
                                    <span>{item.email}</span>
                                    </div>
                                    <div className='body-div'>
                                        <p>{item.body}</p>
                                    </div>                                
                                </div>
                            </div>
                        ); else return ''
                    })
                }
            </div>
        </div>
    <Footer/>
    </>
  )
}

export default Summit