import React from 'react';
import './style.less';
import Img from 'gatsby-image';
import Button from '../Button';

export default ({ image, ctaTarget, claim }) => {
    return (
        <section className="hero">
            {image.fluid && <Img fluid={image.fluid} className="hero-image" />}
            <div className="hero-header">
                {claim && <h1 className="hero-heading">{claim}</h1>}
                <Button className="hero-button" {...ctaTarget} />
            </div>
        </section>
    );
};
