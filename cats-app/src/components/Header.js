import React from 'react';
import { Link } from "react-router-dom";
import "./Header.css"

function Header() {
  return (
    <div className="main-header">
      <Link to="/cats" data-testid="header-cats" className="btn-header">Lista de Gatos</Link>
      <Link to="/form" data-testid="header-form" className="btn-header">Formulário</Link>
    </div>   
  );
}
  
export default Header;