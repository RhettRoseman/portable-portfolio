import React from 'react';
import Image from 'next/image';
export default function Resumepage(){
    return (
        <div>
            <h1>Resume</h1>
            <Image src="/images/resume.png" alt="resume" width={1000} height={1000} />
        </div>
    )
}