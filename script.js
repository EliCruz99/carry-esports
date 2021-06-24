// Game arrays
// series Dota 2 
// LEAGUES ESL CSGO leagues 21
// LEAGUES lcs[27] lec[28] LPL[9] LCK[64] LOL
// LEAGUES cod [0] codLeague
// LEAGUES valorant champ tours [9]NA[35] EU[34]
// LEAGUES ow [5]

const DOMAIN = "https://agile-lake-43212.herokuapp.com/api.pandascore.co";
const TOKEN = "eatsq_09CwuFxH5ZuhF65XB0EGLMdNl9HTtDMS01g9qpakQItnc"
const searchBar = document.querySelector('#game-search')
const btn = document.querySelector('#Search')
const upcoming1 = document.querySelector('.upcoming1')
const upcoming2 = document.querySelector('.upcoming2')
const upcoming3 = document.querySelector('.upcoming3')
const past1 = document.querySelector('.past1')
const past2 = document.querySelector('.past2')
const past3 = document.querySelector('.past3')
const leagueOfLegends = "lol"
const callOfDuty = "codmw"
const counterStrike = "csgo"
const valorant = "valorant"
const overWatch = "ow"



btn.addEventListener('click', () => {
  // leagueData(searchBar.value)
  // seriesData(searchBar.value)
  matchData(searchBar.value)
  previousmatchData(searchBar.value)
  searchBar.value = ""
  clearCard(upcoming1)
  clearCard(upcoming2)
  clearCard(upcoming3)
  clearCard(past1)
  clearCard(past2)
  clearCard(past3)
})


async function matchData(game) {
  try {
    const response = await axios.get(`${DOMAIN}/${game}/matches/upcoming?page[size]=100&token=${TOKEN}`)
    matches = response.data
    // console.log(matches)
    renderMatchList1(matches[0])
    renderMatchList2(matches[1])
    renderMatchList3(matches[2])
    
    
  } catch (error) {
    console.error(error)
  }
}
async function previousmatchData(game) {
  try {
    const response = await axios.get(`${DOMAIN}/${game}/matches/past?page[size]=100&token=${TOKEN}`)
    matches = response.data
    console.log(matches)
    pastMatchList1(matches[0])
    pastMatchList2(matches[1])
    pastMatchList3(matches[2])
  
    
  } catch (error) {
    console.error(error)
  }
}




function renderMatchList1(game) {

  const league = document.createElement('h3')
  league.textContent = game.league.name
  upcoming1.append(league)
  
  const leagueimg = document.createElement('img')
  leagueimg.setAttribute('src', game.league.image_url)
  leagueimg.style = "max-width: 50%;"
  upcoming1.append(leagueimg)

  const series = document.createElement('h4')
  series.textContent = game.serie.full_name
  upcoming1.append(series)

  const games = document.createElement('h5')
  games.textContent = game.name
  upcoming1.append(games)

  const stream = document.createElement('a')
  stream.setAttribute('href', game.official_stream_url)
  stream.textContent = `Stream`
  upcoming1.append(stream)
  
}
function renderMatchList2(game) {

  const league = document.createElement('h3')
  league.textContent = game.league.name
  upcoming2.append(league)

  const leagueimg = document.createElement('img')
  leagueimg.setAttribute('src', game.league.image_url)
  leagueimg.style = "max-width: 50%;"
  upcoming2.append(leagueimg)

  const series = document.createElement('h4')
  series.textContent = game.serie.full_name
  upcoming2.append(series)

  const games = document.createElement('h5')
  games.textContent = game.name
  upcoming2.append(games)

  const stream = document.createElement('a')
  stream.setAttribute('href', game.official_stream_url)
  stream.textContent = `Stream`
  upcoming2.append(stream)

}
function renderMatchList3(game) {

  const league = document.createElement('h3')
  league.textContent = game.league.name
  upcoming3.append(league)
  
  const leagueimg = document.createElement('img')
  leagueimg.setAttribute('src', game.league.image_url)
  leagueimg.style = "max-width: 50%;"
  upcoming3.append(leagueimg)

  const series = document.createElement('h4')
  series.textContent = game.serie.full_name
  upcoming3.append(series)

  const games = document.createElement('h5')
  games.textContent = game.name
  upcoming3.append(games)

  const stream = document.createElement('a')
  stream.setAttribute('href', game.official_stream_url)
  stream.textContent = `Stream`
  upcoming3.append(stream)

}
function pastMatchList1(game) {

  const league = document.createElement('h3')
  league.textContent = game.league.name
  past1.append(league)
  
  const leagueimg = document.createElement('img')
  leagueimg.setAttribute('src', game.league.image_url)
  leagueimg.style = "max-width: 50%;"
  past1.append(leagueimg)

  const series = document.createElement('h4')
  series.textContent = game.serie.full_name
  past1.append(series)

  const games = document.createElement('h5')
  games.textContent = game.name
  past1.append(games)

  const winner = document.createElement('p')
  winner.textContent = game.winner.name
  past1.append(winner)

}
function pastMatchList2(game) {

  const league = document.createElement('h3')
  league.textContent = game.league.name
  past2.append(league)
  
  const leagueimg = document.createElement('img')
  leagueimg.setAttribute('src', game.league.image_url)
  leagueimg.style = "max-width: 50%;"
  past2.append(leagueimg)

  const series = document.createElement('h4')
  series.textContent = game.serie.full_name
  past2.append(series)

  const games = document.createElement('h5')
  games.textContent = game.name
  past2.append(games)

  const winner = document.createElement('p')
  winner.textContent = game.winner.name
  past2.append(winner)

}
function pastMatchList3(game) {

  const league = document.createElement('h3')
  league.textContent = game.league.name
  past3.append(league)
  
  const leagueimg = document.createElement('img')
  leagueimg.setAttribute('src', game.league.image_url)
  leagueimg.style = "max-width: 50%;"
  past3.append(leagueimg)

  const series = document.createElement('h4')
  series.textContent = game.serie.full_name
  past3.append(series)

  const games = document.createElement('h5')
  games.textContent = game.name
  past3.append(games)

  const winner = document.createElement('p')
  winner.textContent = game.winner.name
  past3.append(winner)
}



function clearCard(elementToRemove) {
  while (elementToRemove.lastChild) {
    elementToRemove.removeChild(elementToRemove.lastChild)
  }
}




