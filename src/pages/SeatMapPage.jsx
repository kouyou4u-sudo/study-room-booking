import { useState } from 'react';
import SeatMap from '../components/SeatMap';
import { getFullyReservedSeats } from '../data/timeSlots';
import '../styles/SeatMapPage.css';

function SeatMapPage({ onNavigate, reservationData, setReservationData }) {
  const [selectedSeat, setSelectedSeat] = useState(reservationData.seat);
  const reservedSeats = getFullyReservedSeats();

  const handleSelectSeat = (seatNumber) => {
    setSelectedSeat(seatNumber);
    setReservationData((prevData) => ({
      ...prevData,
      seat: seatNumber,
      // Reset time slots only when the user changes the seat.
      timeSlots: prevData.seat === seatNumber ? prevData.timeSlots : [],
    }));
  };

  const handleConfirm = () => {
    if (selectedSeat) {
      onNavigate('timeSlot');
    }
  };

  return (
    <div className="seat-map-page">
      <h1>座席を選ぶ</h1>
      <p className="subtitle">
        先に座席を選ぶと、その座席で予約可能な時間帯だけを確認できます。
      </p>

      <div className="map-container">
        <SeatMap
          reservedSeats={reservedSeats}
          selectedSeat={selectedSeat}
          onSelectSeat={handleSelectSeat}
        />
      </div>

      <div className="selection-info">
        {selectedSeat ? (
          <p>
            選択中の座席: <strong>{selectedSeat}番</strong>
          </p>
        ) : (
          <p>座席を1つ選ぶと次へ進めます。</p>
        )}
        <p className="reserved-note">グレーの座席は、この日程では終日満席です。</p>
      </div>

      <div className="button-group">
        <button
          onClick={handleConfirm}
          disabled={!selectedSeat}
          className="btn-primary"
        >
          この座席で時間帯を選ぶ
        </button>
        <button
          onClick={() => onNavigate('dateSelect')}
          className="btn-secondary"
        >
          戻る
        </button>
      </div>
    </div>
  );
}

export default SeatMapPage;
