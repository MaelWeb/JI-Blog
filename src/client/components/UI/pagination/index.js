import React from 'react';
import PropTypes from 'prop-types';
import PageView from './page-view';
import BreakView from './break-view';

export default class Pagination extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            pageRangeDisplayed: 3,
            marginPagesDisplayed: 3,
            breakLabel: '...'
        };
    }

    static defaultProps = {
        current: 1,
        count: 1,
        pageSize: 10,
        onChange: () => {}
    };

    static defaultPropTypes = {
        current: PropTypes.number.isRequired,
        count: PropTypes.number.isRequired,
        pageSize: PropTypes.number.isRequired,
        onChange: PropTypes.number.func
    };

    getPageElement(index) {
        const { current, onChange, pageClassName } = this.props;

        return (
            <PageView
                key={index}
                onClick={() => {
                    onChange(index);
                }}
                selected={index === current}
                pageClassName='pagination-li'
                activeClassName='pagination-li-activity'
                href='javascript:void(0);'
                page={index}
            />
        );
    }

    getItems() {
        const { pageRangeDisplayed, marginPagesDisplayed, breakLabel } = this.state;
        const { count, current } = this.props;

        let items = [];
        if (count <= pageRangeDisplayed) {
            let _count = 1;
            while (_count <= count) {
                items.push(this.getPageElement(_count));
                _count++;
            }
        } else {
            let leftSide = pageRangeDisplayed / 2;
            let rightSide = pageRangeDisplayed - leftSide;

            if (current > count - pageRangeDisplayed / 2) {
                rightSide = count - current;
                leftSide = pageRangeDisplayed - rightSide;
            } else if (current < pageRangeDisplayed / 2) {
                leftSide = current;
                rightSide = pageRangeDisplayed - leftSide;
            }

            let index;
            let nextPage;
            let breakView;

            for (index = 1; index <= count; index++) {
                nextPage = index + 1;

                if (nextPage <= marginPagesDisplayed) {
                    items.push(this.getPageElement(index));
                    continue;
                }

                if (nextPage > count - marginPagesDisplayed) {
                    items.push(this.getPageElement(index));
                    continue;
                }

                if (
                    index >= current - leftSide &&
                    index <= current + rightSide
                ) {
                    items.push(this.getPageElement(index));
                    continue;
                }

                if (breakLabel && items[items.length - 1] !== breakView) {
                    breakView = (
                        <BreakView
                            key={index}
                            breakLabel={breakLabel}
                            breakClassName='pagination-break'
                        />
                    );
                    items.push(breakView);
                }
            }
        }

        return items;
    }

    render() {
        const { current, count, pageSize } = this.state;
        return (
            <div className="pagination">
                <ul className="pagination-ul">{this.getItems()}</ul>
            </div>
        );
    }
}
