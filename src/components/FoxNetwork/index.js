import Illustration from '../Illustration';
import React from 'react';
import style from './style.module.less';
import { map, includes } from 'lodash';
import classNames from 'classNames';

const ANIMAL_COUNT = 16;
const GRAPHICS_COUNT = 15;

const COUNT = 50;
const DELAY = 1500;

export default class FoxNetwork extends React.Component {
    constructor(props) {
        super(props);

        this.leaves = Array.apply(null, { length: ANIMAL_COUNT }).map((animal, index) => {
            return 'blaetter_' + (index % GRAPHICS_COUNT);
        });

        this.state = {
            activeLeaves: [],
            counting: false,
        };
    }
    render() {
        const containerClasses = classNames(this.props.className, style.leaves);

        return (
            <div className={containerClasses} onClick={this.generate.bind(this)}>
                {map(this.leaves, (leave, idx) => {
                    const isActive = includes(this.state.activeLeaves, idx);
                    const classes = classNames(style.leave, {
                        [style.leave__active]: isActive,
                        [style.leave__passive]: !isActive && !this.state.counting,
                    });
                    return <Illustration key={idx} illustration={leave} className={classes} />;
                })}
            </div>
        );
    }
    componentDidMount() {
        this.generate();
    }
    componentWillUnmount() {
        clearTimeout(this.timeout);
    }
    generate() {
        if (!this.state.counting) {
            const teamSize = Math.random() < 0.5 ? 1 : getRandom(ANIMAL_COUNT) + 1;
            this.countDown(COUNT, teamSize);
        }
    }
    countDown(count, teamSize) {
        if (count === 0) {
            this.setState({
                counting: false,
            });
            return;
        }

        let activeLeaves;

        if (count > teamSize - 1) {
            activeLeaves = [getRandom(ANIMAL_COUNT)];
        } else {
            const team = this.state.activeLeaves;
            team.push(getRandom(ANIMAL_COUNT));
            activeLeaves = team;
        }

        this.setState({
            activeLeaves,
            counting: true,
        });

        this.timeout = setTimeout(() => {
            this.countDown(count - 1, teamSize);
        }, DELAY / count);
    }
}

function getRandom(range) {
    return Math.round(Math.random() * (range - 1));
}
