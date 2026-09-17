import { useState, useEffect } from 'react';

export interface StoreStatus {
  isOpen: boolean;
  statusText: string;
  timingText: string;
  fullBadgeText: string;
}

export function getStoreStatus(): StoreStatus {
  try {
    const now = new Date();
    // Parse current time in Asia/Kolkata (IST: UTC+5:30)
    const istString = now.toLocaleString('en-US', { timeZone: 'Asia/Kolkata' });
    const istDate = new Date(istString);
    const hour = istDate.getHours();
    const minute = istDate.getMinutes();
    const currentMinutes = hour * 60 + minute;

    const openMinutes = 9 * 60;   // 9:00 AM
    const closeMinutes = 21 * 60; // 9:00 PM

    const isOpen = currentMinutes >= openMinutes && currentMinutes < closeMinutes;

    return {
      isOpen,
      statusText: isOpen ? 'Open Now' : 'Closed Now',
      timingText: isOpen ? 'Closes at 9:00 PM' : 'Opens at 9:00 AM',
      fullBadgeText: isOpen ? 'Open Now • Closes at 9:00 PM' : 'Closed Now • Opens at 9:00 AM'
    };
  } catch {
    return {
      isOpen: true,
      statusText: 'Open Daily',
      timingText: '9:00 AM – 9:00 PM',
      fullBadgeText: 'Open 7 Days • 9:00 AM – 9:00 PM'
    };
  }
}

export function useStoreStatus(): StoreStatus {
  const [status, setStatus] = useState<StoreStatus>(getStoreStatus);

  useEffect(() => {
    const interval = setInterval(() => {
      setStatus(getStoreStatus());
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  return status;
}
