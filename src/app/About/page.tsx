import Link from "next/link";
import React from "react";
import Aboutpage from "../components/pages/aboutpage";
import NavTabs from '../components/navigation/navtabs';
export default function About() {
  return (
    <div>
        <div> <NavTabs /></div>
  <div>  <Aboutpage /> </div> 
    </div>
  );
}