import '../styles/CompletePage.css';

function CompletePage({ onNavigate }) {
  return (
    <div className="complete-page">
      <div className="complete-container">
        <div className="success-icon">✓</div>
        <h1>予約完了</h1>
        <p className="subtitle">ご予約ありがとうございました。</p>

        <div className="confirmation-details">
          <p>
            ご予約内容の確認メールを送信いたしました。<br />
            メールボックスをご確認ください。
          </p>
        </div>

        <div className="next-steps">
          <h2>ご来室時のお願い</h2>
          <ul>
            <li>予約時刻の5分前にご来室ください。</li>
            <li>予約時刻から15分以上遅刻された場合、予約は無効となります。</li>
            <li>利用後は、机の上をきれいにしてからご退室ください。</li>
            <li>ご不明な点はスタッフまでお気軽にお尋ねください。</li>
          </ul>
        </div>

        <div className="button-group">
          <button
            onClick={() => onNavigate('top')}
            className="btn btn-primary"
          >
            トップに戻る
          </button>
          <button
            onClick={() => onNavigate('reservation')}
            className="btn btn-secondary"
          >
            別の日時を予約する
          </button>
        </div>
      </div>
    </div>
  );
}

export default CompletePage;