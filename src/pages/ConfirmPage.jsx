import { useState } from 'react';
import '../styles/ConfirmPage.css';

function ConfirmPage({ onNavigate, reservationData }) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const selectedTimeSlotsText =
    reservationData.timeSlots && reservationData.timeSlots.length > 0
      ? reservationData.timeSlots.join(' / ')
      : '-';

  const handleConfirm = async () => {
    setIsSubmitting(true);
    setTimeout(() => {
      onNavigate('complete');
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="confirm-page">
      <h1>予約内容を確認</h1>
      <p className="subtitle">内容を確認して予約を確定してください。</p>

      <div className="confirm-container">
        <div className="confirm-section">
          <h2>予約内容</h2>
          <div className="confirm-item">
            <label>日付</label>
            <p>{reservationData.date ? new Date(reservationData.date).toLocaleDateString('ja-JP') : '-'}</p>
          </div>
          <div className="confirm-item">
            <label>時間帯</label>
            <p>{selectedTimeSlotsText}</p>
          </div>
          <div className="confirm-item">
            <label>座席</label>
            <p>座席 {reservationData.seat || '-'}</p>
          </div>
        </div>

        <div className="confirm-section">
          <h2>利用者情報</h2>
          <div className="confirm-item">
            <label>氏名</label>
            <p>{reservationData.studentName || '-'}</p>
          </div>
          <div className="confirm-item">
            <label>学年</label>
            <p>{reservationData.grade || '-'}</p>
          </div>
          <div className="confirm-item">
            <label>メールアドレス</label>
            <p>{reservationData.email || '-'}</p>
          </div>
          <div className="confirm-item">
            <label>電話番号</label>
            <p>{reservationData.phone || '-'}</p>
          </div>
          {reservationData.note && (
            <div className="confirm-item">
              <label>備考</label>
              <p>{reservationData.note}</p>
            </div>
          )}
        </div>

        <div className="confirm-notice">
          <p>送信後は仮予約として受け付けます。必要に応じて後ほどご案内します。</p>
        </div>
      </div>

      <div className="button-group">
        <button
          onClick={handleConfirm}
          disabled={isSubmitting}
          className="btn btn-primary"
        >
          {isSubmitting ? '予約中...' : '予約を確定する'}
        </button>
        <button
          onClick={() => onNavigate('form')}
          disabled={isSubmitting}
          className="btn btn-secondary"
        >
          戻る
        </button>
      </div>
    </div>
  );
}

export default ConfirmPage;
