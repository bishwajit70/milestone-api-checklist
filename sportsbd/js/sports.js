const allPlayer = () => {
    const searchValue = document.getElementById('search-input').value;
    console.log(searchValue);

    const url = `https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${searchValue}`
    console.log(url);
    fetch(url)
        .then(res => res.json())
        .then(data => showPlayer(data.player))

}
allPlayer()
const showPlayer = (players) => {

    for (const player of players) {
        console.log(player);
    }
}
