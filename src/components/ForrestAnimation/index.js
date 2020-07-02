import React from 'react';
import './style.less';
import Row from './row.js';

const LOGO = `
>> >> >
> >>> >  >>
>>  >>>> >> >
>> >>>>>
> >> >>> >>>
 > >>>>>
 >> >>>
>>> > >>>
> >>>
>>>>>
>>>
`;

module.exports = React.createClass({
    componentDidMount() {
        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', () => {
                this.renderLogo();
            });
        }
    },
    getInitialState: function () {
        return {
            logoString: [],
        };
    },
    renderLogo() {
        const scrollPercentage = window.scrollY / (document.body.scrollHeight - window.innerHeight);

        const logoString = LOGO.split('\n').map((row) => {
            return row.substring(0, Math.round(row.length * scrollPercentage));
        });

        this.setState({
            logoString: logoString,
        });
    },
    render() {
        return (
            <div className={this.props.className + ' forrest'}>
                <Row rows={this.state.logoString} />
            </div>
        );
    },
});
