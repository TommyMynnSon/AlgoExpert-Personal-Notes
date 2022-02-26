function tournamentWinner(competitions, results) {
  const HOME_TEAM_WON = 1;

  let bestTeam = '';
  const scores = { [bestTeam]: 0 };

  for (const i in competitions) {
    const result = results[i];
    const [homeTeam, awayTeam] = competitions[i];

    const winningTeam = result === HOME_TEAM_WON ? homeTeam : awayTeam;

    updateScores(scores, winningTeam, 3);

    scores[winningTeam] > scores[bestTeam] && (bestTeam = winningTeam);
  }

  return bestTeam;
}

function updateScores(scores, team, points) {
  scores[team] !== undefined ? scores[team] += points : scores[team] = 3;
}