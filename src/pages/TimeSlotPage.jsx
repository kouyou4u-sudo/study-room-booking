import '../styles/TimeSlotPage.css';

function TimeSlotPage({ onNavigate, reservationData, setReservationData }) {
  const TIME_SLOTS = [
    { time: '13:00〜13:55', status: '○', availableSeats: 20 },
    { time: '14:00〜14:55', status: '△', availableSeats: 5 },
    { time: '15:00〜15:55', status: '×', availableSeats: 0 },
    { time: '16:00〜16:55', status: '○', availableSeats: 12 },
    { time: '17:00〜17:55', status: '○', availableSeats: 8 },
    { time: '18:00〜18:55', status: '△', availableSeats: 3 },
    { time: '19:00〜19:55', status: '○', availableSeats: 10 },
    { time: '20:00〜20:55', status: '○', availableSeats: 7 },
    { time: '21:00〜21:55', status: '△', availableSeats: 2 },
  ];

  const selectedTimeSlots = reservationData.timeSlots || [];

  const handleToggleTimeSlot = (slot) => {
    if (slot.status === '×') {
      return;
    }

    const isSelected = selectedTimeSlots.includes(slot.time);

    const newTimeSlots = isSelected
      ? selectedTimeSlots.filter((time) => time !== slot.time)
      : [...selectedTimeSlots, slot.time];

    setReservationData({
      ...reservationData,
      timeSlots: newTimeSlots,
    });
  };

  const handleNext = () => {
    if (selectedTimeSlots.length > 0) {
      onNavigate('seatMap');
    }
  };

  return (
    <div className="time-slot-page">
      <h1>時間帯を選択</h1>
      <p className="subtitle">ご希望の時間帯を1つ以上お選びください。</p>

      <div className="time-slots-container">
        {TIME_SLOTS.map((slot) => {
          const isSelected = selectedTimeSlots.includes(slot.time);
          const isFull = slot.status === '×';

          return (
            <div
              key={slot.time}
              className={`time-slot ${isSelected ? 'time-slot-selected' : ''} ${isFull ? 'time-slot-full' : ''}`}
              onClick={() => handleToggleTimeSlot(slot)}
            >
              <div className="time-slot-time">{slot.time}</div>
              <div className="status-icon">{slot.status}</div>
              <div className="available-seats">残席：{slot.availableSeats}席</div>

              <button
                type="button"
                disabled={isFull}
                className={`select-button ${isSelected ? 'selected-button' : ''}`}
                onClick={(e) => {
                  e.stopPropagation();
                  handleToggleTimeSlot(slot);
                }}
              >
                {isFull ? '満席' : isSelected ? '選択中' : '選択する'}
              </button>
            </div>
          );
        })}
      </div>

      <div className="selected-time-summary">
        <p>選択中：{selectedTimeSlots.length}コマ</p>
        {selectedTimeSlots.length > 0 && (
          <p>{selectedTimeSlots.join(' / ')}</p>
        )}
      </div>

      <div className="button-group">
        <button
          onClick={handleNext}
          disabled={selectedTimeSlots.length === 0}
          className="btn-primary"
        >
          選択した時間帯で座席を選ぶ
        </button>

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