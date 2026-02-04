import { useStore } from '../../store/useStore';
import { Mail, Phone, Calendar, Trash2, Check, ExternalLink } from 'lucide-react';

export default function InquiryList() {
    const { inquiries, deleteInquiry, markInquiryRead } = useStore();

    if (!inquiries.length) {
        return (
            <div className="admin-section">
                <h2>Inquiries</h2>
                <div className="empty-state">
                    <Mail size={40} color="#333" />
                    <p>No inquiries yet.</p>
                </div>
                <style jsx="true">{`
                .admin-section { padding: 20px; color: #111; }
                .empty-state {
                    background: #ffffff;
                    padding: 40px;
                    border-radius: 8px;
                    text-align: center;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 15px;
                    color: #666;
                    border: 1px solid #e5e5e5;
                }
              `}</style>
            </div>
        );
    }

    return (
        <div className="admin-section">
            <h2>Inquiries <span className="count-badge">{inquiries.length}</span></h2>

            <div className="inquiry-grid">
                {inquiries.map((inq) => (
                    <div key={inq.id} className={`inquiry-card ${inq.read ? 'read' : 'unread'}`}>
                        <div className="card-header">
                            <span className="name">{inq.firstName} {inq.lastName}</span>
                            <span className="date">
                                <Calendar size={12} style={{ marginRight: 5 }} />
                                {new Date(inq.date).toLocaleDateString()}
                            </span>
                        </div>

                        <div className="card-details">
                            <div className="detail-row">
                                <Mail size={14} color="#888" />
                                <a href={`mailto:${inq.email}`}>{inq.email}</a>
                            </div>
                            <div className="detail-row">
                                <Phone size={14} color="#888" />
                                <a href={`tel:${inq.phone}`}>{inq.phone}</a>
                            </div>
                        </div>

                        {/* Project Details Grid */}
                        <div className="project-details">
                            <div className="detail-item">
                                <span className="label">Task</span>
                                <span className="value">{inq.task || '-'}</span>
                            </div>
                            <div className="detail-item">
                                <span className="label">Budget</span>
                                <span className="value highlight">{inq.budget || '-'}</span>
                            </div>
                            <div className="detail-item">
                                <span className="label">Deadline</span>
                                <span className="value">{inq.deadline || '-'}</span>
                            </div>
                            <div className="detail-item">
                                <span className="label">References</span>
                                <span className="value">{inq.references || '-'}</span>
                            </div>
                        </div>

                        {inq.comment && !inq.task && (
                            <div className="comment-box">
                                <strong>Message:</strong>
                                <p>{inq.comment}</p>
                            </div>
                        )}

                        <div className="card-actions">
                            {!inq.read && (
                                <button onClick={() => markInquiryRead(inq.id)} className="btn-action check" title="Mark Read">
                                    <Check size={16} />
                                </button>
                            )}
                            <a href={`mailto:${inq.email}?subject=Re: Project Inquiry`} className="btn-action reply" title="Reply">
                                <ExternalLink size={16} />
                            </a>
                            <button onClick={() => deleteInquiry(inq.id)} className="btn-action delete" title="Delete">
                                <Trash2 size={16} />
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            <style jsx="true">{`
            .admin-section { padding: 20px; color: #111; }
            .count-badge { background: #eee; color: black; padding: 2px 8px; border-radius: 10px; font-size: 0.8rem; margin-left: 10px; font-weight: bold; }
            
            .inquiry-grid {
                display: grid;
                grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
                gap: 20px;
                margin-top: 20px;
            }

            .inquiry-card {
                background: #ffffff;
                border: 1px solid #e5e5e5;
                border-radius: 8px;
                padding: 20px;
                display: flex;
                flex-direction: column;
                gap: 15px;
                position: relative;
                box-shadow: 0 2px 5px rgba(0,0,0,0.02);
            }

            .inquiry-card.unread {
                border-left: 3px solid #000;
                background: #fdfdfd;
            }

            .card-header {
                display: flex;
                justify-content: space-between;
                align-items: center;
            }

            .name { font-weight: 700; font-size: 1.1rem; color: #000; }
            .date { font-size: 0.8rem; color: #666; display: flex; align-items: center; }

            .detail-row {
                display: flex;
                align-items: center;
                gap: 10px;
                font-size: 0.9rem;
                margin-bottom: 5px;
            }
            .detail-row a { color: #555; text-decoration: none; }
            .detail-row a:hover { color: #000; }

            .comment-box {
                margin: 10px 0;
                padding: 10px;
                background: #f9f9f9;
                border-radius: 4px;
                font-size: 0.9rem;
                border: 1px solid #eee;
            }
            .comment-box strong { display: block; margin-bottom: 5px; color: #444; font-size: 0.8rem; }
            .comment-box p { color: #222; white-space: pre-wrap; margin: 0; }

            .project-details {
                background: #fdfdfd;
                border: 1px solid #f0f0f0;
                border-radius: 6px;
                padding: 15px;
                display: grid;
                gap: 12px;
                margin-top: 10px;
            }

            .detail-item {
                display: flex;
                flex-direction: column;
                gap: 4px;
            }

            .detail-item .label {
                font-size: 0.75rem;
                text-transform: uppercase;
                letter-spacing: 0.5px;
                color: #888;
                font-weight: 600;
            }

            .detail-item .value {
                font-size: 0.95rem;
                color: #222;
                font-weight: 500;
            }

            .detail-item .value.highlight {
                color: #000;
                font-weight: 700;
                background: #e0f2fe; /* Light Blue highlight */
                padding: 2px 6px;
                border-radius: 4px;
                display: inline-block;
                width: fit-content;
            }

            .card-actions {
                display: flex;
                gap: 10px;
                margin-top: 5px;
                border-top: 1px solid #eee;
                padding-top: 15px;
            }

            .btn-action {
                background: #f5f5f5;
                border: 1px solid #eee;
                color: #666;
                width: 35px;
                height: 35px;
                border-radius: 4px;
                display: flex;
                align-items: center;
                justify-content: center;
                cursor: pointer;
                transition: 0.2s;
            }
            
            .btn-action:hover { color: black; border-color: #ccc; }
            .btn-action.check:hover { background: #dcfce7; color: #166534; border-color: #bbf7d0; }
            .btn-action.reply:hover { background: #dbeafe; color: #1e40af; border-color: #bfdbfe; }
            .btn-action.delete:hover { background: #fee2e2; color: #991b1b; border-color: #fecaca; }

        `}</style>
        </div>
    );
}
