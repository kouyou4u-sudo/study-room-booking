import '../styles/DateSelectPage.css';

function DateSelectPage({ onNavigate, reservationData }) {
  // 選択した日付をフォーマット
  const formatSelectedDate = () => {
    if (!reservationData.date) return '-';
    const date = new Date(reservationData.date);
    const days = ['日', '月', '火', '水', '木', '金', '土'];
    const day = date.getDate();
    const dayOfWeek = days[date.getDay()];
    return `${day}日（${dayOfWeek}）`;
  };

  return (
    <div className="date-select-page">
      <h1>日付を選択</h1>
      <p className="subtitle">（プレースホルダー）</p>

      <div className="selected-date-display">
        <p className="selected-date-label">選択した日付</p>
        <p className="selected-date-value">{formatSelectedDate()}</p>
      </div>

      <p className="description">予約したい日付を選んでください。</p>

      <div className="button-group">
        <button
          onClick={() => onNavigate('timeSlot')}
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