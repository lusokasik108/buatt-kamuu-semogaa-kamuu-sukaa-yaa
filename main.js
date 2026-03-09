onload = () =>{
        document.body.classList.remove("container");
};
const kata = [
"Heii Athaa 🤍",
"10 hari mondok pasti melelahkan ya",
"Semoga malam ini kamu bisa beristirahat dengan tenang",
"Biarkan semua lelahmu perlahan hilang",
"Jujur saja... aku kangen sama kamuu",
"Aku sering bertanya, apakah kamu baik-baik saja di sana",
"Tanpa kamu rasanya hari terasa lebih sepi",
"Aku selalu menunggu kabar darimu",
"Bunga kecil ini aku kirim untukmu 🌸",
"Sebagai tanda kalau kamu selalu berharga",
"Karena bagiku, kamu selalu istimewa",
"Bahkan pesan sederhana darimu bisa membuat hariku lebih tenang",
"Aku selalu mendoakan yang terbaik untukmu",
"Selamat beristirahat pacarnya gufron 🤍",
"-forditxy😝"
];

let i = 0;

setInterval(() => {
document.getElementById("kata").innerText = kata[i];
i++;

if(i >= kata.length){
i = 0;
}

}, 4000);
