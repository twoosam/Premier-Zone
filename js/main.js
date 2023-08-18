// viewSwap function
const $topScorers = document.querySelector('.top-scorers');
const $teamStandingsview = document.querySelector('.standings-table');
function viewSwap(string) {
  if (string === 'top-scorers') {
    $topScorers.setAttribute('class', 'top-scorers');
    $teamStandingsview.setAttribute('class', 'hidden');
  } else {
    $topScorers.setAttribute('class', 'hidden');
    $teamStandingsview.setAttribute('class', 'standings-table');
  }
  data.view = string;
}
viewSwap();

// Anchor for when Standings is clicked
const $standingsAnchor = document.querySelector('.standings-anchor');
function eventHandlerStandings() {
  viewSwap('standings-table');
}
$standingsAnchor.addEventListener('click', eventHandlerStandings);

// Anchor for when Top Scorers is clicked
const $topScorersAnchor = document.querySelector('.top-scorers-anchor');
function eventHandlerTopScorers() {
  viewSwap('top-scorers');
}
$topScorersAnchor.addEventListener('click', eventHandlerTopScorers);
