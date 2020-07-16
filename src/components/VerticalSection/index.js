import React from 'react';
import style from './style.module.less';
import { map } from 'lodash';
import Illustration from '../Illustration';
import contentfulRichText from '../contentfulRichText';

export default ({ sections }) => {
    return (
        <div className={style.sections}>
            {map(sections, ({ aboveHeading, body, icon, title }, idx) => {
                return (
                    <div key={idx} className={style.section}>
                        {icon && (
                            <div className={style.illustration_container}>
                                <Illustration illustration={icon.type} className={style.illustration} />
                            </div>
                        )}
                        {aboveHeading ? <p className={style.sub_title}>{aboveHeading}</p> : null}
                        {title && <h2>{title}</h2>}
                        {body && contentfulRichText(body.json)}
                    </div>
                );
            })}
        </div>
    );
};
