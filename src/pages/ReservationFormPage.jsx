import { useState } from 'react';
import '../styles/ReservationFormPage.css';

function ReservationFormPage({ onNavigate, reservationData, setReservationData }) {
  const [agreedToRules, setAgreedToRules] = useState(false);

  const grades = [
    '小学生',
    '中1生',
    '中2生',
    '中3生',
    '高1生',
    '高2生',
    '高3生',
    '既卒生',
    '大学生',
    '社会人',
  ];

  const usageTypes = [
    '在塾生',
    '自習室会員',
    '無料体験',
  ];

  const usageRules = [
    '実習室は、本日から14日先まで予約できます。',
    '予約は、在塾生・自習室会員・無料体験の方のみ利用できます。',
    '利用時間は13:00〜21:55です。',
    '1コマは55分です。',
    '各コマの間に5分間の入れ替え時間があります。',
    '利用後は、机の整理整頓・清掃を行ってから退出してください。',
  ];

  const confirmationRules = [
    'この申込みは仮予約です。',
    '入力したメールアドレス宛に確認メールを送信します。',
    'メール内の確認リンクを30分以内にクリックすると、本予約が確定します。',
    '30分以内に確認されない場合、仮予約は自動的に無効になります。',
    'メールが届かない場合は、メールアドレスを確認のうえ、再度お申込みください。',
    '迷惑メールフォルダに入る場合がありますので、あわせてご確認ください。',
  ];

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setReservationData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const studentName = reservationData.studentName || '';
  const grade = reservationData.grade || '';
  const usageType = reservationData.usageType || '';
  const email = reservationData.email || '';
  const phone = reservationData.phone || '';

  const isComplete = Boolean(
    studentName.trim() &&
      grade &&
      usageType &&
      email.trim() &&
      agreedToRules
  );

  const handleConfirm = (event) => {
    event.preventDefault();

    if (!isComplete) {
      return;
    }

    onNavigate('confirm');
  };

  return (
    <div className="form-page">
      <h1>仮予約情報を入力</h1>

      <p className="subtitle">
        本予約の確定にはメール確認が必要です。仮予約のために必要な情報を入力してください。
      </p>

      <div className="form-container">
        <form className="reservation-form" onSubmit={handleConfirm}>
          <div className="form-group">
            <label htmlFor="studentName">氏名 *</label>
            <input
              type="text"
              id="studentName"
              name="studentName"
              value={studentName}
              onChange={handleInputChange}
              placeholder="山田 太郎"
              autoComplete="name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="grade">学年 *</label>
            <select
              id="grade"
              name="grade"
              value={grade}
              onChange={handleInputChange}
            >
              <option value="">選択してください</option>
              {grades.map((gradeOption) => (
                <option key={gradeOption} value={gradeOption}>
                  {gradeOption}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="usageType">利用区分 *</label>
            <select
              id="usageType"
              name="usageType"
              value={usageType}
              onChange={handleInputChange}
            >
              <option value="">選択してください</option>
              {usageTypes.map((usageTypeOption) => (
                <option key={usageTypeOption} value={usageTypeOption}>
                  {usageTypeOption}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="email">メールアドレス *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={handleInputChange}
              placeholder="example@gmail.com"
              autoComplete="email"
            />
            <p className="field-note">
              確認メールを受信できるメールアドレスを入力してください。
            </p>
          </div>

          <div className="form-group">
            <label htmlFor="phone">電話番号（任意）</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={phone}
              onChange={handleInputChange}
              placeholder="090-1234-5678"
              autoComplete="tel"
            />
          </div>

          <div className="form-group checkbox">
            <input
              type="checkbox"
              id="agreeToRules"
              checked={agreedToRules}
              onChange={(event) => setAgreedToRules(event.target.checked)}
            />
            <label htmlFor="agreeToRules">
              利用ルール・予約確認事項に同意する
            </label>
          </div>

          <div className="rules-preview">
            <h3>利用ルール</h3>
            <ul>
              {usageRules.map((rule) => (
                <li key={rule}>{rule}</li>
              ))}
            </ul>

            <h3>予約確認について</h3>
            <ul>
              {confirmationRules.map((rule) => (
                <li key={rule}>{rule}</li>
              ))}
            </ul>
          </div>

          <div className="button-group">
            <button
              type="submit"
              disabled={!isComplete}
              className="btn btn-primary"
            >
              仮予約内容を確認する
            </button>

            <button
              type="button"
              onClick={() => onNavigate('timeSlot')}
              className="btn btn-secondary"
            >
              戻る
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ReservationFormPage;