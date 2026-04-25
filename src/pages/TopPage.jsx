import '../styles/TopPage.css';

function TopPage({ onNavigate }) {
  return (
    <div className="top-page">
      <div className="hero">
        <h1 className="hero-title">自習室予約</h1>
        <p className="hero-subtitle">
          静かな学習環境で、集中できる時間を確保できます。<br />
          本日から14日先まで予約可能です。
        </p>
        <button
          onClick={() => onNavigate('reservation')}
          className="btn btn-primary"
        >
          予約を始める
        </button>
      </div>

      <div className="rules-section">
        <h2>利用ルール</h2>
        <ul className="rules-list">
          <li>自習室は、本日から14日先まで予約できます。</li>
          <li>予約はWaseDrive会員・塾生のみ利用できます。</li>
          <li>利用時間は13:00〜21:55です。</li>
          <li>1コマは55分です。</li>
          <li>複数のコマを連続して予約することもできます。</li>
        </ul>
      </div>
    </div>
  );
}

export default TopPage;