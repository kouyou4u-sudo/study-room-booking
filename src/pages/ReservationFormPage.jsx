import { useState } from 'react';
import '../styles/ReservationFormPage.css';

function ReservationFormPage({
  onNavigate,
  reservationData,
  setReservationData,
  onResetToTop,
}) {
  const [agreedToRules, setAgreedToRules] = useState(false);

  const grades = [
    '小学生',
    '中学1年',
    '中学2年',
    '中学3年',
    '高校1年',
    '高校2年',
    '高校3年',
    '既卒生',
    '大学生',
    '社会人',
  ];

  const usageTypes = [
    '自習利用',
    '資格試験対策',
    '部活動・課題',
  ];

  const usageRules = [
    '予約は、利用日から14日先まで可能です。',
    '予約枠は、自習利用・資格試験対策・部活動・課題の方のみ利用できます。',
    '利用時間は13:00〜21:55です。',
    '1コマは55分です。',
    '各コマの間に5分間の入れ替え時間があります。',
    '利用後は、机の消毒や整頓を行ってから退出してください。',
  ];

  const confirmationRules = [
    'この申込みは仮予約です。',
    '入力したメールアドレス宛に確認メールを送信します。',
    'メール内の確認リンクを30分以内にクリックすると、予約が確定します。',
    '30分以内に確認されない場合、予約は自動的に無効になります。',
    'メールが届かない場合は、迷惑メールフォルダも確認してください。',
    '混雑時はメール反映まで少し時間がかかる場合があります。',
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
      <h1>予約情報を入力</h1>

      <p className="subtitle">
        本予約の確認にはメール認証が必要です。必要事項を入力して確認へ進んでください。
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
              確認メールを受け取れるメールアドレスを入力してください。
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

            <h3>予約確認事項について</h3>
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
              予約内容を確認する
            </button>

            <div className="sub-action-buttons">
              <button
                type="button"
                onClick={() => onNavigate('timeSlot')}
                className="btn btn-secondary"
              >
                戻る
              </button>
              <button
                type="button"
                onClick={onResetToTop}
                className="btn btn-secondary"
              >
                最初に戻る
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ReservationFormPage;
