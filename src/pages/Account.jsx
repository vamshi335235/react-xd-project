import './ProfilePage.css'
import profileImg from '../assets/image.png'

function Account() {
  return (
    <section className="profile-card">
      <h2 className="profile-card__title">Account Settings</h2>

      <div className="profile-card__header">
        <div className="profile-card__avatar-wrap">
          <img
            src={profileImg}
            alt="Marry Doe"
            className="profile-card__avatar"
          />
          <span className="profile-card__avatar-badge" />
        </div>
        <div>
          <div className="profile-card__name">Marry Doe</div>
          <div className="profile-card__email">Marry@Gmail.Com</div>
        </div>
      </div>

      <p className="profile-card__bio">
        Lorem ipsum dolor sit amet, consectetur sadipscing elitr, sed diam nonumy eirmod tempor
        invidunt ut labore et dolore magna aliquyam erat, sed diam.
      </p>
    </section>
  )
}

export default Account
