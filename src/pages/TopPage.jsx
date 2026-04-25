function TopPage({ onNavigate }) {
  return (
    <div className="top-page">
      <section className="hero">
        <h1>集中できる時間を、予約できる。</h1>
        <p>WaseDriveの自習室は、授業がない日でも利用可能。</p>
        <p>静かな学習環境を、必要な時間にしっかり確保できます。</p>
        <button 
          className="btn btn-primary"
          onClick={() => onNavigate('reservation')}
        >
          自習室を予約する
        </button>
      </section>

      <section className="rules-preview">
        <h2>利用ルール</h2>
        <ul>
          <li>自習室は、本日から14日先まで予約できます。</li>
          <li>予約はWaseDrive会員・塾生のみ利用できます。</li>
          <li>利用時間は13:00〜21:55です。</li>
          <li>1コマは55分です。</li>
          <li>複数コマを連続して予約することもできます。</li>
        </ul>
      </section>
    </div>
  );
}

export default TopPage;