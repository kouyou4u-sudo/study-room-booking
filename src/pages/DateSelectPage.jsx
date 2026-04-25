import '../styles/DateSelectPage.css';

function DateSelectPage({ onNavigate }) {
  const handleConfirm = () => {
    // 日付を選択したとして、TimeSlotPage に遷移
    onNavigate('timeSlot');
  };

  return (
    <div className="date-select-page">
      <h1>日付を選択</h1>
      <p className="subtitle">（プレースホルダー）</p>
      <p>予約したい日付を選んでください。</p>

      <div className="button-group">
        <button
          onClick={handleConfirm}
          className="btn btn-primary"
        >
          この日付で時間帯を選ぶ
        </button>
        <button
          onClick={() => onNavigate('reservation')}
          className="btn btn-secondary"
        >
          戻る
        </button>
      </div>
    </div>
  );
}

export default DateSelectPage;