import React from 'react';
import Main from './Main';

const intros = {
    main: Main,
};

export default ({ type, claim }) => {
    const IntroComponent = intros[type];
    return (
        <>
            <IntroComponent />
        </>
    );
};
