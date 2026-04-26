import '../styles/CompletePage.css';

function CompletePage({ onNavigate }) {
  return (
    <div className="complete-page">
      <div className="complete-container">
        <div className="success-icon">✓</div>

        <h1>仮予約メールを送信しました</h1>

        <p className="subtitle">
          まだ本予約は完了していません。
        </p>

        <div className="confirmation-details">
          <p>
            入力いただいたメールアドレス宛に、仮予約確認メールを送信しました。
            <br />
            メール内の確認リンクをクリックすると、本予約が確定します。
          </p>
        </div>

        <div className="next-steps">
          <h2>本予約までの流れ</h2>
          <ul>
            <li>メールボックスを確認してください。</li>
            <li>メール内の確認リンクを30分以内にクリックしてください。</li>
            <li>30分以内に確認されない場合、仮予約は自動的に無効になります。</li>
            <li>メールが届かない場合は、迷惑メールフォルダも確認してください。</li>
            <li>メールアドレスを誤って入力した場合は、再度お申し込みください。</li>
          </ul>
        </div>

        <div className="next-steps">
          <h2>ご来室時のお願い</h2>
          <ul>
            <li>本予約が確定してからご利用ください。</li>
            <li>予約時刻の5分前を目安にご来室ください。</li>
            <li>利用後は、机の整理整頓・清掃を行ってから退出してください。</li>
            <li>ご不明な点はスタッフまでお気軽にお尋ねください。</li>
          </ul>
        </div>

        <div className="button-group">
          <button
            type="button"
            onClick={() => onNavigate('top')}
            className="btn btn-primary"
          >
            トップに戻る
          </button>

          <button
            type="button"
            onClick={() => onNavigate('reservation')}
            className="btn btn-secondary"
          >
            別の日時を仮予約する
          </button>
        </div>
      </div>
    </div>
  );
}

export default CompletePage;