import React from 'react';
import Contact from './Contact';
import './Contacts.css'

const Contacts = ({state}) => {
    console.log('state', state);
    return <div className='contacts'>
        <div className='header'>
            <p>Contact List</p>
        </div>
        <div className='contact-list'>
            {state.map((item) => {
                return <Contact key={item.id} name={item.name} phone={item.phone}/>
            })}
        </div>
    </div>
}

export default Contacts;