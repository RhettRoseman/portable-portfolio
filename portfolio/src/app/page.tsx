import Image from "next/image";
import Link from "next/link";
import NavTabs from "./components/navigation/navtabs";
export default function Home() {
  return (
    <div>
        <NavTabs />
    <main className="flex min-h-screen flex-col items-center p-14 text-center ">
    
      <div>  <h1 className="text-4xl p-10">Welcome to my <Link href="/Portfolio">Portfolio!</Link></h1>
    <h2 className="text-3xl">Rhett Roseman</h2></div>
  

    {/* <Image src={} width={} height={} alt=""></Image> */}
    </main>
    </div>
  );
}
