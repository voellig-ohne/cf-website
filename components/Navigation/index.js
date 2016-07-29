import React from 'react'
import './style.less'

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
                                <a href="{link.link}"
                                        className="navigation-link">
                                    {link.title}
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        )
    }
})
