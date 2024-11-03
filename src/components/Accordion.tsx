'use client'

import { Icon } from '@iconify/react';
import './Accordion.css';
import { useState } from 'react';
import qas from '@/qa';

export default function Accordion () {

    // Utilise un état pour stocker l'index de l'élément actuellement ouvert
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleAnswer = (index: number): void => {
        // Si l'index est déjà ouvert, on le ferme, sinon on l'ouvre
        setOpenIndex(openIndex === index ? null : index);
    };


    return (
        <div className='accordion'>
            {qas.map((qa, index) => (
                <div className="accordion-block" key={qa.id}>
                    <div className="qblock">
                        <p className="question">{qa.question}</p>
                        <Icon 
                            icon={openIndex === index ? "ep:arrow-up" : "ep:arrow-down"}  
                            className='arrow'
                            onClick={() => toggleAnswer(index)}
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