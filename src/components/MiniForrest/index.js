import Illustration from '../Illustration';
import React from 'react';
import style from './style.module.less';
import { map, find } from 'lodash';
import classNames from 'classnames';

const TREE = 't';
const FOX = 'f';
const EMPTY = 'e';

export default class miniForrest extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { className, forrest, background, isSmall } = this.props;
        const classes = classNames(style.forrest, className, { [style['forrest-small']]: isSmall });

        return (
            <div className={classes}>
                {map(forrest, (row, rowIdx) => {
                    return (
                        <div className={style.row} key={rowIdx}>
                            {map(row, (cell, cellIdx) => {
                                const classes = classNames(style.element, {
                                    [style.tree]: cell === TREE,
                                    [style.fox]: cell === FOX,
                                    [style['element-small']]: isSmall,
                                });

                                if (cell === EMPTY) {
                                    return <div className={classes} key={cellIdx} />;
                                }

                                return <Illustration illustration="element" className={classes} key={cellIdx} />;
                            })}
                        </div>
                    );
                })}
            </div>
        );
    }
}
