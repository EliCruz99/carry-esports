const DOMAIN = "https://api.pandascore.co/";
const TOKEN = "eatsq_09CwuFxH5ZuhF65XB0EGLMdNl9HTtDMS01g9qpakQItnc"
const searchBar = document.querySelector('#game-search')
const btn = document.querySelector('#Search')


async function tourneyData(game) {
  try {
    const response = await axios.get(`https://api.pandascore.co/tournaments?token=${TOKEN}`)
    console.log(response)
    
  } catch (error) {
    console.error(error)
  }
}

// tourneyData('csgo')
btn.addEventListener('click', () => {
  console.log(searchBar.value)
  searchBar.value = ""
})
