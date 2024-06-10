import React from "react";
import Department from '../../components/Department/Department';
import "./team.css";
import { departments } from './teamData';
import { HashLink as Link } from 'react-router-hash-link';


const Team = () => {

  const icon_departments = [
    { name: "Android Team", image: "/TeamPage_Assets/android.png" },
    { name: "SDC", image: "/TeamPage_Assets/sdc.png" },
    { name: "Research & Development", image: "/TeamPage_Assets/sdc.png" }, // Replace with the correct path
    { name: "PR & Outreach", image: "/TeamPage_Assets/pr_and_outreach.png" },
    { name: "Event Management", image: "/TeamPage_Assets/evm.png" },
    { name: "Finance", image: "/TeamPage_Assets/finance.png" },
    { name: "UI/UX", image: "/TeamPage_Assets/sdc.png" }, // Replace with the correct path
    { name: "Content Team", image: "/TeamPage_Assets/content.png" },
    { name: "Design Team", image: "/TeamPage_Assets/design.png" },
    { name: "Media Team", image: "/TeamPage_Assets/media.png" }
  ];

  return (
    <>
      <main>
        <div className="border h-screen   team-bg bg-cover bg-center flex flex-col items-center justify-start
        "
        >
          <h1 className="text-5xl font-bold ml-11">
            MEET
            <br />
            THE TEAM
          </h1>
        </div>
        <section>
          <div className="h-34 p-2 px-8 flex justify-between items-center dark-green-bg">
            {icon_departments.map((department, index) => (
              <Link
                key={index} className="w-20 h-24 p-0 m-2 flex flex-col  justify-center items-center "
                smooth to={`#${department.name.toLowerCase().replace(/ /g, '-')}`}>
                <div
                  className=" p-0 w-14 h-16 bg-cover bg-center"
                  style={{ backgroundImage: `url(${department.image})` }}
                ></div>
                <p className="text-white leading-none">{department.name}</p>
              </Link>
            ))}
          </div>
        </section>
        {departments.map((department, index) => (
          <Department key={index} department={department} row={index % 2 !== 0} />
        ))}

      </main>

      {/* <main>
        <div className='team-bg h-96 bg-black bg-cover bg-center flex flex-col items-start justify-end '>
          <div className='text-white pl-44 font-bold  text-6xl '>
            MEET
          </div>
          <div
            className='h-1/4 flex pl-44 w-full bg-indigo-950 bg-opacity-50 '>
            <div className='text-6xl  pt-0 font-bold text-green-500'>
              THE TEAM
            </div>
          </div>
        </div>
      </main>
       <section>
        <div className='text-center p-10 split-bg '>
          <h2 className='text-4xl  font-semibold  pb-5'>
            Great work requires great people, and we think ours are some of the best
          </h2>
          <p className=' text-xl '>
            Welcome to the Android Club! We are a group of passionate developers, designers, and enthusiasts dedicated to exploring and innovating within the Android ecosystem.
            Our diverse team brings together a wealth of experience and a shared commitment to pushing the boundaries of mobile technology.
          </p>
          <section id='admin'>
            <div className=' mt-20 h-fit flex flex-row justify-evenly items-center p-2' >
              <h1 className='text-2xl font-semibold '>
                ADMIN
              </h1>
              <MemberCard />
              <MemberCard />
              <MemberCard />
              
            </div>
          </section>
          <section id='executive board'>
            <div className=' mt-20 h-fit flex flex-row justify-evenly items-center p-2' >
              <h1 className='text-2xl font-semibold '>
                Executive Board
              </h1>
              <MemberCard />
              <MemberCard />
              <MemberCard />
              <MemberCard />
              <MemberCard />
              <MemberCard />
            </div>
          </section>
          <hr className="border-t-4 rounded-md mt-10 border-black" />
          <section id='android'>
            <div className=' mt-20 h-fit flex flex-row justify-evenly items-center p-2' >
              <h1 className='text-2xl font-semibold '>
                Android
              </h1>
              <MemberCard />
              <MemberCard />
            </div>
            <div className=' mt-20 h-fit flex flex-row justify-evenly items-center p-2' >
            <MemberCard />
              <MemberCard />
              <MemberCard />
              <MemberCard />
              <MemberCard />
            </div>
          </section>
          <hr className="border-t-4 rounded-md mt-10 border-black" />
          <section id='ui/ux'>
            <div className=' mt-20 h-fit flex flex-row justify-evenly items-center p-2' >
              <h1 className='text-2xl font-semibold '>
                UI/UX
              </h1>
              <MemberCard />
              <MemberCard />
                  
            </div>
            <div className=' mt-20 h-fit flex flex-row justify-evenly items-center p-2' >
            <MemberCard />
             
            </div>
          </section>
          <hr className="border-t-4 rounded-md mt-10 border-black" />
          <section id='sdc'>
            <div className=' mt-20 h-fit flex flex-row justify-evenly items-center p-2' >
              <h1 className='text-2xl font-semibold '>
                SDC
              </h1>
              <MemberCard />
              <MemberCard />          
            </div>
            <div className=' mt-20 h-fit flex flex-row justify-evenly items-center p-2' >
            <MemberCard />
              <MemberCard />
              <MemberCard />
            </div>
          </section>
          <hr className="border-t-4 rounded-md mt-10 border-black" />
          <section id='rnd'>
            <div className=' mt-20 h-fit flex flex-row justify-evenly items-center p-2' >
              <h1 className='text-2xl font-semibold '>
                RESEARCH AND DEVELOPMENT
              </h1>
              <MemberCard />
              <MemberCard />
              <MemberCard />         
            </div>
            <div className=' mt-20 h-fit flex flex-row justify-evenly items-center p-2' >
            <MemberCard />
              <MemberCard />
              <MemberCard />
            </div>
          </section>
          <hr className="border-t-4 rounded-md mt-10 border-black" />
          <section id='fnd'>
            <div className=' mt-20 h-fit flex flex-row justify-evenly items-center p-2' >
              <h1 className='text-2xl font-semibold '>
                FINANCE AND DOCUMENTATION
              </h1>
              <MemberCard />
              <MemberCard />
                     
            </div>
            <div className=' mt-20 h-fit flex flex-row justify-evenly items-center p-2' >
            <MemberCard />
              <MemberCard />
              <MemberCard />
              <MemberCard />
              <MemberCard />
            </div>
          </section>
          <hr className="border-t-4 rounded-md mt-10 border-black" />
          <section id='evm'>
            <div className=' mt-20 h-fit flex flex-row justify-evenly items-center p-2' >
              <h1 className='text-2xl font-semibold '>
                EVENT MANAGEMENT
              </h1>
              <MemberCard />
              <MemberCard />            
            </div>
            <div className=' mt-20 h-fit flex flex-row justify-evenly items-center p-2' >
            <MemberCard />
              <MemberCard />
              <MemberCard />
              <MemberCard />
              <MemberCard />
            <MemberCard />
              <MemberCard />
              <MemberCard />
              <MemberCard />
             
            </div>
          </section>
          <hr className="border-t-4 rounded-md mt-10 border-black" />
          <section id='pr'>
            <div className=' mt-20 h-fit flex flex-row justify-evenly items-center p-2' >
              <h1 className='text-2xl font-semibold '>
                PR AND OUTREACH
              </h1>
              <MemberCard />
              <MemberCard />           
            </div>
            <div className=' mt-20 h-fit flex flex-row justify-evenly items-center p-2' >
            <MemberCard />
              <MemberCard />
              <MemberCard />
              <MemberCard />
              <MemberCard />
              <MemberCard />
              <MemberCard />
              <MemberCard />
              <MemberCard />
              <MemberCard />
              <MemberCard />
            </div>
          </section>
          <hr className="border-t-4 rounded-md mt-10 border-black" />
          <section id='con'>
            <div className=' mt-20 h-fit flex flex-row justify-evenly items-center p-2' >
              <h1 className='text-2xl font-semibold '>
                CONTENT
              </h1>
              <MemberCard />
              <MemberCard />       
            </div>
            <div className=' mt-20 h-fit flex flex-row justify-evenly items-center p-2' >
            <MemberCard />
              <MemberCard />
              <MemberCard />
              <MemberCard />
              <MemberCard />
              <MemberCard />
              <MemberCard />
              <MemberCard />
              <MemberCard />
            </div>
          </section>
          <hr className="border-t-4 rounded-md mt-10 border-black" />
          <section id='design'>
            <div className=' mt-20 h-fit flex flex-row justify-evenly items-center p-2' >
              <h1 className='text-2xl font-semibold '>
                DESIGN
              </h1>
              <MemberCard />
              <MemberCard />            
            </div>
            <div className=' mt-20 h-fit flex flex-row justify-evenly items-center p-2' >
            <MemberCard />
              <MemberCard />
              <MemberCard />
              <MemberCard />
              <MemberCard />
              <MemberCard />
              <MemberCard />
              <MemberCard />
              <MemberCard />
            </div>
          </section>
          <hr className="border-t-4 rounded-md mt-10 border-black" />
          <section id='media'>
            <div className=' mt-20 h-fit flex flex-row justify-evenly items-center p-2' >
              <h1 className='text-2xl font-semibold '>
                MEDIA
              </h1>
              <MemberCard />
              <MemberCard />           
            </div>
            <div className=' mt-20 h-fit flex flex-row justify-evenly items-center p-2' >
            <MemberCard />
              <MemberCard />
              <MemberCard />
              <MemberCard />
              <MemberCard />
              <MemberCard />
              <MemberCard />
              <MemberCard />
              <MemberCard />
        
            </div>
          </section>
        </div>
      </section>    */}


    </>

  )
};

export default Team;
