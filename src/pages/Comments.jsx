import { useState } from 'react'
import { BsPinAngleFill } from 'react-icons/bs'
import { FaUser } from 'react-icons/fa'
import GuestModal from '../components/GuestModal'
import './Comments.css'

function Comments() {
    const [comment, setComment] = useState('')
    const [isPinActive, setIsPinActive] = useState(false)
    const [showModal, setShowModal] = useState(false)
    const [comments, setComments] = useState([
        {
            id: 1,
            name: 'Md Akram',
            role: 'Guest',
            time: '10 hours ago',
            avatar: null, // null for default icon
            content: (
                <>
                    <div>Name: Md Akram</div>
                    <div>Email: <a href="mailto:mdakram12022002@gmail.com">mdakram12022002@gmail.com</a></div>
                    <div>Hoisted Project Link: <a href="https://popx-assignment.vercel.app">https://popx-assignment.vercel.app</a></div>
                    <div>Github Repo link: <a href="https://github.com/mdakram2002/popx_assignment">https://github.com/mdakram2002/popx_assignment</a></div>
                    <div>Portfolio: <a href="https://mdakram-portfolio-green.vercel.app">https://mdakram-portfolio-green.vercel.app</a></div>
                </>
            )
        },
        {
            id: 2,
            name: 'Naman Jain',
            role: '',
            time: 'Dec 23',
            avatar: 'color', // 'color' to trigger a colored circle if needed, or url
            content: (
                <>
                    <div>Name: Naman jain</div>
                    <div>Email: <a href="mailto:nj626433@gmail.com">nj626433@gmail.com</a></div>
                    <div>Live Link: <a href="https://authentication-page-main-zeta.vercel.app/">https://authentication-page-main-zeta.vercel.app/</a></div>
                    <div>Github Repo Link: <a href="https://github.com/Namanjain2213/Authentication">https://github.com/Namanjain2213/Authentication</a></div>
                </>
            )
        }
    ])

    const submitComment = (userName) => {
        const newComment = {
            id: Date.now(),
            name: userName || 'Guest User',
            role: 'Guest',
            time: 'Just now',
            avatar: null,
            content: <div>{comment}</div>
        }

        setComments([newComment, ...comments])
        setComment('')
    }

    const handleSubmit = () => {
        if (!comment.trim()) return

        const existingGuest = localStorage.getItem('guestName')
        if (existingGuest) {
            submitComment(existingGuest)
        } else {
            setShowModal(true)
        }
    }

    const handleModalContinue = (name) => {
        setShowModal(false)
        submitComment(name)
    }

    return (
        <>
            <div className="comments-page">
                <div className="comments-input-section">
                    <div className="comments-textarea-wrapper">
                        <textarea
                            className="comments-textarea"
                            placeholder="Make a Comment"
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                        />
                        <BsPinAngleFill
                            className={`comments-pin-icon ${isPinActive ? 'active' : ''}`}
                            size={20}
                            onClick={() => setIsPinActive(!isPinActive)}
                            title="Toggle Annotation"
                        />
                    </div>
                    <div className="comments-textarea-footer">
                        <button className="comments-cancel-btn" onClick={() => setComment('')}>Cancel</button>
                        <button className="comments-submit-btn" onClick={handleSubmit}>Submit</button>
                    </div>
                </div>

              
                <div className="comments-list">
                    {comments.map((item) => (
                        <div key={item.id} className="comment-item">
                            <div className="comment-avatar">
                                {item.avatar === 'color' ? (
                                    <div style={{ width: '100%', height: '100%', borderRadius: '50%', background: '#00C8FF' }}></div>
                                ) : (
                                    <FaUser size={20} />
                                )}
                            </div>
                            <div className="comment-content">
                                <div className="comment-header">
                                    <span className="comment-author">{item.name}</span>
                                    {item.role && <span className="comment-role">{item.role}</span>}
                                    <span className="comment-time">{item.time}</span>
                                </div>
                                <div className="comment-text">{item.content}</div>
                                <button className="comment-reply-btn">Reply</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <GuestModal
                isOpen={showModal}
                onClose={() => setShowModal(false)}
                onContinue={handleModalContinue}
            />
        </>
    )
}

export default Comments
