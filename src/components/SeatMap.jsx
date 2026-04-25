import '../styles/SeatMap.css';

function SeatMap({ reservedSeats, selectedSeat, onSelectSeat }) {
  // 座席レイアウト定義
  const SEAT_LAYOUT = {
    row1: [1, 2, 3, 4, 5],           // 上段（上の壁向き）
    row2Top: [6, 7, 8, 9, 10],       // 中段上（向かい合わせペア上）
    row2Bottom: [11, 12, 13, 14, 15], // 中段下（向かい合わせペア下）
    row3: [16, 17, 18, 19, 20],      // 下段（下の壁向き）
  };

  const getSeatStatus = (seatNumber) => {
    if (reservedSeats.includes(seatNumber)) return 'reserved';
    if (selectedSeat === seatNumber) return 'selected';
    return 'available';
  };

  const renderSeatRow = (seats) => {
    return (
      <div className="seat-row">
        {seats.map((seatNumber) => (
          <button
            key={seatNumber}
            className={`seat seat-${getSeatStatus(seatNumber)}`}
            onClick={() => {
              if (!reservedSeats.includes(seatNumber)) {
                onSelectSeat(seatNumber);
              }
            }}
            disabled={reservedSeats.includes(seatNumber)}
          >
            {seatNumber}
          </button>
        ))}
      </div>
    );
  };

  return (
    <div className="seat-map">
      <div className="entrance">入口</div>

      <div className="seat-grid">
        <div className="row-label">上段</div>
        {renderSeatRow(SEAT_LAYOUT.row1)}

        <div className="row-label">中段</div>
        {renderSeatRow(SEAT_LAYOUT.row2Top)}
        <div className="separator">～対面～</div>
        {renderSeatRow(SEAT_LAYOUT.row2Bottom)}

        <div className="row-label">下段</div>
        {renderSeatRow(SEAT_LAYOUT.row3)}
      </div>

      <div className="seat-legend">
        <div className="legend-item">
          <span className="legend-seat seat-available">　</span>
          <span>空席</span>
        </div>
        <div className="legend-item">
          <span className="legend-seat seat-selected">　</span>
          <span>選択中</span>
        </div>
        <div className="legend-item">
          <span className="legend-seat seat-reserved">　</span>
          <span>予約済み</span>
        </div>
      </div>
    </div>
  );
}

export default SeatMap;