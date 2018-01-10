import React, { Component, Children } from 'react';

class SlideShow extends Component {
  state = {
    total: 0,
    current: 0,
  };

  componentDidMount() {
    const { children } = this.props;
    this.setState({ total: Children.count(children) });
    setInterval(this.showNext, 500);
  }

  showNext = () => {
    const { total, current } = this.state;
    this.setState({
      current: current + 1 === total ? 0 : current + 1,
    });
  }

  render() {
    const { children } = this.props;
    return (
      <div>
        { Children.toArray(children)[this.state.current] }
      </div>
    )
  }
}

export default SlideShow;