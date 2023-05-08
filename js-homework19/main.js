function checkTeamDealine(speed, points, deadline) {
  let teamSpeed = speed.reduce((sum, speedTeam) => sum + speedTeam, 0);

  let totalPoints = points.reduce((sum, pointsTeam) => sum + pointsTeam, 0);

  let daysNeed = Math.ceil(totalPoints / teamSpeed / 8);

  let today = new Date();
  let millisecondsPerDay = 1000 * 60 * 60 * 24;
  let daysLeft = Math.ceil((deadline - today) / millisecondsPerDay);

  if (daysLeft >= daysNeed) {
    return `Усі завдання будуть успішно виконані за ${daysNeed} днів до настання дедлайну!`;
  } else {
    let extraHours = (daysNeed - daysLeft) * 8;
    return `Команді розробників доведеться витратити додатково ${extraHours} годин після дедлайну, щоб виконати всі завдання в беклозі`;
  }
}

const speed = [6, 7, 3, 5];
const points = [10, 1, 3, 2, 3, 100];
const deadline = new Date("2023-02-28'");

console.log(checkTeamDealine(speed, points, deadline));
