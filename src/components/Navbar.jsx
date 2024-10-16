import React, { useState } from "react";
import { AiOutlineClose, AiOutLineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNa = () => {
    setNav(!nav);
  };
  return <div>Navbar</div>;
};

export default Navbar;
