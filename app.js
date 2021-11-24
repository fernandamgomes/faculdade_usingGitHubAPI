
function carregaPerfil() {
    let perfil = document.getElementById('perfil');
    let htmlStr = '';

    fetch(`https://api.github.com/users/fernandamgomes`)
        .then(resposta => resposta.json()
        .then(db => {
                htmlStr = `
                    <div class="col-12 col-sm-12 col-md-4 col-lg-4">
                        <img class="foto-perfil" src="${db.avatar_url}" alt="Fernanda Mendes">
                    </div>
                    <div class="col-12 col-sm-12 col-md-8 col-lg-8 texto-perfil">
                        <div class="flex-perfil">
                            <h1>${db.name}</h1>
                            <p class="main-text">${db.bio}</p>
                            <p class="main-text">-<b><a href="${db.html_url}" target="_blank"> Visite meu perfil no GitHub</a></b></p>
                            <p class="main-text">- <b>User:</b> ${db.login}</p>
                        </div>
                        <div class="social-media">
                            <h3>Redes Sociais</h3>
                            <ul>
                                <li><a href="https://www.linkedin.com/in/fernanda-mendes-gomes/" target="_blank"><ion-icon name="logo-linkedin"></ion-icon></a></li>
                                <li><a href="mailto:fernandamendesgomes@gmail.com" target="_blank"><ion-icon name="mail"></ion-icon></a></li>
                                <li><a href="https://instagram.com/fernandamendesg" target="_blank"><ion-icon name="logo-instagram"></ion-icon></ion-icon></a></li>
                            </ul>
                        </div>
                    </div>
                `;
                perfil.innerHTML = htmlStr;
        }))
}

function carregaRepos() {

    let repo = document.getElementById('repositorios');
    let htmlStr = '';

    fetch(`https://api.github.com/users/fernandamgomes/repos`)
        .then(resposta => resposta.json()
        .then(db => {
                htmlStr = `
                    <h1>Repositórios GitHub</h1>
                    <div class="col-3 col-sm-2 col-md-2 col-lg-1 img-git">
                        <img src="images/folder.png" alt="">
                    </div>
                    <div class="col-9 col-sm-10 col-md-10 col-lg-3">
                        <h3>${db[0].name}</h3>
                        <p><b>Descrição: </b>${db[0].description}<br></p>
                        <p><b>Linguagem: </b>${db[0].language}<br></p>
                        <p><b><a href="${db[0].html_url}" target="_blank">Veja mais sobre esse repositório aqui</a></b></p>
                    </div>
                    <div class="col-3 col-sm-2 col-md-2 col-lg-1 img-git">
                        <img src="images/folder.png" alt="">
                    </div>
                    <div class="col-9 col-sm-10 col-md-10 col-lg-3">
                        <h3>${db[1].name}</h3>
                        <p><b>Descrição: </b>${db[1].description}<br></p>
                        <p><b>Linguagem: </b>${db[1].language}<br></p>
                        <p><b><a href="${db[1].html_url}" target="_blank">Veja mais sobre esse repositório aqui</a></b></p>
                    </div>
                    <div class="col-3 col-sm-2 col-md-2 col-lg-1 img-git">
                        <img src="images/folder.png" alt="">
                    </div>
                    <div class="col-9 col-sm-10 col-md-10 col-lg-3">
                        <h3>${db[4].name}</h3>
                        <p><b>Descrição: </b>${db[4].description}<br></p>
                        <p><b>Linguagem: </b>${db[4].language}<br></p>
                        <p><b><a href="${db[4].html_url}" target="_blank">Veja mais sobre esse repositório aqui</a></b></p>
                    </div>
                `;
                repo.innerHTML = htmlStr;
            }))
}
