/* exported data */

let data = {
  view: 'standings-view'
};

// Request to API for Standings data
const $teamStandings = document.querySelector('#appendTeams');
function getStandingsData() {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://v3.football.api-sports.io/standings?league=39&season=2023');
  xhr.setRequestHeader('x-rapidapi-host', 'v3.football.api-sports.io');
  xhr.setRequestHeader('x-apisports-key', '8ad7209e9e0a016c96f4e199bed14b5c');
  xhr.responseType = 'json';
  xhr.addEventListener('load', function () {
    for (let i = 0; i < xhr.response.response[0].league.standings[0].length; i++) {
      $teamStandings.appendChild(standingsTable(xhr.response.response[0].league.standings[0][i]));
    }
  });
  // xhr.send();
}
getStandingsData();

// Function to create table for Standings
function standingsTable(xhr) {
  const $newTr = document.createElement('tr');
  const $newTdBlank = document.createElement('td');
  const $newTdRank = document.createElement('ins');
  const $newTdLogo = document.createElement('img');
  const $newTdTeam = document.createElement('ins');
  const $newTdWin = document.createElement('td');
  const $newTdDraw = document.createElement('td');
  const $newTdLoss = document.createElement('td');
  const $newTdPoints = document.createElement('td');
  $newTdBlank.setAttribute('class', 'rank-logo-name');
  $newTr.appendChild($newTdBlank);
  $newTdRank.textContent = xhr.rank;
  $newTdRank.setAttribute('class', 'rank');
  $newTdBlank.appendChild($newTdRank);
  $newTdLogo.setAttribute('src', xhr.team.logo);
  $newTdLogo.setAttribute('class', 'logo-img');
  $newTdBlank.appendChild($newTdLogo);
  $newTdTeam.textContent = xhr.team.name;
  $newTdBlank.appendChild($newTdTeam);
  $newTdWin.textContent = xhr.all.win;
  $newTdWin.setAttribute('class', 'center-standing');
  $newTr.appendChild($newTdWin);
  $newTdDraw.textContent = xhr.all.draw;
  $newTdDraw.setAttribute('class', 'center-standing');
  $newTr.appendChild($newTdDraw);
  $newTdLoss.textContent = xhr.all.lose;
  $newTdLoss.setAttribute('class', 'center-standing');
  $newTr.appendChild($newTdLoss);
  $newTdPoints.textContent = xhr.points;
  $newTdPoints.setAttribute('class', 'center-standing');
  $newTr.appendChild($newTdPoints);

  return $newTr;
}

// Request to API for Top Scorers Data
const $topScorers = document.querySelector('#top-scorers-list');
function getTopScorersData() {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://v3.football.api-sports.io/players/topscorers?league=39&season=2023');
  xhr.setRequestHeader('x-rapidapi-host', 'v3.football.api-sports.io');
  xhr.setRequestHeader('x-apisports-key', '8ad7209e9e0a016c96f4e199bed14b5c');
  xhr.responseType = 'json';
  xhr.addEventListener('load', function () {
    // console.log(xhr.status);
    // console.log(xhr.response);
    for (let i = 0; i < xhr.response.response.length; i++) {
      $topScorers.appendChild(topScorersList(xhr.response.response[i]));
    }
  }
  );
  xhr.send();
}
getTopScorersData();

// Function to create player name and images
function topScorersList(xhr) {
  const $newLi = document.createElement('li');
  const $newPlayer = document.createElement('ins');
  const $newGoals = document.createElement('ins');
  const $newPlayerImg = document.createElement('img');
  $newLi.setAttribute('class', 'col-mobile-3 col-desktop-5');
  $newPlayerImg.setAttribute('src', xhr.player.photo);
  $newPlayerImg.setAttribute('class', 'player-img');
  $newLi.appendChild($newPlayerImg);
  $newPlayer.setAttribute('class', 'player-name');
  $newPlayer.textContent = xhr.player.name;
  $newLi.appendChild($newPlayer);
  $newGoals.setAttribute('class', 'player-goals');
  $newGoals.textContent = ' Goals: ' + xhr.statistics[0].goals.total;
  $newLi.appendChild($newGoals);

  return $newLi;
}
