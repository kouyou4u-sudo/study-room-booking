import '../styles/DateSelectPage.css';

function DateSelectPage({ onNavigate, reservationData, onResetToTop }) {
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
      <p className="subtitle">選択した利用日を確認してください。</p>

      <div className="selected-date-display">
        <p className="selected-date-label">選択中の日付</p>
        <p className="selected-date-value">{formatSelectedDate()}</p>
      </div>

      <p className="description">この日付で利用する座席を選んでください。</p>

      <div className="button-group">
        <button
          type="button"
          onClick={() => onNavigate('seatMap')}
          className="btn btn-primary"
        >
          この日付で座席を選ぶ
        </button>

        <div className="sub-action-buttons">
          <button
            type="button"
            onClick={() => onNavigate('reservation')}
            className="btn btn-secondary"
          >
            戻る
          </button>
          <button
            type="button"
            onClick={onResetToTop}
            className="btn btn-secondary"
          >
            最初へ
          </button>
        </div>
      </div>
    </div>
  );
}

export default DateSelectPage;
