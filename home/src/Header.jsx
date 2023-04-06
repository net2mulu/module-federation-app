import React from "react";
// import { useState } from 'react';
// import DatePicker from "react-date-picker" ;
import MiniCart from "cart/MiniCart";
import Login from "cart/Login";

const Header = () => {
  // const [value, onChange] = useState(new Date());

  return (
    <div className="p-5 bg-blue-500 text-white text-3xl font-bold">
      {/* <DatePicker onChange={onChange} value={value} /> */}
      <div className="flex">
        <div className="flex-grow">Fidget Spinner world</div>
        <div className="flex-end relative">
          <MiniCart />
          <Login />
        </div>
      </div>
    </div>
  );
};

export default Header;
