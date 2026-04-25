import '../styles/DateSelectPage.css';

function DateSelectPage({ onNavigate, reservationData }) {
  const formatSelectedDate = () => {
    if (!reservationData.date) return '-';

    return new Intl.DateTimeFormat('ja-JP', {
      month: 'long',
      day: 'numeric',
      weekday: 'short',
    }).format(new Date(reservationData.date));
  };

  return (
    <div className="date-select-page">
      <h1>日付を確認</h1>
      <p className="subtitle">選択した日付で予約を進めます</p>

      <div className="selected-date-display">
        <p className="selected-date-label">選択中の日付</p>
        <p className="selected-date-value">{formatSelectedDate()}</p>
      </div>

      <p className="description">この日付で利用する座席を選んでください。</p>

      <div className="button-group">
        <button
          onClick={() => onNavigate('seatMap')}
          className="btn btn-primary"
        >
          この日付で座席を選ぶ
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
