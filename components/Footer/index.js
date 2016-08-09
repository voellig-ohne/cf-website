import React from 'react'
import './style.less'

module.exports = React.createClass({
    render () {

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
                        fuchs@undwald.de
                    </p>
                    <p>
                        St.-Nr.: 16/123/12345<br />
                        Iban: DE34 12094995873 7366473
                    </p>
                    <p>
                        fuchs.undwald.de
                    </p>
                </section>
                <section className="footer-section">
                    <h2>kontakt</h2>
                    <input type="text" placeholder="name"/>
                    <input type="text" placeholder="betreff"/>
                    <input type="text" placeholder="absender"/>
                    <textarea placeholder="nachricht"></textarea>
                    <div className="footer-button_container">
                        <button>senden.</button>
                    </div>
                </section>
            </footer>
        )
    }
})
