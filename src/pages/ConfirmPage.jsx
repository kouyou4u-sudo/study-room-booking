import { useState } from 'react';
import './styles/ConfirmPage.css';

function ConfirmPage({ onNavigate, reservationData }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const selectedTimeSlotsText =
    reservationData.timeSlots && reservationData.timeSlots.length > 0
      ? reservationData.timeSlots.join(' / ')
      : '-';

  const handleConfirm = async () => {
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch('http://localhost:8000/api/reservations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          student_name: reservationData.studentName,
          grade: reservationData.grade,
          email: reservationData.email,
          phone: reservationData.phone || null,
          date: reservationData.date,
          time_slot: reservationData.timeSlot,
          seat_number: reservationData.seat,
          note: reservationData.note || null,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || '予約に失敗しました');
      }

      const data = await response.json();
      console.log('予約成功:', data);
      onNavigate('complete');
    } catch (err) {
      console.error('Error:', err);
      setError(err.message || '予約処理中にエラーが発生しました');
    } finally {
      setIsSubmitting(false);
    }
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
            <p>{reservationData.seat || '-'}</p>
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

        {error && (
          <div className="confirm-error">
            <p>{error}</p>
          </div>
        )}

        <div className="button-group">
          <button
            onClick={handleConfirm}
            disabled={isSubmitting}
            className="btn-primary"
          >
            {isSubmitting ? '予約中...' : '予約を確定する'}
          </button>
          <button
            onClick={() => onNavigate('form')}
            disabled={isSubmitting}
            className="btn-secondary"
          >
            戻る
          </button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmPage;