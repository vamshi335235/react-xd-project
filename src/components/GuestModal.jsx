import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FiX } from 'react-icons/fi'
import './GuestModal.css'

function GuestModal({ isOpen, onClose, onContinue }) {
    const navigate = useNavigate()
    const [guestName, setGuestName] = useState('')

    if (!isOpen) return null

    const handleContinue = () => {
        if (guestName.trim()) {
            localStorage.setItem('guestName', guestName)
            onContinue(guestName)
        }
    }

    const handleAdobeSignin = () => {
        const adobeLoginUrl = "https://auth.services.adobe.com/en_US/index.html?callback=https%3A%2F%2Fims-na1.adobelogin.com%2Fims%2Fadobeid%2FCometWeb1%2FAdobeID%2Ftoken%3Fredirect_uri%3Dhttps%253A%252F%252Fxd.adobe.com%252Fview%252Fb68eea25-003d-4a5d-8fdd-d463eeb20b32-e3dd%252F%2523old_hash%253D%2526from_ims%253Dtrue%253Fclient_id%253DCometWeb1%2526api%253Dauthorize%2526scope%253DAdobeID%252Copenid%252Ccreative_cloud%252Csao.ccprivate%252Csao.ccpublish%252Cab.manage%252Csao.comet_service%252Cpps.read%26state%3D%257B%2522ac%2522%253A%2522xd.adobe.com%2522%252C%2522context%2522%253A%257B%2522reason%2522%253A%257B%2522PROTOTYPE_DATA_SIGN_IN%2522%253A%257B%2522manifestURL%2522%253A%2522https%253A%252F%252Fcdn-sharing.adobecc.com%252Fcontent%252Fstorage%252Fid%252Furn%253Aaaid%253Asc%253AUS%253Ab68eea25-003d-4a5d-8fdd-d463eeb20b32%253Fcomponent_id%253Dmanifest%2526api_key%253DCometServer1%2526access_token%253D1766599128_urn%25253Aaaid%25253Asc%25253AUS%25253Ab68eea25-003d-4a5d-8fdd-d463eeb20b32%25253Bpublic_54c20c0cd0b87bb9ba457f3e38655c81a524ae09%2522%252C%2522linkTemplate%2522%253A%257B%2522href%2522%253A%2522https%253A%252F%252Fcdn-sharing.adobecc.com%252Fcontent%252Fstorage%252Fid%252Furn%253Aaaid%253Asc%253AUS%253Ab68eea25-003d-4a5d-8fdd-d463eeb20b32%257B%253Brevision%257D%257B%253Fcomponent_id%252Ccomponent_path%257D%2522%252C%2522data%2522%253A%257B%2522api_key%2522%253A%2522CometServer1%2522%252C%2522access_token%2522%253A%25221766599128_urn%253Aaaid%253Asc%253AUS%253Ab68eea25-003d-4a5d-8fdd-d463eeb20b32%253Bpublic_54c20c0cd0b87bb9ba457f3e38655c81a524ae09%2522%257D%257D%252C%2522ownerId%2522%253A%2522C850E0D559C521130A495DDE%2540AdobeID%2522%252C%2522manifest%2522%253A%257B%2522id%2522%253A%2522urn%253Aaaid%253Asc%253AUS%253Ab68eea25-003d-4a5d-8fdd-d463eeb20b32%2522%257D%252C%2522invitationServiceAccessToken%2522%253A%2522%2522%257D%252C%2522REDIRECT_REASON%22%253A%2522COMMENTING%22%257D%257D%252C%2522jslibver%22%253A%2522v2-v0.49.0-12-gfb1792a%22%252C%2522nonce%22%253A%25224014381688176511%22%257D&code_challenge_method=plain&use_ms_for_expiry=true&client_id=CometWeb1&scope=AdobeID%2Copenid%2Ccreative_cloud%2Csao.ccprivate%2Csao.ccpublish%2Cab.manage%2Csao.comet_service%2Cpps.read&state=%7B%22ac%22%3A%22xd.adobe.com%22%2C%22context%22%3A%7B%22reason%22%3A%7B%22PROTOTYPE_DATA_SIGN_IN%22%3A%7B%22manifestURL%22%3A%22https%3A%2F%2Fcdn-sharing.adobecc.com%2Fcontent%2Fstorage%2Fid%2Furn%3Aaaid%3Asc%3AUS%3Ab68eea25-003d-4a5d-8fdd-d463eeb20b32%3Fcomponent_id%3Dmanifest%26api_key%3DCometServer1%26access_token%3D1766599128_urn%253Aaaid%253Asc%253AUS%253Ab68eea25-003d-4a5d-8fdd-d463eeb20b32%253Bpublic_54c20c0cd0b87bb9ba457f3e38655c81a524ae09%22%2C%22linkTemplate%22%3A%7B%22href%22%3A%22https%3A%2F%2Fcdn-sharing.adobecc.com%2Fcontent%2Fstorage%2Fid%2Furn%3Aaaid%3Asc%3AUS%3Ab68eea25-003d-4a5d-8fdd-d463eeb20b32%7B%3Brevision%7D%7B%3Fcomponent_id%2Ccomponent_path%7D%22%2C%22data%22%3A%7B%22api_key%22%3A%22CometServer1%22%2C%22access_token%22%3A%221766599128_urn%3Aaaid%3Asc%3AUS%3Ab68eea25-003d-4a5d-8fdd-d463eeb20b32%3Bpublic_54c20c0cd0b87bb9ba457f3e38655c81a524ae09%22%7D%7D%2C%22ownerId%22%3A%22C850E0D559C521130A495DDE%40AdobeID%22%2C%22manifest%22%3A%7B%22id%22%3A%22urn%3Aaaid%3Asc%3AUS%3Ab68eea25-003d-4a5d-8fdd-d463eeb20b32%22%7D%2C%22invitationServiceAccessToken%22%3A%22%22%7D%2C%22REDIRECT_REASON%22%3A%22COMMENTING%22%7D%7D%2C%22jslibver%22%3A%22v2-v0.49.0-12-gfb1792a%22%2C%22nonce%22%3A%224014381688176511%22%7D&relay=d928cc01-813f-4934-ac19-f6e8e17c78d6&locale=en_US&flow_type=token&dctx_id=v%3A2%2Cs%2Cac88fab0-679d-11f0-ad9b-5ddea42fa5bd&idp_flow_type=login&ab_test=clear-state%2Cgroup-transitions%2Cram3-avoid-race-condition%2Capply-new-params%7Cclear-state%2Cgroup-transitions%2Cram3-avoid-race-condition%2Capply-new-params&s_p=google%2Cfacebook%2Capple%2Cmicrosoft%2Ckakao&response_type=token&code_challenge_method=plain&redirect_uri=https%3A%2F%2Fxd.adobe.com%2Fview%2Fb68eea25-003d-4a5d-8fdd-d463eeb20b32-e3dd%2F%23old_hash%3D%26from_ims%3Dtrue%3Fclient_id%3DCometWeb1%26api%3Dauthorize%26scope%3DAdobeID%2Copenid%2Ccreative_cloud%2Csao.ccprivate%2Csao.ccpublish%2Cab.manage%2Csao.comet_service%2Cpps.read&use_ms_for_expiry=true#/"

        window.location.href = adobeLoginUrl
    }

    return (
        <div className="guest-modal-overlay" onClick={onClose}>
            <div className="guest-modal" onClick={(e) => e.stopPropagation()}>
                <button
                    className="guest-modal-close"
                    type="button"
                    onClick={onClose}
                >
                    <FiX />
                </button>
                <h3 className="guest-modal-title">Make a Comment</h3>

                <button
                    className="guest-modal-signin-btn"
                    type="button"
                    onClick={handleAdobeSignin}
                >
                    Sign in with Adobe ID
                </button>

                <div className="guest-modal-separator">
                    <span>Or</span>
                </div>

                <div className="guest-modal-guest-section">
                    <p className="guest-modal-guest-text">Continue as a guest</p>
                    <input
                        type="text"
                        className="guest-modal-guest-input"
                        placeholder="John Doe, Jane Doe, etc."
                        value={guestName}
                        onChange={(e) => setGuestName(e.target.value)}
                    />
                    <p className="guest-modal-terms">
                        By continuing, you agree to the Adobe{' '}
                        <a
                            href="https://www.adobe.com/legal/terms.html"
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                        >
                            Terms of Use
                        </a>{' '}
                        and{' '}
                        <a
                            href="https://www.adobe.com/privacy/policy.html"
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                        >
                            Privacy Policy
                        </a>
                        .
                    </p>
                    <button
                        className={`guest-modal-continue-btn ${!guestName.trim() ? 'disabled' : ''}`}
                        type="button"
                        disabled={!guestName.trim()}
                        onClick={handleContinue}
                    >
                        Continue
                    </button>
                </div>

                <p className="guest-modal-recaptcha">
                    Protected by reCAPTCHA and subject to the Google{' '}
                    <a
                        href="https://policies.google.com/privacy"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                    >
                        Privacy Policy
                    </a>{' '}
                    and{' '}
                    <a
                        href="https://policies.google.com/terms"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                    >
                        Terms of Service
                    </a>
                    .
                </p>
            </div>
        </div>
    )
}

export default GuestModal
