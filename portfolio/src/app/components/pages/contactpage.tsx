
import React from "react"
import NavTabs from "../navigation/navtabs"
import Link from "next/link"
export default function Contactpage(){
    return(
        <div >
             <div className="border-2 m-20 w-70">
                <div className="text-xl text-justify m-5">
              <Link href=''>Github</Link>  
            </div>
            <div className="text-xl text-justify m-5">
               Linked in <Link href=''></Link>  
            </div> 
            <div className="text-xl text-justify m-5">
                Email <Link href=''></Link>  
            </div>
            <div className="text-xl text-justify m-5">
                Calendly <Link href=''></Link> 
            </div>
            <div className="text-xl text-justify m-5">
           
            </div>
            <div></div>
            </div>
        </div>
    )
}