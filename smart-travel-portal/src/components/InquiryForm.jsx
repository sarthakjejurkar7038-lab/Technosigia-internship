import { useState } from 'react'
import destinations from '../data/destinations.json'
import '../styles/contact.css'

const initialValues = {
  name: '',
  email: '',
  destination: '',
  travelDate: '',
  travelers: '',
  message: '',
}

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

// Today's date as YYYY-MM-DD (used by the date input)
function getToday() {
  const d = new Date()
  const month = String(d.getMonth() + 1).padStart(2, '0')
  const day = String(d.getDate()).padStart(2, '0')
  return `${d.getFullYear()}-${month}-${day}`
}

// Checks every field and returns an object with the error messages
function validate(values) {
  const errors = {}
  const travelers = Number(values.travelers)

  if (!values.name.trim()) {
    errors.name = 'Please enter your full name.'
  } else if (values.name.trim().length < 2) {
    errors.name = 'Name must be at least 2 characters.'
  }

  if (!values.email.trim()) {
    errors.email = 'Please enter your email address.'
  } else if (!emailPattern.test(values.email.trim())) {
    errors.email = 'Please enter a valid email, like name@example.com.'
  }

  if (!values.destination) {
    errors.destination = 'Please select a destination.'
  }

  if (!values.travelDate) {
    errors.travelDate = 'Please choose your travel date.'
  } else if (values.travelDate < getToday()) {
    errors.travelDate = 'Travel date cannot be in the past.'
  }

  if (!values.travelers) {
    errors.travelers = 'Please enter the number of travelers.'
  } else if (!Number.isInteger(travelers) || travelers < 1 || travelers > 20) {
    errors.travelers = 'Enter a whole number from 1 to 20.'
  }

  if (!values.message.trim()) {
    errors.message = 'Please write a short message.'
  } else if (values.message.trim().length < 10) {
    errors.message = 'Message must be at least 10 characters.'
  }

  return errors
}

// Small reusable wrapper: label + input + error message
function FormField({ label, htmlFor, error, children }) {
  return (
    <div className={error ? 'form-group has-error' : 'form-group'}>
      <label htmlFor={htmlFor}>
        {label} <span className="required">*</span>
      </label>
      {children}
      {error && <p className="error-text">{error}</p>}
    </div>
  )
}

function InquiryForm() {
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState({})
  const [triedSubmit, setTriedSubmit] = useState(false)
  const [success, setSuccess] = useState(false)
  const [sentData, setSentData] = useState(null)

  // Runs every time the user types or selects something
  const handleChange = (e) => {
    const { name, value } = e.target
    const newValues = { ...values, [name]: value }
    setValues(newValues)

    // After the first Send click, re-check live so errors disappear when fixed
    if (triedSubmit) {
      setErrors(validate(newValues))
    }
  }

  // Runs when the user clicks "Send Inquiry"
  const handleSubmit = (e) => {
    e.preventDefault()
    setTriedSubmit(true)

    const newErrors = validate(values)
    setErrors(newErrors)

    if (Object.keys(newErrors).length === 0) {
      console.log('Inquiry submitted:', values) // frontend only, no backend
      setSentData(values)
      setSuccess(true)
      setValues(initialValues)
      setTriedSubmit(false)
    }
  }

  const sendAnother = () => {
    setSuccess(false)
    setSentData(null)
    setErrors({})
  }

  // SUCCESS MESSAGE
  if (success) {
    return (
      <div className="success-box">
        <div className="success-icon">&#10003;</div>
        <h2>Thank you, {sentData.name}!</h2>
        <p>
          Your inquiry has been received. We will contact you at{' '}
          <strong>{sentData.email}</strong> soon.
        </p>

        <ul className="success-summary">
          <li><span>Destination</span> {sentData.destination}</li>
          <li><span>Travel date</span> {sentData.travelDate}</li>
          <li><span>Travelers</span> {sentData.travelers}</li>
        </ul>

        <button className="btn btn-primary" onClick={sendAnother}>
          Send Another Inquiry
        </button>
      </div>
    )
  }

  // THE FORM
  return (
    <form className="inquiry-form" onSubmit={handleSubmit} noValidate>
      <h2>Travel Inquiry</h2>
      <p className="form-intro">Fill in the details below. All fields are required.</p>

      <div className="form-row">
        <FormField label="Full Name" htmlFor="name" error={errors.name}>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Your full name"
            value={values.name}
            onChange={handleChange}
          />
        </FormField>

        <FormField label="Email Address" htmlFor="email" error={errors.email}>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="name@example.com"
            value={values.email}
            onChange={handleChange}
          />
        </FormField>
      </div>

      <div className="form-row three">
        <FormField label="Destination" htmlFor="destination" error={errors.destination}>
          <select
            id="destination"
            name="destination"
            value={values.destination}
            onChange={handleChange}
          >
            <option value="">Select destination</option>
            {destinations.map((place) => (
              <option key={place.id} value={place.name}>
                {place.name}
              </option>
            ))}
          </select>
        </FormField>

        <FormField label="Travel Date" htmlFor="travelDate" error={errors.travelDate}>
          <input
            id="travelDate"
            name="travelDate"
            type="date"
            min={getToday()}
            value={values.travelDate}
            onChange={handleChange}
          />
        </FormField>

        <FormField label="Travelers" htmlFor="travelers" error={errors.travelers}>
          <input
            id="travelers"
            name="travelers"
            type="number"
            min="1"
            max="20"
            placeholder="e.g. 2"
            value={values.travelers}
            onChange={handleChange}
          />
        </FormField>
      </div>

      <FormField label="Message" htmlFor="message" error={errors.message}>
        <textarea
          id="message"
          name="message"
          rows="5"
          placeholder="Tell us about your trip plans..."
          value={values.message}
          onChange={handleChange}
        />
      </FormField>

      <button type="submit" className="btn btn-primary submit-btn">
        Send Inquiry
      </button>
    </form>
  )
}

export default InquiryForm