import React from 'react';
import './index.scss';

class Donate extends React.PureComponent {

  componentDidMount() {
    const collectedNow = localStorage.getItem('collected');
    if (collectedNow) {
      this.setState({ collected: collectedNow })
    }
  }

  state = {
    collected: 0,
    paid: 0
  };

  handleChangePaid = ({ currentTarget }) => {
    this.setState({ paid: currentTarget.value })
  };

  handlePay = () => {
    const willSum = parseInt(this.state.collected) + parseInt(this.state.paid);
    localStorage.setItem('collected', willSum);
    this.setState({ collected: willSum });
    console.log('payd')
  };

  render() {
    const {handlePay, handleChangePaid } = this;

    return (
      <div className={'donate_page'}>
        <h1>Donate</h1>
        <div className={'donate_page-calc'}>
          <div className={'donate_page-sum'}>
            <p>{this.state.collected}</p>
            <input type={'text'} onChange={handleChangePaid} />
            <button onClick={handlePay}>Pay</button>
          </div>
        </div>
      </div>
    )
  }
}

export { Donate };
