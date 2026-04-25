function CompletePage({ onNavigate }) {
  return (
    <div className="complete-page">
      <h1>予約完了</h1>
      <p>（プレースホルダー）</p>
      <button onClick={() => onNavigate('top')}>トップに戻る</button>
    </div>
  );
}

export default CompletePage;