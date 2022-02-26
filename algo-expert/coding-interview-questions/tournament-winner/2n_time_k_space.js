function tournamentWinner(competitions, results) {
  const HOME_TEAM_WON = 1;

  let bestTeam = '';
  const score = { [bestTeam]: 0 };

  for (let i = 0; i < competitions.length; i++) {
    const [homeTeam, awayTeam] = competitions[i];

    let winningTeam = '';

    if (results[i] === HOME_TEAM_WON) {
      winningTeam = homeTeam
    } else {
      winningTeam = awayTeam;
    }

    if (score[winningTeam] !== undefined) {
      score[winningTeam] = score[winningTeam] + 3;
    } else {
      score[winningTeam] = 3;
    }
  }

  for (const team in score) {
    if (score[team] > score[bestTeam]) {
      bestTeam = team;
    }
  }

  return bestTeam;
}