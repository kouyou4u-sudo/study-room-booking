import { useState } from 'react';
import { RESERVATION_RULES } from '../data/reservationRules';
import '../styles/ReservationFormPage.css';

function ReservationFormPage({ onNavigate, reservationData, setReservationData }) {
  const [agreedToRules, setAgreedToRules] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setReservationData({ ...reservationData, [name]: value });
  };

  const handleConfirm = () => {
    if (reservationData.studentName && reservationData.email && agreedToRules) {
      onNavigate('confirm');
    }
  };

  const isComplete = reservationData.studentName && reservationData.email && agreedToRules;

  return (
    <div className="form-page">
      <h1>予約情報入力</h1>
      <p className="subtitle">ご利用者の情報を入力してください。</p>

      <div className="form-container">
        <form className="reservation-form">
          <div className="form-group">
            <label htmlFor="studentName">氏名 *</label>
            <input
              type="text"
              id="studentName"
              name="studentName"
              value={reservationData.studentName}
              onChange={handleInputChange}
              placeholder="山田太郎"
            />
          </div>

          <div className="form-group">
            <label htmlFor="grade">学年</label>
            <select
              id="grade"
              name="grade"
              value={reservationData.grade}
              onChange={handleInputChange}
            >
              <option value="">選択してください</option>
              <option value="小1">小学1年</option>
              <option value="小2">小学2年</option>
              <option value="小3">小学3年</option>
              <option value="小4">小学4年</option>
              <option value="小5">小学5年</option>
              <option value="小6">小学6年</option>
              <option value="中1">中学1年</option>
              <option value="中2">中学2年</option>
              <option value="中3">中学3年</option>
              <option value="高1">高校1年</option>
              <option value="高2">高校2年</option>
              <option value="高3">高校3年</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="email">メールアドレス *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={reservationData.email}
              onChange={handleInputChange}
              placeholder="example@gmail.com"
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">電話番号</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={reservationData.phone}
              onChange={handleInputChange}
              placeholder="090-1234-5678"
            />
          </div>

          <div className="form-group">
            <label htmlFor="note">備考</label>
            <textarea
              id="note"
              name="note"
              value={reservationData.note}
              onChange={handleInputChange}
              placeholder="特に伝えたいことがあれば記入してください"
              rows="4"
            />
          </div>

          <div className="form-group checkbox">
            <input
              type="checkbox"
              id="agreeToRules"
              checked={agreedToRules}
              onChange={(e) => setAgreedToRules(e.target.checked)}
            />
            <label htmlFor="agreeToRules">
              利用ルールに同意する
            </label>
          </div>

          <div className="rules-preview">
            <h3>利用ルール</h3>
            <ul>
              {RESERVATION_RULES.slice(0, 5).map((rule, idx) => (
                <li key={idx}>{rule}</li>
              ))}
            </ul>
            <p className="rules-note">全ルール詳細は画面下を確認してください</p>
          </div>
        </form>
      </div>

      <div className="button-group">
        <button
          onClick={handleConfirm}
          disabled={!isComplete}
          className="btn btn-primary"
        >
          予約内容を確認する
        </button>
        <button
          onClick={() => onNavigate('seatMap')}
          className="btn btn-secondary"
        >
          戻る
        </button>
      </div>
    </div>
  );
}

export default ReservationFormPage;