import React from 'react';
import './style.less';
import Img from 'gatsby-image';
import { Link } from 'gatsby';

export default ({ image, ctaTarget, ctaText }) => {
    return (
        <section className="hero">
            <Img fluid={image.fluid} className="hero-image" />
            <div className="hero-text">
                <div>
                    <Link to={ctaTarget} className="cta">
                        {ctaText}
                    </Link>
                </div>
            </div>
        </section>
    );
};
