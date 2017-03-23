import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

const propTypes = {
  hasMore: PropTypes.bool,
  loadingMore: PropTypes.bool,
  loader: PropTypes.node,
  showLoader: PropTypes.bool,
  loadMore: PropTypes.func.isRequired,
  items: PropTypes.oneOfType([
    PropTypes.array
  ]),
  children: PropTypes.array
};

class InfiniteScroll extends Component {

  constructor(props) {
    super(props);
    this.debounce = this.debounce.bind(this);
    this.onScroll = this.onScroll.bind(this);
    this.debouncedOnScroll = this.debounce(this.onScroll, 100);
  }

  componentDidMount() {

    this.attachScrollListener();
  }

  componentDidUpdate() {
    this.attachScrollListener();
  }

  componentWillUnmount() {
    this.detachScrollListener();
  }

  attachScrollListener() {
    if (!this.props.hasMore || this.props.loadingMore) return;
    window.addEventListener('scroll', this.onScroll, true);
  }

  detachScrollListener() {
    window.removeEventListener('scroll', this.onScroll, true);
  }

  onScroll() {
    const { hasMore, loadMore, loadingMore } = this.props;
    const el = ReactDOM.findDOMNode(this),
          screenHeight = window.innerHeight;
    if (hasMore && !loadingMore && el.getBoundingClientRect().bottom < screenHeight + 200) {
       loadMore();
    }
  }

  debounce(fn, delay) {
    let timeout;
    return () => {
      clearTimeout(timeout);
      timeout = setTimeout(fn, delay);
    }
  }

  renderLoader() {
    window.scrollTo(window.scrollX, document.body.scrollHeight - window.innerHeight);
    return this.props.loader;
  }
  render() {
    const { loadingMore, hasMore, showLoader, renderList } = this.props;

    return (
      <div>
        <div className="items">
          {renderList()}
        </div>
        {loadingMore && showLoader && hasMore && this.renderLoader()}
      </div>
    )
  }
}

InfiniteScroll.propTypes = propTypes;

InfiniteScroll.defaultProps = {
  hasMore: true,
  loadingMore: false,
  loader: <div style = {{textAlign: 'center'}}>Loading...</div>,
  showLoader: true,
  children: [],
  items: []
};

export default InfiniteScroll;
