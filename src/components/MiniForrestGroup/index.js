import Illustration from '../Illustration';
import React from 'react';
import style from './style.module.less';
import { map } from 'lodash';
import classNames from 'classNames';

import forrests from './_forrests.js';
import MiniForrest from '../MiniForrest';

export default class miniForrest extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { className, forrest, background, isSmall } = this.props;
        const classes = classNames(style.forrests, className);

        return (
            <div className={classes}>
                {map(forrests, (forrest, idx) => {
                    return <MiniForrest className={style.forrest} forrest={forrest} isSmall={isSmall} key={idx} />;
                })}
            </div>
        );
    }
}
