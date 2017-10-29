import React from 'react';
import PropTypes from 'prop-types';
import classNames from '../../utils/classnames';

/**
 *  Icons
 *
 */
class Icon extends React.Component {
    static propTypes = {
        /**
         * types of [weui icons](https://github.com/weui/weui/wiki/Icon)
         *
         */
        value: PropTypes.string,
        /**
         * size of icon, options: small/large
         *
         */
        size: PropTypes.string
    };

    static defaultProps = {
        value: 'success',
        size: 'small'
    };

    render() {
        const {value, size, className, primary, ...others} = this.props;

        const cls = classNames({
            ['icon-' + value]: value !== 'loading',
            'icon-smal': size === 'large' && !primary,
            'icon-large': size === 'large' && primary,
            'icon-spin': value === 'loading',
            [className]: className
        });

        return (
            <i {...others} className={cls}/>
        );
    }
}

export default Icon;