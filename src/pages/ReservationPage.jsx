import { useState } from 'react';
import WeekCalendar from '../components/WeekCalendar';
import '../styles/ReservationPage.css';

function ReservationPage({ onNavigate, setReservationData, reservationData }) {
  const [weekStart, setWeekStart] = useState(0); // 0 = 今週, 1 = 来週, etc.
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
    // 14日以内という制約
    if (weekStart < 2) {
      setWeekStart(weekStart + 1);
    }
  };

  const handleSelectDate = (date) => {
    setReservationData({ ...reservationData, date: date.toISOString() });
    onNavigate('dateSelect');
  };

  return (
    <div className="reservation-page">
      <h1>予約状況</h1>
      <p className="subtitle">1週間の空き状況を確認して、日付を選択してください。</p>

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