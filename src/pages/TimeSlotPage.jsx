import { getTimeSlotsBySeat } from '../data/timeSlots';
import '../styles/TimeSlotPage.css';

function TimeSlotPage({ onNavigate, reservationData, setReservationData }) {
  const selectedSeat = reservationData.seat;
  const seatTimeSlots = selectedSeat ? getTimeSlotsBySeat(selectedSeat) : [];
  const selectedTimeSlots = reservationData.timeSlots || [];

  const handleToggleTimeSlot = (slot) => {
    if (!slot.isAvailable) {
      return;
    }

    const isSelected = selectedTimeSlots.includes(slot.label);
    const newTimeSlots = isSelected
      ? selectedTimeSlots.filter((time) => time !== slot.label)
      : [...selectedTimeSlots, slot.label];

    setReservationData((prevData) => ({
      ...prevData,
      timeSlots: newTimeSlots,
    }));
  };

  const handleNext = () => {
    if (selectedTimeSlots.length > 0) {
      onNavigate('form');
    }
  };

  return (
    <div className="time-slot-page">
      <h1>時間帯を選ぶ</h1>
      <p className="subtitle">
        {selectedSeat
          ? `座席${selectedSeat}番で予約できる時間帯から、利用したいコマを複数選択できます。`
          : '先に座席を選んでください。'}
      </p>

      {selectedSeat && (
        <div className="selected-seat-summary">
          <p>選択中の座席: {selectedSeat}番</p>
        </div>
      )}

      <div className="time-slots-container">
        {seatTimeSlots.map((slot) => {
          const isSelected = selectedTimeSlots.includes(slot.label);
          const isFull = !slot.isAvailable;

          return (
            <div
              key={slot.id}
              className={`time-slot ${isSelected ? 'time-slot-selected' : ''} ${isFull ? 'time-slot-full' : ''}`}
              onClick={() => handleToggleTimeSlot(slot)}
            >
              <div className="time-slot-time">{slot.label}</div>
              <div className="status-icon">{isFull ? '×' : isSelected ? '✓' : '○'}</div>
              <div className="available-seats">
                {isFull ? 'この時間帯は予約できません' : 'この座席で予約可能です'}
              </div>

              <button
                type="button"
                disabled={isFull}
                className={`select-button ${isSelected ? 'selected-button' : ''}`}
                onClick={(event) => {
                  event.stopPropagation();
                  handleToggleTimeSlot(slot);
                }}
              >
                {isFull ? '満席' : isSelected ? '選択を解除' : '選択する'}
              </button>
            </div>
          );
        })}
      </div>

      <div className="selected-time-summary">
        <p>選択中: {selectedTimeSlots.length}コマ</p>
        {selectedTimeSlots.length > 0 ? (
          <p>{selectedTimeSlots.join(' / ')}</p>
        ) : (
          <p>時間帯を1つ以上選んでください。</p>
        )}
      </div>

      <div className="button-group">
        <button
          onClick={handleNext}
          disabled={selectedTimeSlots.length === 0}
          className="btn-primary"
        >
          予約情報を入力する
        </button>

        <button
          onClick={() => onNavigate('seatMap')}
          className="btn-secondary"
        >
          戻る
        </button>
      </div>
    </div>
  );
}

export default TimeSlotPage;
