import React from 'react';
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <Link to="/cats" className="btn">Lista de Gatos</Link>
      <Link to="/form" className="btn">Formulário</Link>
    </div>   
  );
}
  
export default Header;