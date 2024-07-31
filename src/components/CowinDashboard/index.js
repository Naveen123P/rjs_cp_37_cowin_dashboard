// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class CowinDashboard extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    data: {},
  }

  componentDidMount() {
    this.getDetails()
  }

  getDetails = () => {
    this.setState({apiStatus: apiStatusConstants.failure})
  }

  renderLoaderView = () => (
    <div data-testid="loader" className="loader-container">
      <Loader type="ThreeDots" color="#ffffff" height={80} width={80} />
    </div>
  )

  renderFailureView = () => (
    <div className="failure-view-container">
      <div className="failure-img-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png"
          alt="failure view"
          className="failure-img"
        />
      </div>
      <h1 className="failure-heading">Something went wrong</h1>
    </div>
  )

  renderAllViews = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.inProgress:
        return this.renderLoaderView()
      case apiStatusConstants.success:
        return this.renderSuccessView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      default:
        return null
    }
  }

  render() {
    const {apiStatus, data} = this.state
    console.log(apiStatus, data)
    return (
      <div className="dashboard-container">
        <div className="dashboard-header-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/cowin-logo.png"
            alt="website logo"
            className="dashboard-logo"
          />
          <p className="dashboard-title">Co-WIN</p>
        </div>
        <h1 className="dashboard-heading">CoWIN Vaccination in India</h1>
        {this.renderAllViews()}
      </div>
    )
  }
}

export default CowinDashboard
