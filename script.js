const DOMAIN = "https://agile-lake-43212.herokuapp.com/api.pandascore.co";
const TOKEN = "eatsq_09CwuFxH5ZuhF65XB0EGLMdNl9HTtDMS01g9qpakQItnc"
const searchBar = document.querySelector('#game-search')
const homeBtn = document.querySelector('.title')
const schedule = document.querySelector('.schedule')
const btn = document.querySelector('#Search')
const lol = document.querySelector('.lol')
const cod = document.querySelector('.cod')
const csgo = document.querySelector('.cs')
const val = document.querySelector('.val')
const ow = document.querySelector('.ow')
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

homeBtn.addEventListener('click', () => {
  card1Render(counterStrike)
  card2Render(leagueOfLegends)
  card3Render(valorant)
  pastCard1Render(counterStrike)
  pastCard2Render(leagueOfLegends)
  pastCard3Render(valorant)
  clearCard(upcoming1)
  clearCard(upcoming2)
  clearCard(upcoming3)
  clearCard(past1)
  clearCard(past2)
  clearCard(past3)

})
lol.addEventListener('click', () => {
  matchData(leagueOfLegends)
  previousmatchData(leagueOfLegends)
  clearCard(upcoming1)
  clearCard(upcoming2)
  clearCard(upcoming3)
  clearCard(past1)
  clearCard(past2)
  clearCard(past3)
})
val.addEventListener('click', () => {
  matchData(valorant)
  previousmatchData(valorant)
  clearCard(upcoming1)
  clearCard(upcoming2)
  clearCard(upcoming3)
  clearCard(past1)
  clearCard(past2)
  clearCard(past3)
})
cod.addEventListener('click', () => {
  matchData(callOfDuty)
  previousmatchData(callOfDuty)
  clearCard(upcoming1)
  clearCard(upcoming2)
  clearCard(upcoming3)
  clearCard(past1)
  clearCard(past2)
  clearCard(past3)
})
csgo.addEventListener('click', () => {
  matchData(counterStrike)
  previousmatchData(counterStrike)
  clearCard(upcoming1)
  clearCard(upcoming2)
  clearCard(upcoming3)
  clearCard(past1)
  clearCard(past2)
  clearCard(past3)
})
ow.addEventListener('click', () => {
  matchData(overWatch)
  previousmatchData(overWatch)
  clearCard(upcoming1)
  clearCard(upcoming2)
  clearCard(upcoming3)
  clearCard(past1)
  clearCard(past2)
  clearCard(past3)
})
btn.addEventListener('click', () => {
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

// Match Data

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
    pastMatchList1(matches[0])
    pastMatchList2(matches[1])
    pastMatchList3(matches[2])
  
    
  } catch (error) {
    console.error(error)
  }
}
async function scheduleData() {
  try {
    const upcoming = await axios.get(`${DOMAIN}/matches/upcoming?page[size]=10&token=${TOKEN}`)
    const current = await axios.get(`${DOMAIN}/matches/running?page[size]=10&token=${TOKEN}`)
    const past = await axios.get(`${DOMAIN}/matches/past?page[size]=10&token=${TOKEN}`)
    const upcomingMatches = upcoming.data
    const runningMatches = current.data
    const prevMatches = past.data
    console.log(upcomingMatches)
    scheduleCard(upcomingMatches)
    scheduleCard(runningMatches)
    scheduleCard(prevMatches)
  } catch (error) {
    
  }
}
scheduleData()

// Render individual cards

async function card1Render(game) {
  try {
    const future = await axios.get(`${DOMAIN}/${game}/matches/upcoming?token=${TOKEN}`)
    const upcoming = future.data
    renderMatchList1(upcoming[0])
  } catch (error) {
    console.error(error)
  }
}
async function card2Render(game) {
  try {
    const future = await axios.get(`${DOMAIN}/${game}/matches/upcoming?token=${TOKEN}`)
    const upcoming = future.data
    renderMatchList2(upcoming[0])
  } catch (error) {
    console.error(error)
  }
}
async function card3Render(game) {
  try {
    const future = await axios.get(`${DOMAIN}/${game}/matches/upcoming?token=${TOKEN}`)
    const upcoming = future.data
    renderMatchList3(upcoming[0])
  } catch (error) {
    console.error(error)
  }
 }
card1Render(leagueOfLegends)
card2Render(counterStrike)
card3Render(valorant)

async function pastCard1Render(game) {
  try {
    const previous = await axios.get(`${DOMAIN}/${game}/matches/past?token=${TOKEN}`)
    const pastGame = previous.data
    pastMatchList1(pastGame[0])
  } catch (error) {
    console.error(error)
  }
}
async function pastCard2Render(game) {
  try {
    const previous = await axios.get(`${DOMAIN}/${game}/matches/past?token=${TOKEN}`)
    const pastGame = previous.data

    pastMatchList2(pastGame[0])
  } catch (error) {
    console.error(error)
  }
}
async function pastCard3Render(game) {
  try {
    const previous = await axios.get(`${DOMAIN}/${game}/matches/past?token=${TOKEN}`)
    const pastGame = previous.data

    pastMatchList3(pastGame[0])
  } catch (error) {
    console.error(error)
  }
}
pastCard1Render(leagueOfLegends)
pastCard2Render(counterStrike)
pastCard3Render(valorant)

// Match list renders

function renderMatchList1(game) {

  // const league = document.createElement('h3')
  // league.textContent = game.league.name
  // upcoming1.append(league)
  
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

  // const league = document.createElement('h3')
  // league.textContent = game.league.name
  // upcoming2.append(league)

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

  // const league = document.createElement('h3')
  // league.textContent = game.league.name
  // upcoming3.append(league)
  
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

  // const league = document.createElement('h3')
  // league.textContent = game.league.name
  // past1.append(league)
  
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

  // const league = document.createElement('h3')
  // league.textContent = game.league.name
  // past2.append(league)
  
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

  // const league = document.createElement('h3')
  // league.textContent = game.league.name
  // past3.append(league)
  
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

function scheduleCard(scheduleData) {
  for (let i = 0; i < scheduleData.length; i++) {


    const league = document.createElement('p')
    league.textContent = scheduleData[i].videogame.name
    schedule.append(league)

    const leagueimg = document.createElement('img')
    leagueimg.setAttribute('src', scheduleData[i].league.image_url)
    leagueimg.style = "display: block;"
    league.append(leagueimg)
  

    const series = document.createElement('p')
    series.textContent = scheduleData[i].serie.full_name
    league.append(series)

    const games = document.createElement('p')
    games.textContent = scheduleData[i].begin_at
    league.append(games)
  }
}

 // Clear Card divs

function clearCard(elementToRemove) {
  while (elementToRemove.lastChild) {
    elementToRemove.removeChild(elementToRemove.lastChild)
  }
}




