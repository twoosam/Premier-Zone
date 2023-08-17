// viewSwap function
const $topScorers = document.querySelector('.top-scorers-view');
const $teamStandings = document.querySelector('.standings-table-view');
function viewSwap(string) {
  if (string === 'top-scorers') {
    $topScorers.setAttribute('class', 'top-scorers-view');
    $teamStandings.setAttribute('class', 'hidden');
  } else {
    $topScorers.setAttribute('class', 'hidden');
    $teamStandings.setAttribute('class', 'standings-table-view');
  }
}

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
