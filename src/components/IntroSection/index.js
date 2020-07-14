import React from 'react';
import FoxNetworkHead from '../FoxNetworkHead';
import Illustration from '../Illustration';
import Forrest from '../Forrest';
import FoxAndYou from '../FoxAndYou';
import MiniForrestGroup from '../MiniForrestGroup';

const intros = {
    ueber: () => <FoxNetworkHead className="sub_intro-forrest" />,
    leistungen: () => <Forrest className="sub_intro-forrest" mode="single" />,
    arbeitsweisen: () => <FoxAndYou className="sub_intro-forrest" />,
    usecases: MiniForrestGroup,
    workshops: () => <Forrest className="sub_intro-forrest" mode="many" density="0" />,
};

export default ({ type, claim }) => {
    const IntroComponent = intros[type];

    if (type === 'main') {
        return (
            <section className="intro">
                <Illustration illustration="fuchs" className="intro-fuchs" />
                <Illustration illustration="wald" className="intro-wald" />
            </section>
        );
    }

    return (
        <section className="sub_intro">
            <div className="sub_intro-forrest">
                <IntroComponent />
            </div>
            <header className="sub_intro-header">
                <h1 className="sub_intro-heading">{claim}</h1>
            </header>
        </section>
    );
};
