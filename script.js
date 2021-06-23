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
  searchBar.value = ""
  clearList(upcoming1)
})

// async function leagueData(game) {
//   try {
//     const response = await axios.get(`${DOMAIN}/${game}/leagues?page[size]=100&token=${TOKEN}`)
//     games = response.data
//     console.log(games)
//     renderTounreyList(games)
//     for (let i = 0; i < response.data.length; i++) {

//     }

    
//   } catch (error) {
//     console.error(error)
//   }
// }
// async function seriesData(game) {
//   try {
//     const response = await axios.get(`${DOMAIN}/${game}/series?page[size]=100&token=${TOKEN}`)
//     // console.log(response.data)
//     games = response.data
//     // renderTounreyList(game)
//     for (let i = 0; i < response.data.length; i++) {
//         console.log(response.data[i])
//     }
    
//   } catch (error) {
//     console.error(error)
//   }
// }

async function matchData(game) {
  try {
    const response = await axios.get(`${DOMAIN}/${game}/matches?page[size]=100&token=${TOKEN}`)
    matches = response.data
  
    renderMatchList(matches)
    for (let i = 0; i < matches.length; i++) {
        console.log(matches[i])
    }
    
  } catch (error) {
    console.error(error)
  }
}



function renderTounreyList(game) {
    for (let i = 0; i < game.length; i++) {
      
      const league = document.createElement('h3')
      league.textContent = game[i].league.name
      upcoming1.append(league)

      const series = document.createElement('h4')
      series.textContent = game[i].series[i]
      upcoming1.append(series)

      const games = document.createElement('h5')
      games.textContent = game[i].name
      upcoming1.append(games)
      
      // const stats = document.createElement('p')
      // stats.textContent = game[i].series[i]
      // upcoming1.append(stats)

      const leagueimg = document.createElement('img')
      leagueimg.setAttribute('src', game[i].image_url)
      upcoming1.append(leagueimg)
      
    }
}

function renderMatchList(game) {
  for (let i = 0; i < game.length; i++) {
    
    const league = document.createElement('h3')
    league.textContent = game[i].league.name
    upcoming1.append(league)

    const series = document.createElement('h4')
    series.textContent = game[i].serie.full_name
    upcoming1.append(series)

    const games = document.createElement('h5')
    games.textContent = game[i].name
    upcoming1.append(games)

    // const games = document.createElement('h3')
    // games.textContent = game[i].name
    // upcoming1.append(games)
    
    // const results = document.createElement('p')
    // results.textContent = game[i].winner.name
    // upcoming1.append(results)

    // const leagues = document.createElement('p')
    // leagues.textContent = game[i].league.name
    // upcoming1.append(leagues)

    const stream = document.createElement('a')
    stream.setAttribute('href', game[i].official_stream_url)
    stream.textContent = `Stream`
    upcoming1.append(stream)
  }
}

function clearList(elementToRemove) {
  while (elementToRemove.lastChild) {
    elementToRemove.removeChild(elementToRemove.lastChild)
  }
}