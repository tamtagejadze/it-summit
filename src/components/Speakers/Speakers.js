import React, { useState } from 'react'
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import {BsSearch} from 'react-icons/bs'
import { useQuery } from 'react-query';
import apiRequest from '../../hooks/apiRequest';

function Speakers() {
    const [value, setValue] = useState('')
    const {data} = useQuery("users?page=2", () => apiRequest("GET", "users?page=2"))
   
        
  return (
    <>
    <Header/>
        <div className='speakers-container'>
            <div className='top-div'>
                <div><h1>SPEAKERS 2023</h1></div>
                <div className='search-div'>
                    <form>
                        <input 
                        placeholder='Search'
                        type='text'
                        value={value}
                        onChange={e => setValue(e.target.value)}
                        />
                    </form>
                    <button><BsSearch/></button>
                </div>
            </div>
            <div>
                <p>
                The Summit offers a range of sessions that provide educators
                <br/> the opportunity to interact and learn from each other.
                </p>
            </div>
            <div className='main_div'>
                {
                (data || []).map((item) => {
                    if(item.id<11) return (
                        <div className='user_div' key={item.id}>
                        <img className='image' src ={item.avatar}></img>
                        <span className='speakers-name'>{item.first_name+ " "+ item.last_name}</span>
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

export default Speakers