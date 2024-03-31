import Image from "next/image";
import Link from "next/link";
import NavTabs from './components/navigation/navtabs';

export default function Home() {
  return ( <div>
    <NavTabs  />
    <div className="text-center p-24 justify-center align-center" >
     <h1 className="text-4xl">Welcome to My <Link href='/Portfolio'>Portfolio!</Link></h1>
    <h2>Joseph Everette Roseman III</h2>
    <h2>Rhett Roseman </h2> 
    </div>
    </div>
  );
}
