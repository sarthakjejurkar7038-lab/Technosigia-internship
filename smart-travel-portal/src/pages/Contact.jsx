import PageHeader from '../components/PageHeader'
import InquiryForm from '../components/InquiryForm'
import '../styles/contact.css'

function Contact() {
  return (
    <>
      <PageHeader
        title="Plan Your Trip With Us"
        subtitle="Send us your travel inquiry and our team will get back to you"
      />

      <section className="section">
        <div className="container contact-layout">
          <InquiryForm />

          <aside className="contact-info">
            <h3>Contact Information</h3>
            <ul>
              <li>
                <strong>Email</strong>
                <span>info@wanderlust.com</span>
              </li>
              <li>
                <strong>Phone</strong>
                <span>+91 98765 43210</span>
              </li>
              <li>
                <strong>Address</strong>
                <span>123 Travel Street, India</span>
              </li>
              <li>
                <strong>Office Hours</strong>
                <span>Mon - Sat, 9:00 AM - 6:00 PM</span>
              </li>
            </ul>
          </aside>
        </div>
      </section>
    </>
  )
}

export default Contact