import React from 'react'

export default class ResponsiveImage extends React.Component {
    render () {
        const { source, alt, className, sizes } = this.props

        const location = '/img/'

        if (process.env.NODE_ENV !== 'production') {
            const path = location + source + '.jpg'
            return (
                <img key={source} src={path} className={className} alt={alt} />
            )
        } else {
            const path = location.substr(1)

            const size2 = require('!file!scale?size=500!../.././pages/' + path + source + '.jpg')
            const size3 = require('!file!scale?size=1000!../.././pages/' + path + source + '.jpg')
            const size4 = require('!file!scale?size=2000!../.././pages/' + path + source + '.jpg')
            const size6 = require('!file!scale?size=3000!../.././pages/' + path + source + '.jpg')

            const srcSet = size2 + ' 500w, ' + size3 + ' 1000w, ' + size4 + ' 2000w, ' + size6 + ' 3000w'

            return (
                <img key={source}
                        src={size2}
                        srcSet={srcSet}
                        alt={alt}
                        sizes={sizes}
                        className={className}/>
            )
        }
    }
}
