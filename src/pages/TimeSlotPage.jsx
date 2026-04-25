import { useState } from 'react';
import { TIME_SLOTS } from '../data/timeSlots';
import '../styles/TimeSlotPage.css';

function TimeSlotPage({ onNavigate, onSelectTime }) {
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);

  // ダミー：各時間帯の残席数（後で API から取得）
  const getAvailableSeats = (slotId) => {
    const slots = {
      1: 8,
      2: 15,
      3: 0,
      4: 3,
      5: 12,
      6: 20,
      7: 5,
      8: 1,
      9: 18,
    };
    return slots[slotId];
  };

  const getStatus = (availableSeats) => {
    if (availableSeats === 0) return '×';
    if (availableSeats <= 5) return '△';
    return '○';
  };

  const handleSelectSlot = (slotId) => {
    setSelectedTimeSlot(slotId);
  };

  const handleConfirm = () => {
    if (selectedTimeSlot) {
      onSelectTime(selectedTimeSlot);
    }
  };

  return (
    <div className="time-slot-page">
      <h1>時間帯を選択</h1>
      <p className="subtitle">ご希望の時間帯をお選びください。</p>

      <div className="time-slots-container">
        {TIME_SLOTS.map((slot) => {
          const availableSeats = getAvailableSeats(slot.id);
          const status = getStatus(availableSeats);
          const isSelected = selectedTimeSlot === slot.id;

          return (
            <div
              key={slot.id}
              className={`time-slot-card ${isSelected ? 'selected' : ''}`}
              onClick={() => handleSelectSlot(slot.id)}
            >
              <div className="time-label">{slot.label}</div>
              <div className={`status status-${status}`}>{status}</div>
              <div className="available-seats">
                残席：{availableSeats}席
              </div>
              <button className="btn-select">選択する</button>
            </div>
          );
        })}
      </div>

      {selectedTimeSlot && (
        <div className="selection-info">
          <p>
            選択中の時間帯：
            <strong>
              {TIME_SLOTS.find((s) => s.id === selectedTimeSlot)?.label}
            </strong>
          </p>
        </div>
      )}

      <div className="button-group">
        <button
          onClick={handleConfirm}
          disabled={!selectedTimeSlot}
          className="btn btn-primary"
        >
          この時間帯を選択
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

export default TimeSlotPage;