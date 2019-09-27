import React from "react";
import "./Business.scss";

class Business extends React.Component {
  render() {
    return (
      <div className="Business">
        <div className="image-container">
          <img src={this.props.business.imageSrc} alt="" />
        </div>
        <h2>{this.props.business.name}</h2>
        <div className="Business-information">
          <div className="Business-address">
            <p><span role="img" aria-label="location">📍</span>{this.props.business.address}</p>
            <p>{this.props.business.city}</p>
            <p>
              {this.props.business.state} {this.props.business.zipCode}
            </p>
          </div>
          <div className="Business-reviews">
            <h3 className="category">{this.props.business.category}</h3>
            <p className="rating"><span role="img" aria-label="star">⭐️</span>{this.props.business.rating}</p>
            <p>{this.props.business.reviewCount} reviews</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Business;
