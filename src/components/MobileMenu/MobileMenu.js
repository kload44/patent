import React, { Fragment, useState } from 'react';
import List from "@mui/material/List";
import ListItem from "@mui/material/List";
import Collapse from "@mui/material/Collapse";
import { Link } from "react-router-dom";
import './style.css';

const menus = [
    {
        id: 1,
        title: 'Home',
        link: '/home',
        submenu: [
            {
                id: 11,
                title: 'Home style 1',
                link: '/home'
            },
            {
                id: 12,
                title: 'Home style 2',
                link: '/home-2'
            },
            {
                id: 13,
                title: 'Home style 3',
                link: '/home-3'
            }
        ]
    },

    {
        id: 3,
        title: 'Pages',
        link: '/',
        submenu: [
            {
                id: 31,
                title: 'About Company',
                link: '/about'
            },
            {
                id: 3222,
                title: 'About Me',
                link: '/about-me'
            },
            {
                id: 322,
                title: 'Testimonials',
                link: '/testimonials'
            },
            {
                id: 33,
                title: 'Testimonials Style 2',
                link: '/testimonials-s2'
            },
            {
                id: 34,
                title: 'Team',
                link: '/team'
            },
            {
                id: 3454,
                title: 'Team Single',
                link: '/attorneys-single/Michel-Troat'
            },
            {
                id: 35,
                title: 'FAQ',
                link: '/faq'
            },
            {
                id: 36,
                title: '404',
                link: '/404'
            },
            {
                id: 36,
                title: 'Contact',
                link: '/contact'
            },
        ]
    },
    {
        id: 4,
        title: 'Shop',
        link: '/shop',
        submenu: [
            {
                id: 41,
                title: 'Shop',
                link: '/shop',
            },
            {
                id: 42,
                title: 'Shop Single',
                link: '/product-single/Ninja-Hoodi'
            },
            {
                id: 43,
                title: 'Cart',
                link: '/cart'
            },
            {
                id: 44,
                title: 'Checkout',
                link: '/checkout'
            },
        ]
    },

    {
        id: 6,
        title: 'Services',
        link: '/services',
        submenu: [
            {
                id: 61,
                title: 'Services',
                link: '/services',
            },
            {
                id: 62,
                title: 'Service Style 2',
                link: '/services-s2'
            },
            {
                id: 63,
                title: 'Business Law',
                link: '/practice-single/Business-Law'
            },
            {
                id: 64,
                title: 'Family Law',
                link: '/practice-single/Family-Law'
            },
            {
                id: 64,
                title: 'Real State Law',
                link: '/practice-single/Real-Estate-Law'
            },
            {
                id: 64,
                title: 'Education Law',
                link: '/practice-single/Education-Law'
            },
            {
                id: 64,
                title: 'Criminal Law',
                link: '/practice-single/Criminal-Law'
            },
        ]
    },
    {
        id: 7,
        title: 'Projects',
        link: '/case-studies',
        submenu: [
            {
                id: 71,
                title: 'Case Studies',
                link: '/case-studies'
            },
            {
                id: 72,
                title: 'Case Studies Style 2',
                link: '/case-studies-s2'
            },
            {
                id: 74,
                title: 'Case Studies Single',
                link: '/case-single/Real-Estate'
            },
        ]
    },

    {
        id: 5,
        title: 'Blog',
        link: '/blog',
        submenu: [
            {
                id: 51,
                title: 'Blog',
                link: '/blog'
            },
            {
                id: 52,
                title: 'Blog Left sidebar',
                link: '/blog-left-sidebar'
            },
            {
                id: 53,
                title: 'Blog full width',
                link: '/blog-fullwidth'
            },
            {
                id: 54,
                title: 'Blog single',
                link: '/blog-single/Provide-insight-into-how-canna-businesspeople-can-use'
            },
            {
                id: 55,
                title: 'Blog single Left sidebar',
                link: '/blog-single-left-sidebar/Provide-insight-into-how-canna-businesspeople-can-use'
            },
            {
                id: 56,
                title: 'Blog single full width',
                link: '/blog-single-fullwidth/Provide-insight-into-how-canna-businesspeople-can-use'
            },
        ]
    },
    {
        id: 88,
        title: 'Contact',
        link: '/contact',
    }


]

const MobileMenu = () => {

    const [openId, setOpenId] = useState(0);
    const [menuActive, setMenuState] = useState(false);

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <div>
            <div className={`mobileMenu ${menuActive ? "show" : ""}`}>
                <div className="menu-close">
                    <div className="clox" onClick={() => setMenuState(!menuActive)}><i className="ti-close"></i></div>
                </div>

                <ul className="responsivemenu">
                    {menus.map((item, mn) => {
                        return (
                            <ListItem className={item.id === openId ? 'active' : null} key={mn}>
                                {item.submenu ?
                                    <Fragment>
                                        <p onClick={() => setOpenId(item.id === openId ? 0 : item.id)}>{item.title}
                                            <i className={item.id === openId ? 'fa fa-angle-up' : 'fa fa-angle-down'}></i>
                                        </p>
                                        <Collapse in={item.id === openId} timeout="auto" unmountOnExit>
                                            <List className="subMenu">
                                                <Fragment>
                                                    {item.submenu.map((submenu, i) => {
                                                        return (
                                                            <ListItem key={i}>
                                                                <Link onClick={ClickHandler} className="active"
                                                                    to={submenu.link}>{submenu.title}</Link>
                                                            </ListItem>
                                                        )
                                                    })}
                                                </Fragment>
                                            </List>
                                        </Collapse>
                                    </Fragment>
                                    : <Link className="active"
                                        to={item.link}>{item.title}</Link>
                                }
                            </ListItem>
                        )
                    })}
                </ul>

            </div>

            <div className="showmenu" onClick={() => setMenuState(!menuActive)}>
                <button type="button" className="navbar-toggler open-btn">
                    <span className="icon-bar first-angle"></span>
                    <span className="icon-bar middle-angle"></span>
                    <span className="icon-bar last-angle"></span>
                </button>
            </div>
        </div>
    )
}

export default MobileMenu;