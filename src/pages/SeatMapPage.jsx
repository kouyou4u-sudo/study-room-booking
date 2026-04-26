import { useState, useEffect } from 'react';
import SeatMap from '../components/SeatMap';
import './styles/SeatMapPage.css';

function SeatMapPage({ onNavigate, reservationData, setReservationData }) {
  const [selectedSeat, setSelectedSeat] = useState(reservationData.seat);
  const [reservedSeats, setReservedSeats] = useState([]);
  const [loading, setLoading] = useState(true);

  // APIから予約済み座席を取得
  useEffect(() => {
    if (!reservationData.date || !reservationData.timeSlot) {
      setLoading(false);
      return;
    }

    const fetchReservedSeats = async () => {
      try {
        const response = await fetch(
          `http://localhost:8000/api/reservations/seats?date=${reservationData.date}&time_slot=${encodeURIComponent(reservationData.timeSlot)}`
        );
        const data = await response.json();
        setReservedSeats(data.booked_seats || []);
      } catch (error) {
        console.error('Error fetching reserved seats:', error);
        setReservedSeats([]);
      } finally {
        setLoading(false);
      }
    };

    fetchReservedSeats();
  }, [reservationData.date, reservationData.timeSlot]);

  const handleSelectSeat = (seatNumber) => {
    setSelectedSeat(seatNumber);
    setReservationData((prevData) => ({
      ...prevData,
      seat: seatNumber,
    }));
  };

  const handleConfirm = () => {
    if (selectedSeat) {
      onNavigate('timeSlot');
    }
  };

  if (loading) {
    return <div className="seat-map-page"><p>読み込み中...</p></div>;
  }

  return (
    <div className="seat-map-page">
      <h1>座席を選ぶ</h1>
      <p className="subtitle">
        前の座席を選ぶと、その座席で予約可能な時間帯だけ確認できます。
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
            選択中の座席：<strong>{selectedSeat}番</strong>
          </p>
        ) : (
          <p>座席を1つ選ぶと次へ進めます。</p>
        )}
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