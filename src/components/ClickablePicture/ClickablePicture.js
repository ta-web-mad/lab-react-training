import React from 'react';
import './ClickablePicture.css';

class ClickablePicture extends React.Component {
  constructor(props) {
    super(props);
    this.img = props.img;
    this.imgClicked = props.imgClicked;
    this.state = {
      clicked: false,
    };
  }

  clickHandler = () => {
    this.setState({
      clicked: !this.state.clicked,
    });
  };

  render() {
    return (
      <img
        className="picture"
        onClick={this.clickHandler}
        src={this.state.clicked ? this.imgClicked : this.img}
        alt="face"
      />
    );
  }
}

export default ClickablePicture;
