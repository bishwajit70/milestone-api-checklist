// const loadData = ()=>{
//     fetch('https://jsonplaceholder.typicode.com/posts')
//         .then(response => response.json())
//         .then(data => displayData(data))
// }
// loadData()
// const displayData = users =>{
//     for (const user of users) {
//         console.log(user.body);        
//         const mainDiv = document.getElementById('main');
//         const h4 = document.createElement('h4')
//         h4.innerText = `
//         User Title : ${user.title}
//         `;
//         mainDiv.appendChild(h4);
//     }
// }

const loadPhoto = () => {
    const url = `https://jsonplaceholder.typicode.com/photos`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayPhoto(data))
}
loadPhoto();

const displayPhoto = photos => {
    console.log(photos);
    photos.forEach(photo => {
        // console.log(photo.thumbnailUrl);
        const mainDiv = document.getElementById('main');
        const div = document.createElement('div');
        div.classList.add('col-md-3');
        div.innerHTML = `
         <div class="card" style="width: 18rem;">
            <img onclick="getId(${photo.id})" src="${photo.thumbnailUrl}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${photo.title}</h5>
                <a href="${photo.url}" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    </div>
        `;
        mainDiv.appendChild(div);
    });
}

const getId = id => {
    const url = `https://jsonplaceholder.typicode.com/photos/${id}`;
    fetch(url)
        .then(res => res.json())
        .then(id => displayDetail(id))
}

const displayDetail = details =>{
    const detailDiv = document.getElementById('detail');
    const div = document.createElement('div');
    div.classList.add('col-md-6');
    div.classList.add('mx-auto');
    div.innerHTML = `
    <div class="card">
    <img src="${details.thumbnailUrl}" class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">${details.title}</h5>
        <a href="${details.url}" class="btn btn-primary">Go somewhere</a>
    </div>
    </div>
    `;
    detailDiv.appendChild(div);
}
