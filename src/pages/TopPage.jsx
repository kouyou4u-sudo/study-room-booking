import '../styles/TopPage.css';

function TopPage({ onNavigate }) {
  return (
    <div className="top-page">
      <section className="hero-section">
        <div className="hero-overlay" />

        <div className="hero-content">
          <div className="hero-text">
            <p className="hero-label">SELF STUDY ROOM RESERVATION</p>
            <h1>自習室予約アプリ</h1>
            <p className="hero-description">
              空いている日時と座席を選んで、
              自習室の仮予約ができるアプリです。
            </p>
            <p className="hero-note">
              本予約の確定には、メール確認が必要です。
            </p>

            <div className="hero-buttons">
              <button
                className="btn btn-primary"
                onClick={() => onNavigate('reservation')}
              >
                仮予約を始める
              </button>
            </div>
          </div>

          <div className="hero-image-wrap">
            <img
              src="/自習室予約アプリ.png"
              alt="自習室予約アプリのイメージ"
              className="hero-image"
            />
          </div>
        </div>
      </section>

      <section className="info-section">
        <div className="info-card">
          <h2>利用ルール</h2>
          <ul>
            <li>自習室は、本日から14日先まで予約できます。</li>
            <li>予約は、在塾生・自習室会員・無料体験の方のみ利用できます。</li>
            <li>利用時間は13:00〜21:55です。</li>
            <li>1コマは55分です。</li>
            <li>各コマの間に5分間の入れ替え時間があります。</li>
            <li>利用後は、机の整理整頓・清掃を行ってから退出してください。</li>
          </ul>
        </div>

        <div className="info-card">
          <h2>予約確認について</h2>
          <ul>
            <li>このシステムで行うのは仮予約です。</li>
            <li>入力したメールアドレス宛に確認メールを送信します。</li>
            <li>メール内の確認リンクを30分以内にクリックすると、本予約が確定します。</li>
            <li>30分以内に確認されない場合、仮予約は自動的に無効になります。</li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default TopPage;