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
const leagueOfLegends = "lol"
const callOfDuty = "codmw"
const counterStrike = "csgo"
const valorant = "valorant"
const overWatch = "ow"


btn.addEventListener('click', () => {
  // leagueData(searchBar.value)
  seriesData(searchBar.value)
  searchBar.value = ""
})

async function leagueData(game) {
  try {
    const response = await axios.get(`${DOMAIN}/${game}/leagues?page[size]=100&token=${TOKEN}`)
    for (let i = 0; i < response.data.length; i++) {
      console.log(response.data[i])
      
    }
    
  } catch (error) {
    console.error(error)
  }
}
async function seriesData(game) {
  try {
    const response = await axios.get(`${DOMAIN}/${game}/series?page[size]=100&token=${TOKEN}`)
    // console.log(response.data)
    for (let i = 0; i < response.data.length; i++) {
        console.log(response.data[i])
    }
    
  } catch (error) {
    console.error(error)
  }
}



function renderTounreyList(game) {
    for (let i = 0; i < game.length; i++) {
      
      const games = document.createElement('h3')
      games.textContent = game[i].league
      upcoming1.append(games)
      
      const stats = document.createElement('p')
      stats.textContent = game[i]
      
    }
}