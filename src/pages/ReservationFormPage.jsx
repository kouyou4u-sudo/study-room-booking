import { useState } from 'react';
import { RESERVATION_RULES } from '../data/reservationRules';
import '../styles/ReservationFormPage.css';

function ReservationFormPage({ onNavigate, reservationData, setReservationData }) {
  const [agreedToRules, setAgreedToRules] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
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
      <h1>予約情報を入力</h1>
      <p className="subtitle">利用者情報を入力してください。</p>

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
              placeholder="山田 太郎"
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
              <option value="小学1年">小学1年</option>
              <option value="小学2年">小学2年</option>
              <option value="小学3年">小学3年</option>
              <option value="小学4年">小学4年</option>
              <option value="小学5年">小学5年</option>
              <option value="小学6年">小学6年</option>
              <option value="中学1年">中学1年</option>
              <option value="中学2年">中学2年</option>
              <option value="中学3年">中学3年</option>
              <option value="高校1年">高校1年</option>
              <option value="高校2年">高校2年</option>
              <option value="高校3年">高校3年</option>
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
              placeholder="伝えておきたいことがあれば入力してください"
              rows="4"
            />
          </div>

          <div className="form-group checkbox">
            <input
              type="checkbox"
              id="agreeToRules"
              checked={agreedToRules}
              onChange={(event) => setAgreedToRules(event.target.checked)}
            />
            <label htmlFor="agreeToRules">利用ルールに同意する</label>
          </div>

          <div className="rules-preview">
            <h3>利用ルール</h3>
            <ul>
              {RESERVATION_RULES.slice(0, 5).map((rule, index) => (
                <li key={index}>{rule}</li>
              ))}
            </ul>
            <p className="rules-note">全ルール詳細は画面下でも確認できます。</p>
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
          onClick={() => onNavigate('timeSlot')}
          className="btn btn-secondary"
        >
          戻る
        </button>
      </div>
    </div>
  );
}

export default ReservationFormPage;
