import React from "react";
import Image from "next/image";
import Resumepage from "../components/pages/resumepage";
import NavTabs from '../components/navigation/navtabs';
export default function Resume(){
    return(
        <div>
            <div> <NavTabs /></div>
             <Resumepage />
        </div>
    )
}