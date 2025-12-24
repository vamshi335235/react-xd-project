import '../pages/AuthPages.css'

function Input({ label, required = false, ...inputProps }) {
  return (
    <div className="field">
      {label && (
        <label className="field__label">
          {label}
          {required && <span className="field__required">*</span>}
        </label>
      )}
      <input className="field__input" {...inputProps} />
    </div>
  )
}

export default Input
