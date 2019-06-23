import React, { Fragment } from 'react';
import Header from 'ui/components/Header';
import Footer from 'ui/components/Footer';
import './index.scss';

class MainLayout extends React.PureComponent {
  componentDidMount() {
    // this.props.getUsers();
  }

  render() {
    return (
      <div className="main-layout">
        <Header />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

export default MainLayout;
