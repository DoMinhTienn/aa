import React, { useState, useContext } from "react";
import { Form, Nav, Navbar } from "react-bootstrap";
import "../static/header.css";
import logo from "../static/image/logo.png"
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import { UserContext } from "../App";

function Header() {
  const [kw, setKw] = useState("")
  const [user, dispatch] = useContext(UserContext)

  const nav = useNavigate()

  const search = (event) => {
    event.preventDefault()

    nav(`/?kw=${kw}`)
  }

  const logout = (evt) => {
    evt.preventDefault()
    dispatch({"type": "logout"})
}

let btn = <Link className="link" to="/login"><FontAwesomeIcon icon={faUser} /></Link>
if (user != null)
        btn = <>
            <Link to="/hehe" className="nav-link text-danger">Hi, {user.username}</Link>
            <a href="#" onClick={logout} className="nav-link text-danger">Dang xuat</a>
        </>
  

  return (
    <div className="header">
      <Navbar bg="myBg" expand="sm" sticky="top" collapseOnSelect>
        <Navbar.Brand>
          <img src={logo} width="60px" height="60px" />{' '}
          Du Lịch Việt
        </Navbar.Brand>
        <Navbar.Toggle className="coloring" />
        <Navbar.Collapse>
          <Nav>
            <Navbar><Link className="link" to="/tour">Tour Du Lịch</Link></Navbar>
            <Navbar><Link className="link" to="/news">Tin Tức Du Lịch</Link></Navbar>
            <Navbar><Link className="link" to="/">Khuyến Mãi</Link></Navbar>
            <Navbar><Link className="link" to="/">Liên Hệ</Link></Navbar>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Navbar className="bg2">
        <Navbar className="search">
          <Form className="d-flex" onSubmit={search}>
            <input className="iS" type="text" value={kw} onChange={event => setKw(event.target.value)} placeholder="Tìm kiếm tour..." />
            <button type="submit" className="btnS"><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
          </Form>
        </Navbar>
        <Navbar className="DN">{btn}</Navbar>
      </Navbar>

    </div>

  )
}
export default Header