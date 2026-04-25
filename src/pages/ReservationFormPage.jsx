function ReservationFormPage({ onNavigate, reservationData, setReservationData }) {
  return (
    <div className="form-page">
      <h1>予約情報入力</h1>
      <p>（プレースホルダー）</p>
      <button onClick={() => onNavigate('seatMap')}>戻る</button>
    </div>
  );
}

export default ReservationFormPage;