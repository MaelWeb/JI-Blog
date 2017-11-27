import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

/**
 *  Icons
 *
 */
class Icon extends React.Component {
    static propTypes = {

        type: PropTypes.string,
        size: PropTypes.string
    };

    static defaultProps = {
        type: 'success',
        size: 'small'
    };

    render() {
        const {type, size, className, ...others} = this.props;

        const cls = classNames('iconfont', {
            ['icon-' + type]: type !== 'loading',
            'icon-small': size === 'small',
            'icon-large': size === 'large',
            'icon-spin': type === 'loading',
            [className]: className
        });

        return (
            <i {...others} className={cls}/>
        );
    }
}

export default Icon;