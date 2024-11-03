'use client'

import { Icon } from '@iconify/react';
import './Accordion.css';
import { useState } from 'react';
import qas from '@/qa';

export default function Accordion () {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleAnswer = (index: number): void => setOpenIndex(openIndex === index ? null : index);

    return (
        <div className='accordion'>
            {qas.map((qa, index) => (
                <div className="accordion-block" key={qa.id} onClick={() => toggleAnswer(index)}>
                    <div className="qblock">
                        <p className="question">{qa.question}</p>
                        <Icon 
                            icon={openIndex === index ? "ep:arrow-up" : "ep:arrow-down"}  
                            className='arrow'
                        />
                    </div>
                    <p className={`answer ${openIndex === index ? 'open' : ''}`}>
                        {qa.answer}
                    </p>
                </div>
            ))}
        </div>
    )
}