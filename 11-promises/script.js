// *============ Promises ============
// &---- Req API ----
// fetch('http://www.omdbapi.com/?apikey=8b5459e2&s=naruto')
// .then(res=>res.json())
// .then(res=> console.log(res))

// #====== Cara nulis promises =======
let ditepati = true;
// &---- cara 1 ----
const janji1 = new Promise((resolve, reject) => {
	if (ditepati) {
		resolve(`janji telah ditepati`);
	} else {
		reject(`Ingkar janji`);
	}
});

// janji1.then((res) => console.log(`ok sip ${res}`)).catch((res) => console.log(`not ok ${res}`));

// &---- cara 2 ----
const janji2 = new Promise((resolve, reject) => {
	if (ditepati) {
		setTimeout(() => {
			resolve(`ditepati setelah menunggu`);
		}, 2000);
	} else {
		setTimeout(() => {
			resolve(`tidak ditepati dan tunggu dulu`);
		}, 2000);
	}
});

// console.log(`mulai`);

// janji2
// 	.then((res) => console.log(`ok ${res}`))
// 	.catch((res) => console.log(`Not Ok ${res}`))
// 	.finally(() => {
// 		console.log(`Selesai menunguu`);
// 	});

// console.log(`selesai`);

// &---- Cara 3 ----
const film = new Promise((resolve) => {
	setTimeout(() => {
		resolve([
			{
				judul: 'naruto',
				sutradara: 'masashi',
				pemeran: 'naruto uzumaki',
			},
		]);
	}, 2000);
});

const cuaca = new Promise((resolve) => {
	setTimeout(() => {
		resolve([
			{
				kota: 'AOT',
				provinsi: 'kuzuki',
				pemeran: 'james arthur',
			},
		]);
	}, 1000);
});

// film.then((res) => {
//     console.log(res);
// })
// cuaca.then((res) => {
//     console.log(res);
// })
// % Ambil langsung semua 
Promise.all([film, cuaca]).then((res) => { 
    const [film,cuaca] = res
    console.log(film);
    console.log(cuaca);
});
