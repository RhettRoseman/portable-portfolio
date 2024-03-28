import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import '../../../../public/time-walker.jpg'
export default function Portfoliopage() {
    return (
        <div className="m-5">
            <p className="m-6 text-center">
                As a full-stack developer, I excel in creating cohesive digital experiences that seamlessly blend design with functionality working  alone and with one or more collaborators with multiple projects. I am passionate about leveraging my technical expertise to develop innovative solutions that drive user engagement and deliver tangible results.
            </p>

            <div>
                <div className='border-2 border-white'>

                    <div className='text-center text-2xl' >Solo Projects </div>
                    <div className='flex-row justify-center align-center'>
                        <Link className='m-4 hover:opacity-20' href="https://github.com/RhettRoseman/time-walker"> <Image src="/Stopwatch.gif" alt="time-walker" width={422} height={274} />  </Link>

                        <Link className='m-4 hover:opacity-20' href="https://github.com/RhettRoseman/next-back "> <Image src="/next-back.png" alt="next-back" width={422} height={274} />  </Link>


                        <Link className='m-4 hover:opacity-20' href="https://github.com/RhettRoseman/long-logos"><Image src="/long-logo.gif" alt="long-logos" width={422} height={274} />  </Link>


                        <Link className='m-4 hover:opacity-20' href="https://github.com/RhettRoseman/nifty-node"><Image src="/nifty-node.png" alt="nifty-node" width={422} height={274} />  </Link>
                        <Link className='m-4' href=""></Link>
                        <br />
                  

                    </div>
                    <div className='flex-row justify-center align-center' >                        
                        <Link className='m-4 hover:opacity-20' href="https://github.com/RhettRoseman/windy-wisdom"><Image src="/windy-wisdom.png" alt="nifty-node" width={422} height={274} /> </Link>
                        
                         <Link className='m-4 hover:opacity-20' href="https://github.com/RhettRoseman/supreme-doodle"><Image src="/password-generator.png" alt="nifty-node" width={422} height={274} /> </Link>
                         </div>
                    <div  >
                    <div className='m-4 text-center text-2xl'>Collaborative Projects</div>
                  <div className='flex-row justify-center align-center'>
                        <Link className='m-4 hover:opacity-20 ' href="https://github.com/drewdawge/bug-free-octo-system"><Image src="/nut-stack.png" alt="nut stack" width={422} height={274} />  </Link>
                        <Link className='m-4' href=""></Link>

                        <Link className='m-4 hover:opacity-20 ' href="https://github.com/RhettRoseman/mr-bigfoot"><Image src="/photoapp.png" alt="nut stack" width={422} height={274} />  </Link>
                        {/* <Image src="/windy-wisdom.png" alt="nifty-node" width={422} height={274} /> */}
                        </div>
                    </div>
                </div>
                
                <div></div>
                <div></div>
            </div>
        </div>
    )
}



// <p>
// </p>
// <p className="m-5 text-center">
// My expertise spans both front-end and back-end development, allowing me to leverage a comprehensive skill set to bring any project to fruition. With proficiency in HTML, CSS, JavaScript, and various backend languages, I specialize in crafting intuitive user interfaces while ensuring server-side functionality. 
// </p>
// <p className="m-5 text-center">
// By harnessing my knowledge of databases and frameworks, I design scalable and efficient solutions tailored to the unique requirements of each project. From conceptualization to deployment, I am dedicated to delivering high-quality, performance-driven applications that not only meet but exceed expectations, leaving a lasting impact on users.
// </p> </p>