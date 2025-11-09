import React from 'react';

const Navbar = () => {
    return (
        <div className='navbar max-w-[1440px] mx-auto inter flex  justify-between flex-col md:flex-row'>
      <div className='font-bold text-[24px] '>
        <h1>CS — Ticket System</h1>
      </div>
  
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
      <li><a>Home</a></li>
      <li><a>FAQ</a></li>
      <li><a>Changelog</a></li>
      <li><a>Blog</a></li>
      <li><a>Download</a></li>
      <li><a>Contact</a></li>
      <button className='w-[145px] h-[43px] bg-gradient-to-r from-[#632EE3]  to-[#9F62F2] text-white rounded-xl '>+ New Ticket</button>
      
    </ul>
  </div>
</div>
    );
};

export default Navbar;