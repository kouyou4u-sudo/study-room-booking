import '../styles/WeekCalendar.css';

function WeekCalendar({ weekStart, today, onSelectDate }) {
  // 7日分の日付を生成
  const weekDates = [];
  for (let i = 0; i < 7; i++) {
    const date = new Date(weekStart);
    date.setDate(weekStart.getDate() + i);
    weekDates.push(date);
  }

  // 曜日を取得
  const getDayOfWeek = (date) => {
    const days = ['日', '月', '火', '水', '木', '金', '土'];
    return days[date.getDay()];
  };

  // 日付をフォーマット（例：25日（日））
  const formatDate = (date) => {
    const day = date.getDate();
    const dayOfWeek = getDayOfWeek(date);
    return `${day}日（${dayOfWeek}）`;
  };

  // MVPでは日付単位の空き状況は全日「空きあり」として表示する
  // 実際の満席判定は、座席・時間帯選択時にAPI側で行う
  const getAvailability = () => {
    return '○';
  };

  return (
    <div className="week-calendar">
      <div className="calendar-grid">
        {weekDates.map((date) => {
          const dateKey = date.toISOString().split('T')[0];

          return (
            <div key={dateKey} className="calendar-day">
              <div className="date-label">{formatDate(date)}</div>
              <div className="status-icon">{getAvailability()}</div>
              <button
                onClick={() => onSelectDate(date)}
                className="btn-select"
              >
                選択する
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default WeekCalendar;