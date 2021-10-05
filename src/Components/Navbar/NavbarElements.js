// import { FaBars } from 'react-icons/fa'
import { NavLink as Link } from 'react-router-dom'
import styled from 'styled-components';

export const Nav = styled.nav`
 background:#63D471;
 height: 85px;
 display: flex;
 justify-content: space-between;
 padding: 0.2rem calc((100vw - 1000px) / 2);
 z-index: 12;
 `;

export const NavLink = styled(Link)`
color: #808080;
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1rem;
height: 100%;
cursor: pointer;
&.active {
  color: #000000;
}
`;

export const NavMenu = styled.div`
display:flex;
align-items: center;
margin-right: -24px;
@media screen and (max-width: 768px){
  display: none;
}
`;

export const NavBtn = styled.nav`
display: flex;
align-items: center;
margin-right:24px;
@media screen and (max-width: 768px){
  display: none;
}
`;

export const NavBtnLink = styled(Link)`
border-radius: 4px;
background: #808080;
padding: 10px 22px;
color: #000000;
outline: none;
border: none;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;
`;
 

// const Navbar = () => {
//   return (
//     <nav className="nav-wrapper pink darken-3">
//       <div className="container">

//         <nav className="navbar navbar-expand-lg navbar-light bg-light">
//           <div className="container-fluid">
//             <NavLink className="navbar-brand" to="/">LITTLE BOOBOLETAS</NavLink>
            
//             <div className="collapse navbar-collapse" id="navbarNavDropdown">
//               <ul className="navbar-nav">
//                 <li className="nav-item">
//                   <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
//                 </li>
//                 <li className="nav-item">
//                   <NavLink className="nav-link" to="/catalog">Catalog</NavLink>
//                 </li>
//                 <li className="nav-item">
//                   <NavLink className="nav-link" to ="/contact">Contact us</NavLink>
//                 </li>
//                 <li className="nav-item">
//                   <NavLink className="nav-link" to ="/about">About us</NavLink>
//                 </li>



//               </ul>
//             </div>
//           </div>
//         </nav>




//       </div>
//     </nav>

//   )
// }

// export default Navbar