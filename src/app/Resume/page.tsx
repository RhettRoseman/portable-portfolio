import React from "react";
import NavTabs from '../components/navigation/navtabs';
import Image from "next/image";


export default function Resume(){

    return(
        <div>
            <div>
                <NavTabs />
            </div>
            <h3 className="m-5 text-center text-3xl "> Resume </h3>
            <div className="m-5 align-center text-center justify-center border-2 border-white">
             <img src="" alt="Resume" />
            </div>
        </div>

    );

}