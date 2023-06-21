// Write your code here
import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {id: 0}

  onRightArrow = () => {
    const {id} = this.state
    if (id < 3) {
      this.setState(prevState => ({
        id: prevState.id + 1,
      }))
    }
  }

  onLeftArrow = () => {
    const {id} = this.state
    if (id > 0) {
      this.setState(prevState => ({
        id: prevState.id - 1,
      }))
    }
  }

  render() {
    const {id} = this.state
    const {reviewsList} = this.props
    const reviewsDetails = reviewsList[id]
    const {imgUrl, username, companyName, description} = reviewsDetails

    return (
      <div className="bg-container">
        <div className="review-container">
          <h1 className="title">Reviews</h1>
          <img src={imgUrl} className="img" alt={username} />
          <div className="arrow-container">
            <button className="button" type="button" data-testid="leftArrow">
              <img
                src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
                alt="left arrow"
                className="arrow"
                onClick={this.onLeftArrow}
              />
            </button>
            <p className="user-name">{username}</p>
            <button className="button" type="button" data-testid="rightArrow">
              <img
                src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
                alt="right arrow"
                className="arrow"
                onClick={this.onRightArrow}
              />
            </button>
          </div>
          <p className="c-name">{companyName}</p>
          <p className="description">{description}</p>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
