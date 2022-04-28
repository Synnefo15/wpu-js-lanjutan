// #====== Callback sync =======
// function halo(nama) {
//     alert(`Halo ${nama}`)
// }

// function showPesan(callback) {
//     const nama =  prompt('Masukkan nama: ')
//     callback(nama)
// }

// const mhs = [
//     {
//         "nama":"rafi",
//         "umur":"22"
//     },
//     {
//         "nama":"gilang",
//         "umur":"19"
//     },
// ]
// console.log(`mulai`);
// mhs.forEach(m => {

//     console.log(m.nama);
// });
// console.log(`Selesai`);

// #====== Asynch =======
function getDataMhs(url, sukses, error) {
    // var XMLHttpRequest = require('xhr2');
	let xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function () {
		if (xhr.readyState === 4) {
			if (xhr.status === 200) {
				sukses(xhr.response);
			} else if (xhr.status === 404) {
				error();
			}
		}
	};
	xhr.open('get', url);
	xhr.send();
}
getDataMhs(
	'data.json',
	(result) => {console.log(JSON.parse(result));},
	() => {}
);
