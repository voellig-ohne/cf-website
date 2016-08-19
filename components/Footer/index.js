import React from 'react'
import './style.less'

export default class Footer extends React.Component {
    render() {
        return (
            <footer className="footer"
                id="footer">
                <section className="footer-section footer-imprint">
                    <p>
                        fuchs+wald<br />
                        <em>digitaldialoge</em>
                    </p>
                    <p>
                        Sonnenallee 206<br />
                        12059 Berlin<br />
                        +49 (0) 162 24 16 317
                    </p>
                    <p>
                        <a href="mailto:christian@undwald.de">
                            christian@undwald.de
                        </a>
                    </p>
                    <p>
                        <a href="http://fuchs.undwald.de">
                            fuchs.undwald.de
                        </a>
                    </p>
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
