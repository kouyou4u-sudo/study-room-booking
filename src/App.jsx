import { useState } from 'react';
import './App.css';

// ページコンポーネント
import TopPage from './pages/TopPage';
import ReservationPage from './pages/ReservationPage';
import DateSelectPage from './pages/DateSelectPage';
import TimeSlotPage from './pages/TimeSlotPage';
import SeatMapPage from './pages/SeatMapPage';
import ReservationFormPage from './pages/ReservationFormPage';
import ConfirmPage from './pages/ConfirmPage';
import CompletePage from './pages/CompletePage';

function App() {
  // 画面遷移を管理するステート
  const [currentPage, setCurrentPage] = useState('top');

  // 予約データを管理するステート
  const [reservationData, setReservationData] = useState({
    date: null,
    timeSlot: null,
    seat: null,
    studentName: '',
    grade: '',
    email: '',
    phone: '',
    note: '',
  });

  // ページレンダリング
  const renderPage = () => {
    switch (currentPage) {
      case 'top':
        return <TopPage onNavigate={setCurrentPage} />;
      
      case 'reservation':
        return (
          <ReservationPage 
            onNavigate={setCurrentPage}
            reservationData={reservationData}
            setReservationData={setReservationData}
          />
        );
      
      case 'dateSelect':
        return (
          <DateSelectPage 
            onNavigate={setCurrentPage}
            reservationData={reservationData}
          />
        );
      
      case 'timeSlot':
        return (
          <TimeSlotPage 
            onNavigate={setCurrentPage}
            reservationData={reservationData}
            setReservationData={setReservationData}
          />
        );
      
      case 'seatMap':
        return (
          <SeatMapPage 
            onNavigate={setCurrentPage}
            reservationData={reservationData}
            setReservationData={setReservationData}
          />
        );
      
      case 'form':
        return (
          <ReservationFormPage 
            onNavigate={setCurrentPage}
            reservationData={reservationData}
            setReservationData={setReservationData}
          />
        );
      
      case 'confirm':
        return (
          <ConfirmPage 
            onNavigate={setCurrentPage}
            reservationData={reservationData}
          />
        );
      
      case 'complete':
        return <CompletePage onNavigate={setCurrentPage} />;
      
      default:
        return <TopPage onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="app">
      {renderPage()}
    </div>
  );
}

export default App;