function ConfirmPage({ onNavigate, reservationData }) {
  return (
    <div className="confirm-page">
      <h1>予約確認</h1>
      <p>（プレースホルダー）</p>
      <button onClick={() => onNavigate('form')}>戻る</button>
    </div>
  );
}

export default ConfirmPage;