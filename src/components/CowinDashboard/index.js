/* eslint-disable camelcase */
import './index.css'

import {Component} from 'react'
import Loader from 'react-loader-spinner'
import VaccinationByAge from '../VaccinationByAge'
import VaccinationByGender from '../VaccinationByGender'
import VaccinationCoverage from '../VaccinationCoverage'

const apiStatuses = {
  initial: 'initial',
  loading: 'loading',
  success: 'success',
  error: 'error',
}

class CowinDashboard extends Component {
  state = {apiStatus: apiStatuses.loading, vaccinationsDetails: {}}

  componentDidMount() {
    console.log(2)
    this.getVaccinesDetails()
  }

  getVaccinesDetails = async () => {
    console.log(3)
    const covidVaccinationDataApiUrl =
      'https://apis.ccbp.in/covid-vaccination-data'
    const response = await fetch(covidVaccinationDataApiUrl)
    if (response.ok === true) {
      const data = await response.json()
      this.setState({apiStatus: apiStatuses.success, vaccinationsDetails: data})
    } else {
      this.setState({apiStatus: apiStatuses.error})
    }
  }

  renderSuccess = () => {
    const {vaccinationsDetails} = this.state
    const {
      last_7_days_vaccination,
      vaccination_by_age,
      vaccination_by_gender,
    } = vaccinationsDetails

    return (
      <>
        <VaccinationCoverage vaccinationDetails={last_7_days_vaccination} />
        <VaccinationByGender vaccinationDetails={vaccination_by_gender} />
        <VaccinationByAge vaccinationDetails={vaccination_by_age} />
      </>
    )
  }

  renderLoading = () => (
    <div data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height={80} width={80} />
    </div>
  )

  renderError = () => (
    <div data-testid="error">
      <img
        src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png"
        alt="failure view"
        className="failure-img"
      />
      <h1 className="failure-title">Something went wrong</h1>
    </div>
  )

  renderResponse = () => {
    const {apiStatus} = this.state
    console.log(apiStatus)
    switch (apiStatus) {
      case apiStatuses.success:
        return this.renderSuccess()
      case apiStatuses.loading:
        return this.renderLoading()
      case apiStatuses.error:
        return this.renderError()
      default:
        return null
    }
  }

  render() {
    console.log(1)
    return (
      <div className="page-container">
        <div className="app-container">
          <div className="logo-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/cowin-logo.png"
              alt="website logo"
              className="logo-img"
            />
            <h1 className="logo-name">Co-WIN</h1>
          </div>
          <h1 className="app-title">CoWIN Vaccination in India</h1>
          <div className="all-details-container">{this.renderResponse()}</div>
        </div>
      </div>
    )
  }
}

export default CowinDashboard
