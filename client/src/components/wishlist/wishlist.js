import React, { Component } from "react";
import { Favourite } from "./favourite";
import { WantToSee } from "./wantToSee";
import { mapStateToProps, mapDispatchToProps } from "../../store";
import { connect } from "react-redux";

class Wishlist extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log(this.props);
    return (
      <div className="wishlist-container">
        <Favourite
          removeFromFav={this.props.removeFromFav}
        />
        <WantToSee
          removeFromaddToWantToSee={this.props.removeFromaddToWantToSee}
        />
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Wishlist);
