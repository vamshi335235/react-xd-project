import { useNavigate } from 'react-router-dom'
import Button from '../components/Button.jsx'
import './AuthPages.css'

function Welcome() {
  const navigate = useNavigate()

  return (
    <section className="card card--centered">
      <h2 className="card__title">Welcome to PopX</h2>
      <p className="card__subtitle">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      </p>

      <div className="card__actions card__actions--stacked">
        <Button fullWidth onClick={() => navigate('/signup')}>
          Create Account
        </Button>
        <Button variant="secondary" fullWidth onClick={() => navigate('/login')}>
          Already Registered? Login
        </Button>
      </div>
    </section>
  )
}

export default Welcome
