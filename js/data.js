/* exported data */
const $teamStandings = document.querySelector('#appendTeams');
function getPremierLeagueData() {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://v3.football.api-sports.io/standings?league=39&season=2023');
  xhr.setRequestHeader('x-rapidapi-host', 'v3.football.api-sports.io');
  xhr.setRequestHeader('x-apisports-key', '8ad7209e9e0a016c96f4e199bed14b5c');
  xhr.responseType = 'json';
  xhr.addEventListener('load', function () {
    // console.log(xhr.status);
    // console.log(xhr.response);
    for (let i = 0; i < xhr.response.response[0].league.standings[0].length; i++) {
      const $newTr = document.createElement('tr');
      const $newTdLogo = document.createElement('img');
      const $newTdTeam = document.createElement('td');
      const $newTdWin = document.createElement('td');
      const $newTdDraw = document.createElement('td');
      const $newTdLoss = document.createElement('td');
      const $newTdPoints = document.createElement('td');
      $teamStandings.appendChild($newTr);
      $newTdTeam.textContent = xhr.response.response[0].league.standings[0][i].rank + ' ' + xhr.response.response[0].league.standings[0][i].team.name;
      $newTr.appendChild($newTdTeam);
      $newTdLogo.setAttribute('src', xhr.response.response[0].league.standings[0][i].team.logo);
      $newTdTeam.appendChild($newTdLogo);
      $newTdWin.textContent = xhr.response.response[0].league.standings[0][i].all.win;
      $newTdWin.setAttribute('class', 'center-standing');
      $newTr.appendChild($newTdWin);
      $newTdDraw.textContent = xhr.response.response[0].league.standings[0][i].all.draw;
      $newTdDraw.setAttribute('class', 'center-standing');
      $newTr.appendChild($newTdDraw);
      $newTdLoss.textContent = xhr.response.response[0].league.standings[0][i].all.lose;
      $newTdLoss.setAttribute('class', 'center-standing');
      $newTr.appendChild($newTdLoss);
      $newTdPoints.textContent = xhr.response.response[0].league.standings[0][i].points;
      $newTdPoints.setAttribute('class', 'center-standing');
      $newTr.appendChild($newTdPoints);
    }
  });
  xhr.send();
}
getPremierLeagueData();
