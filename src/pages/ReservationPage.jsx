import { useState } from 'react';
import WeekCalendar from '../components/WeekCalendar';
import '../styles/ReservationPage.css';

function ReservationPage({ onNavigate }) {
  const [currentWeekStart, setCurrentWeekStart] = useState(0); // 0 = 今週, 7 = 来週

  // 今日の日付を取得
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  // 14日先までの制限
  const maxDays = 14;

  // 「前の週」ボタン
  const handlePrevWeek = () => {
    if (currentWeekStart >= 7) {
      setCurrentWeekStart(currentWeekStart - 7);
    }
  };

  // 「次の週」ボタン
  const handleNextWeek = () => {
    if (currentWeekStart + 7 < maxDays) {
      setCurrentWeekStart(currentWeekStart + 7);
    }
  };

  return (
    <div className="reservation-page">
      <h1>予約状況</h1>
      <p className="subtitle">1週間の空き状況を確認して、日付を選択してください。</p>

      <div className="calendar-controls">
        <button 
          onClick={handlePrevWeek}
          disabled={currentWeekStart === 0}
          className="btn btn-secondary"
        >
          ← 前の週
        </button>
        <span className="week-label">
          {currentWeekStart === 0 ? '今週' : `${Math.floor(currentWeekStart / 7)}週目`}
        </span>
        <button 
          onClick={handleNextWeek}
          disabled={currentWeekStart + 7 >= maxDays}
          className="btn btn-secondary"
        >
          次の週 →
        </button>
      </div>

      <WeekCalendar 
        weekStart={currentWeekStart}
        today={today}
        onSelectDate={(date) => {
          onNavigate('dateSelect');
        }}
      />

      <button 
        onClick={() => onNavigate('top')}
        className="btn btn-back"
      >
        戻る
      </button>
    </div>
  );
}

export default ReservationPage;