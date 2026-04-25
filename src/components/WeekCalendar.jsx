import '../styles/WeekCalendar.css';

function WeekCalendar({ weekStart, today, onSelectDate }) {
  // 7日分の日付配列を作成
  const weekDates = [];
  for (let i = 0; i < 7; i++) {
    const date = new Date(today);
    date.setDate(date.getDate() + weekStart + i);
    weekDates.push(date);
  }

  // 日付フォーマット
  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}/${month}/${day}`;
  };

  // 曜日を取得
  const getDayOfWeek = (date) => {
    const days = ['日', '月', '火', '水', '木', '金', '土'];
    return days[date.getDay()];
  };

  // ダミー：空き状況を返す（後で API から取得）
  const getAvailability = (date) => {
    const random = Math.random();
    if (random > 0.7) return '×'; // 満席
    if (random > 0.4) return '△'; // 残席わずか
    return '○'; // 空きあり
  };

  return (
    <div className="week-calendar">
      <div className="calendar-grid">
        {weekDates.map((date, index) => (
          <div 
            key={index}
            className="calendar-day"
            onClick={() => onSelectDate(date)}
          >
            <div className="date-label">
              {date.getDate()}日
              <span className="day-of-week">({getDayOfWeek(date)})</span>
            </div>
            <div className={`availability availability-${getAvailability(date)}`}>
              {getAvailability(date)}
            </div>
            <button className="btn-select">選択する</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WeekCalendar;