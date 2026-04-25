import { useState } from 'react';
import SeatMap from '../components/SeatMap';
import '../styles/SeatMapPage.css';

function SeatMapPage({ onNavigate, onSelectSeat }) {
  const [selectedSeat, setSelectedSeat] = useState(null);

  // ダミー：予約済み座席（後で API から取得）
  const reservedSeats = [3, 7, 11, 15, 18];

  const handleSelectSeat = (seatNumber) => {
    setSelectedSeat(seatNumber);
  };

  const handleConfirm = () => {
    if (selectedSeat) {
      onSelectSeat(selectedSeat);
    }
  };

  return (
    <div className="seat-map-page">
      <h1>座席を選択</h1>
      <p className="subtitle">予約したい座席をクリックしてください。</p>

      <SeatMap
        selectedSeat={selectedSeat}
        onSelectSeat={handleSelectSeat}
        reservedSeats={reservedSeats}
      />

      {selectedSeat && (
        <div className="selection-info">
          <p>選択中の座席：<strong>座席 {selectedSeat}</strong></p>
        </div>
      )}

      <div className="button-group">
        <button
          onClick={handleConfirm}
          disabled={!selectedSeat}
          className="btn btn-primary"
        >
          この座席を予約する
        </button>
        <button
          onClick={() => onNavigate('timeSlot')}
          className="btn btn-secondary"
        >
          戻る
        </button>
      </div>
    </div>
  );
}

export default SeatMapPage;