import React from 'react';
import Forrest from '../Forrest';
import MiniForrestGroup from '../MiniForrestGroup';

const illustrations = {
    leistungen: () => <Forrest mode="single" className="section_content-graphic-image" />,
    workshops: () => <Forrest mode="many" density="0" className="section_content-graphic-image" />,
    usecases: () => <MiniForrestGroup isSmall={true} className="section_content-graphic-image" />,
};

export default ({ illustration, children, title }) => {
    const IllustrationComponent = illustrations[illustration];

    return (
        <section className="section_content">
            <div className="section_content-main">
                <h1>{title}</h1>
                {children}
            </div>
            <div className="section_content-secondary">
                <div className="section_content-graphic">
                    <IllustrationComponent />
                </div>
            </div>
        </section>
    );
};
