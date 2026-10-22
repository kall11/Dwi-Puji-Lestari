const message = `Hai Dwi Puji Lestari,

Selamat ulang tahun yang ke-21, Dwi Puji Lestari 🎂

Semoga di usia yang baru ini kamu makin bahagia, makin tenang, dan semua yang kamu doain pelan-pelan jadi nyata. Kamu pantas dapat yang terbaik, selalu.

Aku nggak pernah lupa gimana kamu dulu: tulus, penyayang, dan selalu ngasih lebih dari yang diminta. Dulu mungkin aku nggak cukup dewasa buat ngejaga itu. Kalau ada keputusan yang bikin kamu kecewa, apalagi di saat kamu lagi sayang-sayangnya, aku sadar itu bukan hal kecil, dan aku masih mikirin itu sampai sekarang.

Aku nggak minta apa-apa dari ucapan ini. Cuma pengin kamu tahu, kamu masih jadi salah satu orang yang paling aku doain kebahagiaannya. Siapa tahu suatu hari, kalau waktunya pas dan kamu juga mau, kita bisa ngobrol lagi dengan kepala yang lebih dingin.

Sekali lagi, selamat ulang tahun. Jaga diri ya, 🤍`;

const messageText = document.getElementById('messageText');
const nextBtn = document.getElementById('nextBtn');

let index = 0;
const speed = 20;

function typeWriter() {
  if (index < message.length) {
    messageText.textContent += message.charAt(index);
    index++;
    messageText.parentElement.scrollTop = messageText.parentElement.scrollHeight;
    setTimeout(typeWriter, speed);
  } else {
    nextBtn.disabled = false;
  }
}

window.onload = typeWriter;