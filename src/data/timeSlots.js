export const TIME_SLOTS = [
  { id: 'slot-1300', label: '13:00〜13:55', startTime: '13:00', endTime: '13:55' },
  { id: 'slot-1400', label: '14:00〜14:55', startTime: '14:00', endTime: '14:55' },
  { id: 'slot-1500', label: '15:00〜15:55', startTime: '15:00', endTime: '15:55' },
  { id: 'slot-1600', label: '16:00〜16:55', startTime: '16:00', endTime: '16:55' },
  { id: 'slot-1700', label: '17:00〜17:55', startTime: '17:00', endTime: '17:55' },
  { id: 'slot-1800', label: '18:00〜18:55', startTime: '18:00', endTime: '18:55' },
  { id: 'slot-1900', label: '19:00〜19:55', startTime: '19:00', endTime: '19:55' },
  { id: 'slot-2000', label: '20:00〜20:55', startTime: '20:00', endTime: '20:55' },
  { id: 'slot-2100', label: '21:00〜21:55', startTime: '21:00', endTime: '21:55' },
];

const SEAT_NUMBERS = Array.from({ length: 20 }, (_, index) => index + 1);

// Keep this data behind functions so it can be swapped for an API later.
const AVAILABLE_SLOT_IDS_BY_SEAT = {
  1: ['slot-1300', 'slot-1400', 'slot-1500', 'slot-1600', 'slot-1700'],
  2: ['slot-1400', 'slot-1500', 'slot-1700', 'slot-1800', 'slot-1900'],
  3: ['slot-1300', 'slot-1600', 'slot-1800'],
  4: ['slot-1300', 'slot-1400', 'slot-1500', 'slot-1800', 'slot-2000'],
  5: ['slot-1500', 'slot-1600', 'slot-1700', 'slot-1800'],
  6: ['slot-1300', 'slot-1400', 'slot-1600', 'slot-1900'],
  7: [],
  8: ['slot-1400', 'slot-1500', 'slot-1600', 'slot-1700', 'slot-1800', 'slot-1900'],
  9: ['slot-1300', 'slot-1700', 'slot-1800', 'slot-2000'],
  10: ['slot-1300', 'slot-1400', 'slot-1500', 'slot-1600', 'slot-1700', 'slot-1800'],
  11: [],
  12: ['slot-1500', 'slot-1600', 'slot-1700', 'slot-1800', 'slot-1900', 'slot-2000'],
  13: ['slot-1300', 'slot-1400', 'slot-1800', 'slot-1900'],
  14: ['slot-1300', 'slot-1400', 'slot-1600'],
  15: ['slot-1700', 'slot-1800', 'slot-1900', 'slot-2000', 'slot-2100'],
  16: ['slot-1300', 'slot-1400', 'slot-1500', 'slot-1600', 'slot-2100'],
  17: ['slot-1400', 'slot-1500', 'slot-1600', 'slot-1700', 'slot-1800', 'slot-2100'],
  18: [],
  19: ['slot-1300', 'slot-1500', 'slot-1700', 'slot-1900', 'slot-2100'],
  20: ['slot-1400', 'slot-1600', 'slot-1800', 'slot-2000'],
};

export function getTimeSlotsBySeat(seatNumber) {
  const availableSlotIds = new Set(AVAILABLE_SLOT_IDS_BY_SEAT[seatNumber] || []);

  return TIME_SLOTS.map((slot) => ({
    ...slot,
    isAvailable: availableSlotIds.has(slot.id),
  }));
}

export function getFullyReservedSeats() {
  return SEAT_NUMBERS.filter(
    (seatNumber) => getTimeSlotsBySeat(seatNumber).every((slot) => !slot.isAvailable)
  );
}
