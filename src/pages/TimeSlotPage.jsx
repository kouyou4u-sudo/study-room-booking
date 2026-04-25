import '../styles/TimeSlotPage.css';

function TimeSlotPage({ onNavigate, reservationData, setReservationData }) {
  const TIME_SLOTS = [
    '13:00〜13:55',
    '14:00〜14:55',
    '15:00〜15:55',
    '16:00〜16:55',
    '17:00〜17:55',
    '18:00〜18:55',
    '19:00〜19:55',
    '20:00〜20:55',
    '21:00〜21:55',
  ];

  // 空き状況をダミー取得（後で API から取得）
  const getAvailability = () => {
    const random = Math.random();
    if (random > 0.7) return '×';
    if (random > 0.4) return '△';
    return '○';
  };

  // 残席数をダミー取得
  const getAvailableSeats = () => {
    return Math.floor(Math.random() * 20) + 1;
  };

  const handleSelectTimeSlot = (timeSlot) => {
    setReservationData({ ...reservationData, timeSlot });
    onNavigate('seatMap');
  };

  return (
    <div className="time-slot-page">
      <h1>時間帯を選択</h1>
      <p className="subtitle">ご希望の時間帯をお選びください。</p>

      <div className="time-slots-container">
        {TIME_SLOTS.map((slot) => (
          <div key={slot} className="time-slot">
            <div className="time-slot-time">{slot}</div>
            <div className="status-icon">{getAvailability()}</div>
            <div className="available-seats">残席：{getAvailableSeats()}席</div>
            <button
              onClick={() => handleSelectTimeSlot(slot)}
              className="select-button"
            >
              選択する
            </button>
          </div>
        ))}
      </div>

      <div className="button-group">
        <button
          onClick={() => onNavigate('reservation')}
          className="btn-secondary"
        >
          戻る
        </button>
      </div>
    </div>
  );
}

export default TimeSlotPage;