import React from 'react';
import FoxNetworkHead from '../../FoxNetworkHead';

export default ({ claim }) => (
    <section className="sub_intro">
        <FoxNetworkHead className="sub_intro-forrest" />
        <header className="sub_intro-header">
            <h1 className="sub_intro-heading">{claim}</h1>
        </header>
    </section>
);
