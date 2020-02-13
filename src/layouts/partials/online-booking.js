import React, {Component} from 'react';

class OnlineBooking extends Component {

  render() {
    return (
      <div
        className="content-section online-book-section"
        style={{backgroundImage: 'url(/images/img38.jpg)'}}
      >
        <div className="container">
          <div className="online-box">
            <div className="online-box-heading">
              <h2>Book Online - It’s easy</h2>
            </div>
            <p>We’ve made it super easy to schedule your next appointment with our online booking
              system.</p>
            <p>Just pick a location above and click the "Book Online Now" button.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default OnlineBooking;
