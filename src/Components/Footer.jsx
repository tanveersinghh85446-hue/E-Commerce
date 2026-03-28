import React from 'react'
import { Link } from "react-router-dom";
import { SiGnuprivacyguard } from "react-icons/si";
import { IoIosLogIn } from "react-icons/io";
export default function Footer() {
  return (
    <div>
      <Link to="/SignUp"><SiGnuprivacyguard /></Link>
      <Link to="/LogIn"><IoIosLogIn /></Link>

    </div>
  )
}
