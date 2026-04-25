import { useState } from 'react';
import './App.css';

import TopPage from './pages/TopPage';
import ReservationPage from './pages/ReservationPage';
import DateSelectPage from './pages/DateSelectPage';
import SeatMapPage from './pages/SeatMapPage';
import TimeSlotPage from './pages/TimeSlotPage';
import ReservationFormPage from './pages/ReservationFormPage';
import ConfirmPage from './pages/ConfirmPage';
import CompletePage from './pages/CompletePage';

function App() {
  const [currentPage, setCurrentPage] = useState('top');
  const [reservationData, setReservationData] = useState({
    date: null,
    timeSlots: [],
    seat: null,
    studentName: '',
    grade: '',
    email: '',
    phone: '',
    note: '',
  });

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

      case 'seatMap':
        return (
          <SeatMapPage
            onNavigate={setCurrentPage}
            reservationData={reservationData}
            setReservationData={setReservationData}
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

  return <div className="app">{renderPage()}</div>;
}

export default App;
