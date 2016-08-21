import React from 'react'
import { map } from 'lodash'
import './style.less'
import { Link } from 'react-router'

export default class Footer extends React.Component {
    render() {
        const infoList = [
            {
                title: 'phone',
                value: '+49 (0) 162 24 16 317'
            }, {
                title: 'mail',
                value: (
                    <a href="mailto:fuchs@undwald.de">
                        fuchs@undwald.de
                    </a>
                )
            }, {
                title: 'twitter',
                value: (
                    <a href="https://twitter.com/FuchsUndWald">
                        @FuchsUndWald
                    </a>
                )
            }, {
                title: 'xing',
                value: (
                    <a href="http://xing.to/christianfuchs">
                        christianfuchs
                    </a>
                )
            }, {
                title: 'USt-ID',
                value: 'DE296427768'
            }, {
                title: 'web',
                value: (
                    <a href="http://fuchs.undwald.de">
                        fuchs.undwald.de
                    </a>
                )
            },
        ]

        return (
            <footer className="footer"
                id="footer">
                <section className="footer-section footer-imprint">
                    <p>
                        fuchs+wald<br />
                        <em>Digitaldialoge</em>
                    </p>
                    <p>
                        Sonnenallee 206<br />
                        12059 Berlin
                    </p>

                    <dl>
                    {
                        map(infoList, (info, idx) => {
                            return (
                                <div key={ idx }>
                                    <dt>{ info.title }</dt>
                                    <dd>{ info.value }</dd>
                                </div>
                            )
                        })
                    }
                    </dl>
                    <Link className="footer-link_impressum" to="/haftungsausschluss/">
                        Impressum
                    </Link>

                </section>
                <section className="footer-section">
                    <h2>kontakt</h2>
                    <a href="mailto:kontakt@undwald.de" className="cta">
                        Projektanfrage senden
                    </a>
                </section>
            </footer>
        )
    }
}
