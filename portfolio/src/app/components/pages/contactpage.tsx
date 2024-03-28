
import React from "react"
import NavTabs from "../navigation/navtabs"
import Link from "next/link"
export default function Contactpage(){
    return(
        <div >
             <div className="border-2 m-20 w-70code ">
                <div className="text-xl text-center m-5 border-2">
              <Link href='https://github.com/RhettRoseman'>Github: @RhettRoseman</Link>  
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