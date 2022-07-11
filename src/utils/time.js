export const millisecondsToTime = s => {
  // Pad to 2 or 3 digits, default is 2
  const pad = (n, z) => {
    z = z || 2;
    return ('00' + n).slice(-z);
  };

  const ms = s % 1000;
  s = (s - ms) / 1000;

  const secs = s % 60;
  s = (s - secs) / 60;

  const mins = s % 60;
  const hrs = (s - mins) / 60;

  let time = '';
  if (hrs > 0) {
    time = `${time}${pad(hrs)}:`;
  }

  if (mins > 0) {
    time = `${time}${pad(mins)}:`;
  }

  time = `${time}${pad(secs)}`;

  return time;
};
