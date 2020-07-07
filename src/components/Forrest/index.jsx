import Illustration from '../Illustration';
import React from 'react';
import './style.less';
import { map, find } from 'lodash';
import classNames from 'classNames';

const ELEMENT_SIZE = {
    width: 30,
    height: 28,
};

const MANY_FREQUENCY = 5;

const MODE_SINGLE = 'single';
const MODE_MANY = 'many';

export default class Forrest extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            size: {
                height: 0,
                width: 0,
            },
            foxPositions: [
                {
                    row: 0,
                    column: 0,
                },
            ],
        };

        this.boundResize = this.onResize.bind(this);

        this.density = props.density || 0.8;
    }
    componentDidMount() {
        if (typeof window !== 'undefined') {
            setTimeout(() => {
                this.onResize();
            }, 0);
            window.addEventListener('resize', this.boundResize);
        }

        if (this.props.projection) {
            this.interval = setInterval(() => {
                this.rePositionFox();
            }, 5000);
        }
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.boundResize);
        clearInterval(this.interval);
    }
    onResize() {
        const gridDimentions = this.getGridDimentions(ELEMENT_SIZE);

        const foxPositions =
            this.props.mode === MODE_MANY
                ? [this.generateFoxPositionCenter(gridDimentions)]
                : [this.generateFoxPositionTopHalf(gridDimentions)];

        const grid = this.generateGrid(gridDimentions);

        this.setState({
            gridDimentions,
            grid,
            foxPositions,
        });
    }
    generateGrid(gridDimentions) {
        return Array.apply(null, { length: gridDimentions.height }).map((row, rowIndex) => {
            return Array.apply(null, { length: gridDimentions.width }).map((column, columnIndex) => {
                return {
                    isActive: Math.random() < this.density,
                };
            });
        });
    }
    generateFoxPositionTopHalf(gridDimentions) {
        return {
            row: Math.round((gridDimentions.width - 5) * Math.random() + 2),
            column: Math.round((gridDimentions.height * Math.random()) / 2 + 1),
        };
    }
    generateFoxPosition(gridDimentions) {
        return {
            row: Math.round((gridDimentions.width - 5) * Math.random() + 2),
            column: Math.round(gridDimentions.height * Math.random()),
        };
    }
    generateFoxPositionCenter(gridDimentions) {
        return {
            row: Math.round(gridDimentions.width / 2),
            column: Math.round(gridDimentions.height / 2),
        };
    }
    getGridDimentions(elementSize) {
        const windowSize = {
            height: this.container.offsetHeight,
            width: this.container.offsetWidth,
        };

        return {
            height: windowSize.height / elementSize.height,
            width: windowSize.width / elementSize.width,
        };
    }
    rePositionFox() {
        const foxPositions = this.props.projection
            ? [this.generateFoxPosition(this.state.gridDimentions)]
            : [this.generateFoxPositionTopHalf(this.state.gridDimentions)];
        this.setState({ foxPositions });
    }
    addFox(currentPosition) {
        const foxPositions = this.state.foxPositions;
        foxPositions.push(currentPosition);
        this.setState({ foxPositions });
    }
    onMouseEnter(isFox, currentPosition) {
        if (isFox && this.props.mode === MODE_SINGLE) {
            this.rePositionFox();
        }
        if (this.props.mode === MODE_MANY) {
            this.hoverCount = this.hoverCount ? this.hoverCount + 1 : 1;
            if (this.hoverCount % MANY_FREQUENCY === 1) {
                this.addFox(currentPosition);
            }
        }
    }
    isFox(currentPosition, foxPositions) {
        return !!find(foxPositions, (foxPosition) => {
            return (
                currentPosition.column === foxPosition.column &&
                (currentPosition.row === foxPosition.row || currentPosition.row + 1 === foxPosition.row)
            );
        });
    }
    render() {
        const { className } = this.props;

        return (
            <div className={classNames('forrest-wrapper', className)}>
                <div className="forrest" ref={(c) => (this.container = c)}>
                    {map(this.state.grid, (row, idxRow) => {
                        return (
                            <Row
                                key={idxRow}
                                row={row}
                                idxRow={idxRow}
                                onMouseEnter={this.onMouseEnter.bind(this)}
                                foxPositions={this.state.foxPositions}
                                isFoxFn={this.isFox}
                                rowCount={this.state.grid.length}
                            />
                        );
                    })}
                </div>
            </div>
        );
    }
}

function Row({ row, idxRow, onMouseEnter, foxPositions, isFoxFn, rowCount }) {
    const rowHeight = 100 / rowCount + '%';
    const elementWidth = 100 / row.length + '%';
    return (
        <div className="forrest-row" style={{ height: rowHeight }}>
            {map(row, (element, idxElement) => {
                const currentPosition = { row: idxElement, column: idxRow };

                const isFox = isFoxFn(currentPosition, foxPositions);

                const classes = classNames('forrest-element', {
                    'forrest-element--active': element.isActive,
                    'forrest-element--fox': isFox,
                });

                if (element.isActive || isFox) {
                    return (
                        <Illustration
                            illustration="element"
                            className={classes}
                            style={{ width: elementWidth }}
                            key={idxElement}
                            onMouseEnter={onMouseEnter.bind(null, isFox, currentPosition)}
                        />
                    );
                }

                return (
                    <div
                        className={classes}
                        key={idxElement}
                        style={{ width: elementWidth }}
                        onMouseEnter={onMouseEnter.bind(null, isFox, currentPosition)}
                    />
                );
            })}
        </div>
    );
}
