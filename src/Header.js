import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div>
        <nav>
            <ul>
                <Link to="/About us"><li>ABOUT US</li></Link>
                <Link to ="/PRE-PRIMARY"><li>PRE-PRIMARY</li></Link>
                <Link to = "/PRIMARY"><li>PRIMARY</li></Link>
               <Link to = "/HIGH SCHOOL"><li>HIGH SCHOOL</li></Link>
                <Link to ="/STUDENT LIFE"><li>STUDENT LIFE</li></Link>
                <Link to = "/ACHEIVEMENTS"><li>ACHEIVEMENTS</li></Link>
                <Link to = "/FACILITIES"><li>FACILITIES</li></Link>
                <Link  to ="/UNIFORM"><li>UNIFORMS</li></Link>
                <Link to ="/GALLERY"><li>GALLERY</li></Link>
                <Link to = "/CAREERS"><li>CAREERS</li></Link>

                




            </ul>
        </nav>
    </div>
  )
}
