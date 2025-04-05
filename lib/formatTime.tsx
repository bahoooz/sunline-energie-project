export const formatTime = (timeObj: any) => {
    if (!timeObj) return '';
    const hour = timeObj.hour.toString().padStart(2, '0');
    const minute = timeObj.minute.toString().padStart(2, '0');
    return `${hour}:${minute}`;
  };