import React from 'react';
import './style.less';
import Img from 'gatsby-image';
import Button from '../Button';

export default ({ image, ctaTarget }) => {
    return (
        <section className="hero">
            {image.fluid && <Img fluid={image.fluid} className="hero-image" />}
            <div className="hero-text">
                <div>
                    <Button {...ctaTarget} />
                </div>
            </div>
        </section>
    );
};
