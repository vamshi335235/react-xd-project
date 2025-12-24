import { useNavigate } from 'react-router-dom'
import Button from '../components/Button.jsx'
import Input from '../components/Input.jsx'
import './AuthPages.css'

function Signup() {
  const navigate = useNavigate()

  return (
    <section className="card card--form">
      <h2 className="card__title">Create your PopX account</h2>

      <Input label="Full Name" required defaultValue="Marry Doe" />
      <Input label="Phone number" required defaultValue="Marry Doe" />
      <Input label="Email address" required defaultValue="Marry Doe" />
      <Input label="Password" required type="password" defaultValue="Marry Doe" />
      <Input label="Company name" defaultValue="Marry Doe" />

      <fieldset className="field field--inline">
        <legend className="field__label">
          Are you an Agency?<span className="field__required">*</span>
        </legend>
        <label className="radio">
          <input type="radio" name="agency" defaultChecked />
          <span className="radio__custom" />
          <span>Yes</span>
        </label>
        <label className="radio">
          <input type="radio" name="agency" />
          <span className="radio__custom" />
          <span>No</span>
        </label>
      </fieldset>

      <div className="card__actions card__actions--bottom">
        <Button fullWidth onClick={() => navigate('/account')}>
          Create Account
        </Button>
      </div>
    </section>
  )
}

export default Signup
