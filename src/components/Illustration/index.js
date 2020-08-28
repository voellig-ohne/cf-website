import React from 'react';
import './style.less';

export default function Illustration({ illustration, className, file, ...other }) {
    if (illustration) {
        const svg = require('!svg-inline-loader!./illustrations/' + illustration + '.svg');
        return <div dangerouslySetInnerHTML={{ __html: svg }} className={className} {...other}></div>;
    }

    if (file) {
        return <img alt={file.title} src={file.file.url} className={className} {...other} />;
    }

    return null;
}
