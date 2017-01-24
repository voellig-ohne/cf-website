import Illustration from 'components/Illustration'
import React from 'react'
import style from './style.module.less'
import { map, includes } from 'lodash'
import classNames from 'classNames'

const ANIMAL_COUNT = 16;
const GRAPHICS_COUNT = 12;

const COUNT = 50;
const DELAY = 1000;

export default class FoxNetwork extends React.Component {
    constructor(props) {
        super(props)

        this.leaves = Array.apply(null, {length: ANIMAL_COUNT}).map((animal, index) => {
            return 'tiere_' + index % GRAPHICS_COUNT
        })

        this.state = {
            activeLeaves: [],
            counting: false
        };
    }
    render() {

        const containerClasses = classNames(this.props.className)


        return (
            <div className={containerClasses}
                onClick={this.generate.bind(this)}
                ref={(c) => this.containerEl = c}>
                <div className={style.container}>
                    <div className={style.fox}>
                        <Illustration
                            illustration="fuchs"
                            className={style.fox_illustration} />
                    </div>
                    <div className={style.leaves}>
                        {
                            map(this.leaves, (leave, idx) => {
                                const isActive = includes(this.state.activeLeaves, idx)
                                const classes = classNames(style.leave, {
                                    [style.leave__active]: isActive,
                                    [style.leave__passive]: !isActive && !this.state.counting
                                })
                                return (
                                    <Illustration
                                        key={idx}
                                        illustration={leave}
                                        className={classes} />
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
    componentDidMount() {
        if (typeof window !== 'undefined') {
            setTimeout(() => {
                this.onResize()
            }, 0)

            window.addEventListener('resize', this.onResize.bind(this))
        }
        this.generate()
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.onResize.bind(this))
    }
    onResize() {
        this.setState({
            
        })
    }
    generate() {
        const teamSize = Math.random() < .3 ? 1 : getRandom(ANIMAL_COUNT) + 1;
        this.countDown(COUNT, teamSize)
    }
    countDown(count, teamSize) {
        if (count === 0) {
            this.setState({
                counting: false
            });
            return
        }

        let activeLeaves;

        if (count > teamSize - 1) {
            activeLeaves = [ getRandom(ANIMAL_COUNT) ]
        } else {
            const team = this.state.activeLeaves;
            team.push(getRandom(ANIMAL_COUNT));
            activeLeaves = team
        }

        this.setState({
            activeLeaves,
            counting: true
        });

        setTimeout(() => {
            this.countDown(count - 1, teamSize)
        }, DELAY / count)
    }
}

function getRandom(range) {
    return Math.round(Math.random() * (range - 1));
}