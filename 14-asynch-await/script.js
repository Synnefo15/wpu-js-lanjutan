// const prom = new Promise((resolve) => {
//     setTimeout(() => {

//         resolve(`selesai`);
//     }, 2000);
// });
// console.log(prom);
// prom.then(() => {
//     console.log(prom);
// })

function cobaProm() {
	return new Promise((resolve, reject) => {
		const waktu = 5000;
		if (waktu < 5000) {
			setTimeout(() => {
				resolve(`selesai`);
			}, waktu);
		} else {
			reject(`lama boy`);
		}
	});
}
// const coba = cobaProm()
// coba
// .then((coba) => {
//     console.log(coba);
// })
// .catch((coba) => {
//     console.log(coba);
// })

async function cobaAsynch() {
	try {
		const coba = await cobaProm();
		console.log(coba);
	} catch (error) {
        console.log(error);
    }
}

cobaAsynch();
