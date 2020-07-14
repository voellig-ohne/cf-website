import React from 'react';
import style from './style.module.less';
import { map } from 'lodash';
import classNames from 'classnames';

import forrests from './_forrests.js';
import MiniForrest from '../MiniForrest';

export default ({ className, isSmall }) => {
    const classes = classNames(style.forrests, className);

    return (
        <div className={classes}>
            {map(forrests, (forrest, idx) => {
                return <MiniForrest className={style.forrest} forrest={forrest} isSmall={isSmall} key={idx} />;
            })}
        </div>
    );
};
