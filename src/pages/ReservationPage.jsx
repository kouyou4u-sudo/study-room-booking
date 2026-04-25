import { useState } from 'react';
import WeekCalendar from '../components/WeekCalendar';
import '../styles/ReservationPage.css';

function ReservationPage({ onNavigate, setReservationData, reservationData }) {
  const [weekStart, setWeekStart] = useState(0);
  const today = new Date();
  const currentWeekStart = new Date(today);
  currentWeekStart.setDate(today.getDate() - today.getDay());

  const displayWeekStart = new Date(currentWeekStart);
  displayWeekStart.setDate(currentWeekStart.getDate() + weekStart * 7);

  const handlePreviousWeek = () => {
    if (weekStart > 0) {
      setWeekStart(weekStart - 1);
    }
  };

  const handleNextWeek = () => {
    if (weekStart < 2) {
      setWeekStart(weekStart + 1);
    }
  };

  const handleSelectDate = (date) => {
    // When the date changes, seat and time slots should be selected again.
    setReservationData({
      ...reservationData,
      date: date.toISOString(),
      seat: null,
      timeSlots: [],
    });
    onNavigate('dateSelect');
  };

  return (
    <div className="reservation-page">
      <h1>予約日を選ぶ</h1>
      <p className="subtitle">
        1週間ごとのカレンダーから利用したい日付を選択してください。
      </p>

      <div className="calendar-controls">
        <button
          onClick={handlePreviousWeek}
          disabled={weekStart === 0}
          className="btn-nav"
        >
          ← 前の週
        </button>
        <button
          onClick={handleNextWeek}
          disabled={weekStart >= 2}
          className="btn-nav"
        >
          次の週 →
        </button>
      </div>

      <WeekCalendar
        weekStart={displayWeekStart}
        today={today}
        onSelectDate={handleSelectDate}
      />

      <div className="button-group">
        <button
          onClick={() => onNavigate('top')}
          className="btn btn-secondary"
        >
          戻る
        </button>
      </div>
    </div>
  );
}

export default ReservationPage;
