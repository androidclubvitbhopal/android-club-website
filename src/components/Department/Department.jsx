// src/components/Department.js
import React from 'react';
import MemberCard from '../Member-Card/MemberCard';
import "./department.css";

const Department = ({ department }) => {
  return (
    <section
    id={department.name.toLowerCase().replace(/ /g, '-')}
    className="text-color ">
      <h2 className="text-5xl py-4 border flex justify-center items-center font-bold ">{department.name}</h2>
      <div className={`flex flex-col gap-5 justify-center `}>
        {department.admins.map((admin, index) => (
          <MemberCard key={index} admin={admin} bgcolor={index % 2 === 0 ? 'dark-green-bg' : 'fade-green-bg'}
          row={index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}
          />
        ))}
      </div>
    </section>
  );
};

export default Department;
