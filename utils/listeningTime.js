const listeningTime = (time) => {
  const hours = time.slice(1, 2);
  const minutes = time.slice(3, 5);

  const timeArray = [];

  if (hours >= 1) {
    timeArray.push(`${hours} ${hours > 1 ? 'hours' : 'hour'}`);
  }

  timeArray.push(`${minutes} ${minutes > 1 ? 'mins' : 'min'}`);

  return timeArray.join(', ');
};

console.log(listeningTime('00:31:45'));
