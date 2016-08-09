import React from 'react'
import './style.less'
import { Link } from 'react-router'

module.exports = React.createClass({
    render () {
        const links = [
            {
                link: '/uber/',
                title: 'über'
            },{
                link: '/leistungen/',
                title: 'leistungen'
            },{
                link: '/arbeitsweise/',
                title: 'arbeitsweise'
            },{
                link: '/usecases/',
                title: 'use cases'
            },{
                link: '/kontakt/',
                title: 'kontakt'
            }
        ]

        return (
            <nav className="navigation">
                <ul className="navigation-list">
                    {links.map((link) => {
                        return (
                            <li className="navigation-item"
                                    key={link.link}>
                                <Link to={link.link}
                                        className="navigation-link">
                                    {link.title}
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        )
    }
})
