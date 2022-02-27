const loadPlayerDetails = () => {
    const url = `https://www.thesportsdb.com/api/v1/json/2/lookupplayer.php?id=34145937`
    fetch(url)
        .then(res => res.json())
        .then(data => showDetail(data))
}
loadPlayerDetails()

const showDetail = (data) =>{
    const players = data.players;
    const mainDiv = document.getElementById('main');
    for (const player of players) {

        const div = document.createElement('div');
        div.innerHTML =`
        <img src="${player.strThumb}" alt="">
        <p>Date of Birth: ${player.dateBorn}
        <p>Player Name: ${player.strPlayer}
        <p>Player Name: ${player.strDescriptionEN}
        `;
        mainDiv.appendChild(div);
        // console.log(player.strThumb)
    }
}