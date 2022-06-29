import React from "react";
import Logo from "../../assets/images/logo-DH.png";
import { Link } from "react-router-dom";

function Sidebar() {

	return (

		<ul className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion" id="accordionSidebar">

			<Link className="sidebar-brand d-flex align-items-center justify-content-center" to="/">
				<div className="sidebar-brand-icon">
					<img className="w-100" src={Logo} alt="Digital House" />
				</div>
			</Link>

			<hr className="sidebar-divider my-0" />

			<li className="nav-item active">
				<Link className="nav-link" to="/">
					<i className="fas fa-fw fa-tachometer-alt"></i>
					<span>Dashboard - DH movies</span></Link>
			</li>

			<hr className="sidebar-divider" />

			<div className="sidebar-heading">Actions</div>

			<li className="nav-item">
				<Link className="nav-link collapsed" to="/generos">
					<i className="fas fa-fw fa-folder"></i>
					<span>Generos</span>
				</Link>
			</li>

			<li className="nav-item">
				<Link className="nav-link" to="/listado-de-peliculas">
					<i className="fas fa-fw fa-chart-area"></i>
					<span>Listado de peliculas</span>
				</Link>
			</li>


			<li className="nav-item">
				<Link className="nav-link" to="/ultima-pelicula">
					<i className="fas fa-fw fa-table"></i>
					<span>Ultima pelicula agregada</span>
				</Link>
			</li>


			<hr className="sidebar-divider d-none d-md-block" />
		</ul>
	)

}

export default Sidebar;