import { useState, useEffect, useRef } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { FiHome, FiMessageSquare, FiMoreHorizontal, FiX, FiSend, FiMapPin } from 'react-icons/fi'
import './Footer.css'

function Footer() {
  const location = useLocation()
  const navigate = useNavigate()
  const [showMoreMenu, setShowMoreMenu] = useState(false)
  const [showMessages, setShowMessages] = useState(false)
  const [showInfoModal, setShowInfoModal] = useState(false)
  const [showReportModal, setShowReportModal] = useState(false)
  const [showLegalModal, setShowLegalModal] = useState(false)
  const [annotationMode, setAnnotationMode] = useState(false)
  const moreMenuRef = useRef(null)
  const messagesRef = useRef(null)

  // Home icon is active on welcome page and account settings page
  const isHomeActive = location.pathname === '/' || location.pathname === '/account'

  // Close menus when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (moreMenuRef.current && !moreMenuRef.current.contains(event.target)) {
        setShowMoreMenu(false)
      }
      if (messagesRef.current && !messagesRef.current.contains(event.target)) {
        setShowMessages(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const handleMoreClick = (e) => {
    e.stopPropagation()
    setShowMoreMenu(!showMoreMenu)
    setShowMessages(false)
  }

  const handleMessagesClick = (e) => {
    e.stopPropagation()
    navigate('/comments')
    setShowMessages(false)
    setShowMoreMenu(false)
  }

  const handleMenuAction = (action) => {
    setShowMoreMenu(false)
    switch (action) {
      case 'info':
        setShowInfoModal(true)
        break
      case 'report':
        setShowReportModal(true)
        break
      case 'legal':
        setShowLegalModal(true)
        break
      case 'signin':
        navigate('/login')
        break
      default:
        break
    }
  }

  return (
    <>
      <footer className="footer">
        <button
          className={`footer__item ${isHomeActive ? 'footer__item--active' : ''}`}
          type="button"
          onClick={() => {
            navigate('/')
            setShowMoreMenu(false)
            setShowMessages(false)
          }}
        >
          <FiHome className="footer__icon" />
        </button>
        <button
          className="footer__item footer__item--messages"
          type="button"
          onClick={handleMessagesClick}
          ref={messagesRef}
        >
          <FiMessageSquare className="footer__icon" />
          <span className="footer__badge">52</span>
        </button>
        <button
          className="footer__item footer__item--more"
          type="button"
          onClick={handleMoreClick}
          ref={moreMenuRef}
        >
          <FiMoreHorizontal className="footer__icon" />
          {showMoreMenu && (
            <div className="footer__more-menu">
              <button
                className="footer__menu-item"
                type="button"
                onClick={() => handleMenuAction('info')}
              >
                Info
              </button>
              <button
                className="footer__menu-item"
                type="button"
                onClick={() => handleMenuAction('report')}
              >
                Report Abuse
              </button>
              <button
                className="footer__menu-item"
                type="button"
                onClick={() => handleMenuAction('legal')}
              >
                Legal Notices
              </button>
              <button
                className="footer__menu-item"
                type="button"
                onClick={() => handleMenuAction('signin')}
              >
                Sign In
              </button>
            </div>
          )}
        </button>
      </footer>

      {/* Info Modal */}
      {showInfoModal && (
        <div className="footer__modal-overlay" onClick={() => setShowInfoModal(false)}>
          <div className="footer__modal" onClick={(e) => e.stopPropagation()}>
            <button
              className="footer__modal-close"
              type="button"
              onClick={() => setShowInfoModal(false)}
            >
              <FiX />
            </button>
            <h3 className="footer__modal-title">Info</h3>
            <div className="footer__modal-content">
              <p><strong>PopX Mobile App</strong></p>
              <p>React Assignment</p>
              <p style={{ marginTop: '16px', fontSize: '13px', color: '#8c8c8c' }}>
                A pixel-perfect mobile app implementation based on Adobe XD design.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Report Abuse Modal */}
      {showReportModal && (
        <div className="footer__modal-overlay" onClick={() => setShowReportModal(false)}>
          <div className="footer__modal footer__modal--form" onClick={(e) => e.stopPropagation()}>
            <button
              className="footer__modal-close"
              type="button"
              onClick={() => setShowReportModal(false)}
            >
              <FiX />
            </button>
            <h3 className="footer__modal-title">Report Abuse</h3>
            <div className="footer__modal-content">
              <p className="footer__modal-intro">
                If you feel that this Creative Cloud content violates the Adobe Terms of Use, you may
                report this content by filling out this quick form.
              </p>

              <div className="footer__form-field">
                <label className="footer__form-label">
                  Your Email<span className="field__required">*</span>
                </label>
                <input
                  type="email"
                  className="footer__form-input"
                  placeholder="Enter your email"
                />
              </div>

              <div className="footer__form-field">
                <label className="footer__form-label">
                  Your Name<span className="field__required">*</span>
                </label>
                <input
                  type="text"
                  className="footer__form-input"
                  placeholder="Enter your name"
                />
              </div>

              <div className="footer__form-field">
                <label className="footer__form-label">
                  Why are you reporting this content?<span className="field__required">*</span>
                </label>
                <div className="footer__radio-group">
                  <label className="footer__radio">
                    <input type="radio" name="reportReason" value="defamation" />
                    <span className="footer__radio-custom" />
                    <span>Defamation</span>
                  </label>
                  <label className="footer__radio">
                    <input type="radio" name="reportReason" value="trademark" />
                    <span className="footer__radio-custom" />
                    <span>Trademark Infringement</span>
                  </label>
                  <label className="footer__radio">
                    <input type="radio" name="reportReason" value="offensive" />
                    <span className="footer__radio-custom" />
                    <span>Offensive Content</span>
                  </label>
                  <label className="footer__radio">
                    <input type="radio" name="reportReason" value="racist" />
                    <span className="footer__radio-custom" />
                    <span>Racist or Hate Content</span>
                  </label>
                  <label className="footer__radio">
                    <input type="radio" name="reportReason" value="explicit" />
                    <span className="footer__radio-custom" />
                    <span>Sexually Explicit Content</span>
                  </label>
                  <label className="footer__radio">
                    <input type="radio" name="reportReason" value="other" />
                    <span className="footer__radio-custom" />
                    <span>Other</span>
                  </label>
                </div>
              </div>

              <div className="footer__form-field">
                <label className="footer__form-label">
                  Please provide a description of your concern.
                </label>
                <textarea
                  className="footer__form-textarea"
                  placeholder="Describe Concern"
                  rows="4"
                />
              </div>

              <p className="footer__required-text">
                <span className="field__required">*</span>Required
              </p>

              <div className="footer__form-actions">
                <button
                  className="footer__btn-cancel"
                  type="button"
                  onClick={() => setShowReportModal(false)}
                >
                  Cancel
                </button>
                <button
                  className="footer__btn-submit"
                  type="button"
                  onClick={() => {
                    alert('Thank you for reporting. We will review this matter.')
                    setShowReportModal(false)
                  }}
                >
                  Report abuse
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Legal Notices Modal */}
      {showLegalModal && (
        <div className="footer__modal-overlay" onClick={() => setShowLegalModal(false)}>
          <div className="footer__modal" onClick={(e) => e.stopPropagation()}>
            <button
              className="footer__modal-close"
              type="button"
              onClick={() => setShowLegalModal(false)}
            >
              <FiX />
            </button>
            <h3 className="footer__modal-title">Legal Notices</h3>
            <div className="footer__modal-content">
              <h4 className="footer__legal-link">
                <a
                  href="https://www.adobe.com/legal/terms.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                >
                  Terms of Use
                </a>
              </h4>
              <p className="footer__copyright">
                © 2016-2025 Adobe. All rights reserved.
              </p>
              <p className="footer__trademark">
                Adobe, the Adobe logo and Adobe XD are either registered trademarks or trademarks of
                Adobe in the United States and/or other countries. All other trademarks are the
                property of their respective owners.
              </p>
              <p className="footer__third-party">
                Third Party notices, terms and conditions pertaining to third party software can be
                found at{' '}
                <a
                  href="https://www.adobe.com/go/thirdparty"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                >
                  https://www.adobe.com/go/thirdparty
                </a>{' '}
                and are incorporated by reference.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Footer
