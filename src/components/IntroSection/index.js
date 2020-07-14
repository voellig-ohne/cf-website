import React from 'react';
import Main from './Main';
import Ueber from './Ueber';

const intros = {
    main: Main,
    ueber: Ueber,
    leistungen: Main,
    arbeitsweisen: Main,
    usecases: Main,
    workshops: Main,
};

export default ({ type, claim }) => {
    const IntroComponent = intros[type];
    return (
        <>
            <IntroComponent claim={claim} />
        </>
    );
};
