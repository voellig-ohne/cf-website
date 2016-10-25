import React from 'react'

export default class ResponsiveImage extends React.Component {
    render () {
        const { source, location, alt, className } = this.props
        const linkPrefix = (process.env.NODE_ENV === 'production') ? '/' : ''

        const size2 = linkPrefix + require('!file!scale?size=1000!../.././pages/img/' + source + '.jpg')
        const size3 = linkPrefix + require('!file!scale?size=1500!../.././pages/img/' + source + '.jpg')
        const size4 = linkPrefix + require('!file!scale?size=2000!../.././pages/img/' + source + '.jpg')
        const size5 = linkPrefix + require('!file!scale?size=2500!../.././pages/img/' + source + '.jpg')
        const size6 = linkPrefix + require('!file!scale?size=3000!../.././pages/img/' + source + '.jpg')

        const srcSet = size2 + ' 1000w, ' + size3 + ' 1500w, ' + size4 + ' 2000w, ' + size5 + ' 2500w, ' + size6 + ' 3000w'

        return (
            <img src={size2}
                    srcSet={srcSet}
                    alt={alt}
                    className={className}/>
        )
    }
}
