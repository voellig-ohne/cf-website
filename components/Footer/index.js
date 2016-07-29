import React from 'react'
import './style.less'

module.exports = React.createClass({
    render () {

        return (
            <footer className="footer"
                id="footer">
                <section className="footer-section"></section>
                <section className="footer-section">
                    <h2>schreib mir.</h2>
                    <input type="text" placeholder="name"/>
                    <input type="text" placeholder="anliegen"/>
                    <input type="text" placeholder="mail"/>
                    <textarea></textarea>
                    <div className="footer-button_container">
                        <button>senden.</button>
                    </div>
                </section>
            </footer>
        )
    }
})
