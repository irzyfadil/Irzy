function masuk(){

document.getElementById("welcome").style.display="none";

document.getElementById("menu").classList.remove("hidden");

}



function showProject(){

document.getElementById("menu").style.display="none";

document.getElementById("project").classList.remove("hidden");

}




function hitung(){


let a =
Number(document.getElementById("angka1").value);


let b =
Number(document.getElementById("angka2").value);



document.getElementById("hasil").innerHTML =
"Hasil = " + (a+b);


}





function bot(){


let pesan =
document.getElementById("chat").value;


let jawab="";



if(pesan.includes("halo")){

jawab="Halo Irzy, saya chatbot sederhana";

}

else if(pesan.includes("program")){

jawab="Programming adalah proses membuat instruksi komputer";

}


else{

jawab="Maaf saya masih belajar";

}



document.getElementById("jawaban").innerHTML=jawab;


}





function game(){


let angka=Math.floor(Math.random()*10)+1;


let user=
Number(document.getElementById("tebakan").value);



if(user==angka){

document.getElementById("score").innerHTML=
"Benar! kamu hebat";

}

else{


document.getElementById("score").innerHTML=
"Salah, angka saya "+angka;


}


}





function analisis(){


let data=[5,10,15,20];


let total=0;



for(let i=0;i<data.length;i++){

total+=data[i];

}



let rata=total/data.length;



document.getElementById("data").innerHTML=

"Rata-rata data = "+rata;


}
