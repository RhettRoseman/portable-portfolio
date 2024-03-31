"use client"
import React from "react";
import Link from "next/link";
interface NavTabsProps {
  activeTab: string;
}
export default function NavTabs() {
    return (
  
    <div className="m-5">
        <Link href="/" className="m-2">Home</Link>
        <Link href="/About" className="m-2">About</Link>
    
        <Link href="/Portfolio" className="m-2">Portfolio</Link>
        <Link href="/Resume" className="m-2"> Resume</Link>
        <Link href="/Contact" className="m-2" >Contact</Link>
        
    </div>
  );
};


