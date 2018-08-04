console.log('===== fungsi =====')

function myFunc(param) {
    console.log('ini fungsi dengan param ' + param)
}

myFunc('air mineral')

function luas(p, l) {
    luasNya = p*l
    //pemanggilan di console.log bisa pake , atau + 
    //kalo , output data apa adanya tanpa mengubah tipe data tapi kalo + semua diubah menjadi string
    console.log('luasnya adalah ', luasNya)
}
luas(10, 5)

//anonymous function
let luasPersegiPanjang = function (p, l) {
    return p*l
}
console.log('luas persegi panjangnya adalah ' + luasPersegiPanjang(5, 5))

let luasSegitiga = (a, t) => { return a*t }
console.log('luas segitiga adalah ' + luasSegitiga(6, 6))

let luasLingkaran = (r) => Math.PI * r * r
console.log('luas lingkaan adalah ' + luasLingkaran(9).toFixed(2))
//PEMBULATAN : Math.ceil = pembulatan ke atas, Math.round = pembulatan pada umumnya, Math.floor = pembulatan ke bawah
//PEMBULATAN : tambah .toFixed(berapa angka dibelakang koma?)

//function
let isLulus = (nilai, kkm) => {
    if (nilai >= kkm) {
        return 'YA LULUS'
    } else {
        return 'TIDAK LULUS'
    }
}

let nilai = 74
let kkm = 75
console.log('apakah nilai', nilai, 'lulus ? ', isLulus());

(function printMyAge(age) {
    console.log('umurku sekarang', age, 'tahun');
})(22)

//substring (untuk mengambil sub data dari string)
let tglLahir = '13-12-1996'
console.log('Tanggal lahirmu adalah ', tglLahir.substr(0,2))
console.log('Bulan lahirmu adalah ', tglLahir.substr(3,2))
console.log('Tahun lahirmu adalah ', tglLahir.substr(6,4))

//split = untuk memecah berdasarkan delimeter / pemisah (bisa berupa kode titik, huruf, angkat)
let splittedTglLahir = tglLahir.split('-')
console.log('splitted tgl lahir =>', splittedTglLahir)

let nim = 'A11.2015.09026'
let splittedNIM = nim.split('.')
console.log('splitted nim =>', splittedNIM)
console.log('splitted kode jurusan =>', splittedNIM[0])
console.log('splitted angkatan =>', splittedNIM[1])
console.log('splitted id =>', splittedNIM[2])
