import { useState } from 'react';
import '../styles/ConfirmPage.css';

function ConfirmPage({ onNavigate, reservationData }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const selectedTimeSlotsText =
    reservationData.timeSlots && reservationData.timeSlots.length > 0
      ? reservationData.timeSlots.join(' / ')
      : '-';

  const formattedDate = reservationData.date
    ? new Date(reservationData.date).toLocaleDateString('ja-JP')
    : '-';

  const handleConfirm = async () => {
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch('http://localhost:8000/api/reservations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          student_name: reservationData.studentName,
          grade: reservationData.grade,
          usage_type: reservationData.usageType,
          email: reservationData.email,
          phone: reservationData.phone || null,
          date: reservationData.date,
          time_slot: selectedTimeSlotsText,
          seat_number: reservationData.seat,
          note: null,
        }),
      });

      const contentType = response.headers.get('content-type');

      let responseData = null;

      if (contentType && contentType.includes('application/json')) {
        responseData = await response.json();
      } else {
        const text = await response.text();
        console.error('JSON以外のレスポンス:', text);
        throw new Error('サーバーからJSON以外のレスポンスが返ってきました。');
      }

      if (!response.ok) {
        console.error('予約APIエラー:', responseData);
        throw new Error(
          responseData.message ||
            responseData.error ||
            '仮予約メールの送信に失敗しました。'
        );
      }

      console.log('仮予約受付成功:', responseData);
      onNavigate('complete');
    } catch (err) {
      console.error('Error:', err);
      setError(err.message || '仮予約処理中にエラーが発生しました。');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="confirm-page">
      <h1>仮予約内容を確認</h1>

      <p className="subtitle">
        内容をご確認のうえ、仮予約メールを送信してください。
      </p>

      <div className="confirm-container">
        <div className="confirm-section">
          <h2>予約内容</h2>

          <div className="confirm-item">
            <label>日付</label>
            <p>{formattedDate}</p>
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
            <label>利用区分</label>
            <p>{reservationData.usageType || '-'}</p>
          </div>

          <div className="confirm-item">
            <label>メールアドレス</label>
            <p>{reservationData.email || '-'}</p>
          </div>

          <div className="confirm-item">
            <label>電話番号</label>
            <p>{reservationData.phone || '未入力'}</p>
          </div>
        </div>

        <div className="confirm-notice">
          <p>
            この申込みはまだ本予約ではありません。送信後、入力したメールアドレス宛に確認メールを送信します。
          </p>
          <p>
            メール内の確認リンクを30分以内にクリックすると、本予約が確定します。
          </p>
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
            className="btn btn-primary"
          >
            {isSubmitting ? '送信中...' : '仮予約メールを送信する'}
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
    </div>
  );
}

export default ConfirmPage;