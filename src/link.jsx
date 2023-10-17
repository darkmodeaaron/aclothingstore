import { useState } from 'react';
import './index.css'
import React from 'react'

export function Link({state}) {
    return <>
        <section className={`link ${state? 'inactive' : 'active'}`}>
             <h2 className='jkj'>THE DESTINATION FOR YOUR STYLE JOURNEY</h2>
             <a href='indfg' className='Link-link'>VIEW ARRIVALS</a>
        </section>
    </>
}