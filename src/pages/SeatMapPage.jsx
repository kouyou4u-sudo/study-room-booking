import { useState } from 'react';
import SeatMap from '../components/SeatMap';
import '../styles/SeatMapPage.css';

function SeatMapPage({ onNavigate, reservationData, setReservationData }) {
  const [selectedSeat, setSelectedSeat] = useState(null);

  // ダミー：予約済み座席
  const reservedSeats = [3, 7, 11, 15, 18];

  const handleSelectSeat = (seatNumber) => {
    setSelectedSeat(seatNumber);
    setReservationData({ ...reservationData, seat: seatNumber });
  };

  const handleConfirm = () => {
    if (selectedSeat) {
      onNavigate('form');
    }
  };

  return (
    <div className="seat-map-page">
      <h1>座席を選択</h1>
      <p className="subtitle">予約したい座席をクリックしてください。</p>

      <div className="map-container">
        <SeatMap
          reservedSeats={reservedSeats}
          selectedSeat={selectedSeat}
          onSelectSeat={handleSelectSeat}
        />
      </div>

      <div className="button-group">
        <button
          onClick={handleConfirm}
          disabled={!selectedSeat}
          className="btn-primary"
        >
          この座席を予約する
        </button>
        <button
          onClick={() => onNavigate('timeSlot')}
          className="btn-secondary"
        >
          戻る
        </button>
      </div>
    </div>
  );
}

export default SeatMapPage;