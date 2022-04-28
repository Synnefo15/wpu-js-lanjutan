

// &---- Cari diklik ----
const searchButton = document.querySelector('.search-button');
searchButton.addEventListener('click', async function () {
	const inputKeyword = document.querySelector('.input-keyword');

	const movies = await getMovies(inputKeyword.value);
	updateUI(movies);
});

// &---- Detail diklik ----
// % Event binding
document.addEventListener('click', async function (e) {
	if (e.target.classList.contains('modal-detail-button')) {
		const imdbid = e.target.dataset.imdbid;
		const movieDetail = await getMovieDetail(imdbid);
		updateUIDetail(movieDetail);
	}
});

function getMovieDetail(imdbid) {
	return fetch('http://www.omdbapi.com/?apikey=8b5459e2&i=' + imdbid)
		.then((res) => res.json())
		.then((m) => m);
}

function getMovies(keyword) {
	return fetch('http://www.omdbapi.com/?apikey=8b5459e2&s=' + keyword)
		.then((res) => res.json())
		.then((res) => res.Search);
}

function updateUI(movies) {
	let cards = '';
	movies.forEach((m) => {
		cards += showCards(m);
	});
	const movieContainer = document.querySelector('.movie-container');
	movieContainer.innerHTML = cards;
}

function updateUIDetail(m) {
	const movieDetail = showMovieDetail(m);
	const modalBody = document.querySelector('.modal-body');
	modalBody.innerHTML = movieDetail;
}

function showCards(m) {
	return /*html*/ ` 
                <div class="col my-5">
					<div class="card h-100" style="width: 18rem">
						<img src="${m.Poster}" class="card-img-top h-75" alt="..." />
						<div class="card-body">
							<h5 class="card-title">${m.Title}</h5>
							<h6 class="card-subtitle text-muted mb-2">${m.Year}</h6>
							<a href="#" class="btn btn-primary modal-detail-button" data-bs-toggle="modal"
							data-bs-target="#movieDetailModal" data-imdbid=${m.imdbID}>
								Show Detail
							</a>
						</div>
					</div>
				</div> `;
}

function showMovieDetail(m) {
	return /*html*/ `	<div class="container-fluid">
							<div class="row">
								<div class="col-md-3">
									<img src="${m.Poster}" alt="" srcset="" class="img-fluid" />
								</div>
								<div class="col-md">
									<ul class="list-group">
										<li class="list-group-item">
											<h4>${m.Title} - (${m.Year})</h4>
										</li>
										<li class="list-group-item">
											<strong>Sutradata :</strong> ${m.Director}
										</li>
										<li class="list-group-item">
											<strong>Aktor :</strong> ${m.Actors}
										</li>
										<li class="list-group-item">
											<strong>Penulis :</strong> ${m.Writer}
										</li>
										<li class="list-group-item">
											<strong>Plot : </strong><br>${m.Plot}
										</li>
									</ul>
								</div>
							</div>
						</div> `;
}
