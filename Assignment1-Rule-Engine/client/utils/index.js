export function titleCase(str) {
    return str
      .toLowerCase()
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }

  export function formatDateToIST(dateString) {
    const date = new Date(dateString);
    
    // Format the date to IST with day, date, time, and time zone
    return date.toLocaleString('en-GB', {
      timeZone: 'Asia/Kolkata',
      weekday: 'short',   // Sat
      day: '2-digit',     // 19
      month: 'short',     // Oct
      year: 'numeric',    // 2024
      hour: '2-digit',    // 16
      minute: '2-digit',  // 52
      second: '2-digit',  // 09
      hour12: true,      // 24-hour format
    });
  }


export function getArgumentValuesFromJson(args) {
    if (!args || args.length === 0) {
      return '()'; // Return empty parentheses if no arguments
    }
  
    // Map over the args, extract their values, and join them correctly
    const argsString = args.map((arg) => arg.value).join(',');
  
    // Wrap in parentheses
    return `(${argsString})`;
  }