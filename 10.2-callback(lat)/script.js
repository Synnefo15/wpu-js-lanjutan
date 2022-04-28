$('.search-button').on('click', function () {
	$.ajax({
		url: 'http://www.omdbapi.com/?apikey=8b5459e2&s='+$('.input-keyword').val(),
		success: (result) => {
			const movies = result.Search;
			let cards = '';
			movies.forEach((m) => {
				cards += showCards(m);
			});
			$('.movie-container').html(cards);
			// &---- Tombol detail diklik ----
			$('.modal-detail-button').on('click', function () {
				$.ajax({
					url: 'http://www.omdbapi.com/?apikey=8b5459e2&i=' + $(this).data('imdbid'),
					success: (m) => {
						const detail = showMovieDetail(m);
						$('.modal-body').html(detail); // % memasukkan ke html
					},
					error: (e) => {
						console.log(e.responseText);
					},
				});
			});
		},
		error: (e) => {
			console.log(e.responseText);
		},
	});
})



function showCards(m) {
	return /*html*/ ` 
                <div class="col my-5">
					<div class="card h-100" style="width: 18rem">
						<img src="${m.Poster}" class="card-img-top" alt="..." />
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
