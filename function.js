/*No. 1 
Tulislah sebuah function dengan nama teriak() yang mengembalikan nilai "Halo Sanbers!" yang kemudian dapat ditampilkan di console. */

function teriak(tes = "Halo Sanbers!"){
	return tes
}
console.log(teriak()) // "Halo Sanbers!"

// --------------------------------------------------------
/*No. 2
Tulislah sebuah function dengan nama multiply() yang mengembalikan hasil perkalian dua parameter yang di kirim.*/

var num1 = 12;
var num2 = 4;

var hasilKali = multiply(num1, num2);
console.log(hasilKali) // Bukan 30 tapi 48

// --------------------------------------------------------
/* No. 3 
Tulislah sebuah function dengan nama introduce() yang memproses paramater yang dikirim menjadi sebuah kalimat perkenalan seperti berikut: "Nama saya [Name], umur saya [Age] tahun, alamat saya di [Address], dan saya punya hobby yaitu [hobby]!" */

function introduce(nama, umur, alamat, hobi){
	return nama + umur + alamat + hobi}
	
var name = "Agus "
var age = 30
var address = " Jln. Malioboro, Yogjakarta"
var hobby = " gaming!"

var perkenalan = introduce("nama saya "+name,"Umur saya "+ age+"Tahun ", "Alamat Saya di"+address,"dan saya punya hobby yaitu "+ hobby)
console.log(perkenalan) // Menampilkan "Nama saya Agus, umur saya 30 tahun, alamat saya di Jln. Malioboro, Yogjakarta, dan saya punya hobby yaitu gaming!"
