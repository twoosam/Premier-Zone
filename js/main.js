const $topScorers = document.querySelector('.top-scorers');
const $teamStandings = document.querySelector('.standings-table');
function viewSwap(string) {
  if (string === 'top-scorers') {
    $topScorers.setAttribute('class', '.top-scorers');
    $teamStandings.setAttribute('class', 'hidden');
  } else {
    $topScorers.setAttribute('class', 'hidden');
    $teamStandings.setAttribute('class', '.standings-table');
  }
}
viewSwap();
