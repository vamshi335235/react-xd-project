import { useLocation, useNavigate } from 'react-router-dom'
import Footer from './Footer.jsx'
import './MobileLayout.css'

const screensOrder = ['/', '/login', '/account', '/signup']

function MobileLayout({ children }) {
  const location = useLocation()
  const navigate = useNavigate()

  const currentIndex = screensOrder.indexOf(location.pathname)
  const safeIndex = currentIndex === -1 ? 0 : currentIndex

  const goPrev = () => {
    const prevIndex = (safeIndex - 1 + screensOrder.length) % screensOrder.length
    navigate(screensOrder[prevIndex])
  }

  const goNext = () => {
    const nextIndex = (safeIndex + 1) % screensOrder.length
    navigate(screensOrder[nextIndex])
  }

  return (
    <div className="page-bg">
      <button className="arrow arrow--left" type="button" onClick={goPrev}>
        ‹
      </button>
      <div className="mobile-frame">
        <main className="mobile-frame__content">{children}</main>
        <Footer />
      </div>
      <button className="arrow arrow--right" type="button" onClick={goNext}>
        ›
      </button>
    </div>
  )
}

export default MobileLayout