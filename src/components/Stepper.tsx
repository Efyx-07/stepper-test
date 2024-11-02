'use client'

import { usePathname } from 'next/navigation';
import './Stepper.css';
import { useEffect, useState } from 'react';

export default function Stepper() {

    const pathname = usePathname();

    // Get the pathname and stock them in an array to process the stepper % evolution 
    const steps = ['/step1', '/step2', '/step3', '/step4'];
    const currentStep = steps.indexOf(pathname) + 1; 
    const targetWidth = (currentStep / steps.length) * 100;

    const [progressWidth, setProgressWidth] = useState<number>(0);

    // Apply a short delay for a stepper smooth appearence when component is mounted
    useEffect (() => {
        const timer = setTimeout(() => {
            setProgressWidth(targetWidth);
        }, 100);
        return () => clearTimeout(timer);
    }, [targetWidth])

    return (
        <div className="stepper-back">
            <div className="stepper" style={{ width: `${progressWidth}%` }}></div>
        </div>
    );
}
