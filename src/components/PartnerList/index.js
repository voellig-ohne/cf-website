import React from 'react';
import style from './style.module.less';
import { map } from 'lodash';
import contentfulRichText from '../contentfulRichText';
import Img from 'gatsby-image';

export default function PartnerList({ partners }) {
    return (
        <ul className={style.partners}>
            {map(partners, ({ body, image, name }, idx) => {
                return (
                    <li key={idx} className={style.partner}>
                        <div className={style.image_container_container}>
                            <div className={style.image_container}>
                                {image ? <Img className={style.image} fluid={image.fluid} /> : null}
                            </div>
                        </div>

                        <h2 className={style.heading}>{name}</h2>

                        <div className={style.text}>{contentfulRichText(body.json)}</div>
                    </li>
                );
            })}
        </ul>
    );
}
