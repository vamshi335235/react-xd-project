import { useNavigate } from 'react-router-dom'
import Button from '../components/Button.jsx'
import Input from '../components/Input.jsx'
import './AuthPages.css'

function Login() {
  const navigate = useNavigate()

  return (
    <section className="card">
      <h2 className="card__title">Signin to your PopX account</h2>
      <p className="card__subtitle">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      </p>

      <Input label="Email Address" placeholder="Enter email address" />
      <Input label="Password" type="password" placeholder="Enter password" />

      <div className="card__actions">
        <Button variant="secondary" fullWidth onClick={() => navigate('/account')}>
          Login
        </Button>
      </div>
    </section>
  )
}

export default Login
