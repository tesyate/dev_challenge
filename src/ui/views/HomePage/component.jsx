import React from 'react';
import './index.scss';
import SongItem from "ui/components/SongItem";

class HomePage extends React.PureComponent {
  componentDidMount() {
      this.props.getSongs().then(()=>{this.setState({})});
  }

  state = {
    songs: []
  };

  render() {
      console.log(this.props);
    return (
      <div className="home-page-wrp">
        <div className="container">
          <h1>Home page</h1>
          {this.state.songs.length === 0 ? (<h1>API doesn`t work</h1>) : (
            this.state.songs.map((song, index)=>(
              <div key={index}>
                <SongItem options={song} />
              </div>
            ))
          )}
        </div>
      </div>
    );
  }
}

export default HomePage;
