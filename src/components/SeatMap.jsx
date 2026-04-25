import '../styles/SeatMap.css';

function SeatMap({ selectedSeat, onSelectSeat, reservedSeats = [] }) {
  // 座席配置
  const SEAT_LAYOUT = {
    row1: [1, 2, 3, 4, 5],
    row2Top: [6, 7, 8, 9, 10],
    row2Bottom: [11, 12, 13, 14, 15],
    row3: [16, 17, 18, 19, 20],
  };

  const isSeatReserved = (seatNumber) => reservedSeats.includes(seatNumber);
  const isSeatSelected = (seatNumber) => selectedSeat === seatNumber;

  const renderSeatRow = (seatNumbers, rowClass) => (
    <div className={`seat-row ${rowClass}`}>
      {seatNumbers.map((seatNum) => (
        <div
          key={seatNum}
          className={`seat ${isSeatReserved(seatNum) ? 'reserved' : ''} ${
            isSeatSelected(seatNum) ? 'selected' : ''
          }`}
          onClick={() => {
            if (!isSeatReserved(seatNum)) {
              onSelectSeat(seatNum);
            }
          }}
        >
          {seatNum}
        </div>
      ))}
    </div>
  );

  return (
    <div className="seat-map">
      <div className="map-container">
        {/* 入口 */}
        <div className="entrance">入口</div>

        {/* 1〜5番：上段 */}
        {renderSeatRow(SEAT_LAYOUT.row1, 'row-top')}

        {/* 6〜10番と11〜15番：向かい合わせ */}
        <div className="row-pair">
          {renderSeatRow(SEAT_LAYOUT.row2Top, 'row-2-top')}
          {renderSeatRow(SEAT_LAYOUT.row2Bottom, 'row-2-bottom')}
        </div>

        {/* 16〜20番：下段 */}
        {renderSeatRow(SEAT_LAYOUT.row3, 'row-bottom')}
      </div>

      {/* 凡例 */}
      <div className="seat-legend">
        <div className="legend-item">
          <div className="legend-seat"></div>
          <span>空席</span>
        </div>
        <div className="legend-item">
          <div className="legend-seat selected"></div>
          <span>選択中</span>
        </div>
        <div className="legend-item">
          <div className="legend-seat reserved"></div>
          <span>予約済み</span>
        </div>
      </div>
    </div>
  );
}

export default SeatMap;