export function projectsSectionFunctionality(){
  const projects = [
    {
        image: 'foto1.jpg',
        title: 'Hobi',
        description: 'Aku sering main Mobile Legends dan spesialis pakai Gusion. Dengan winrate 70%, aku udah cukup paham cara ngegas musuh pake combo cepat dan positioning yang tepat. Bisa dibilang, Gusion udah jadi tangan kanan waktu push rank. Hehehe 😎🎮',
        role: 'Jungler',
        clientSatisfaction: '75%'
    },
    {
        image: 'foto2.jpg',
        title: 'Membaca market',
        description: 'Aku juga suka analisis market crypto. Gambar di samping adalah contoh prediksi harga token SUPRA/USDT yang aku buat. Dari pengalaman ini, aku jadi makin paham pola pergerakan harga dan cara membaca chart secara teknikal.',
        role: 'Market',
        clientSatisfaction: '68%'
    },
    {
        image: 'foto3.jpg',
        title: 'Coding journey',
        description: 'Aku juga aktif di GitHub untuk berbagi project dan belajar bareng komunitas. Di situ aku nulis tujuan, skill yang lagi aku kembangkan, dan beberapa eksperimen coding yang aku buat sendiri.',
        role: 'Template',
        clientSatisfaction: '70%'
    }
  ];

  let projectHTML = '';

  projects.forEach(project => {
    projectHTML+= `
      <div class="project-card">
          <div class="container title-and-description">
            <h2 class="project-title">${project.title}</h2>
            <p class="project-description semi-transparent-word">
              ${project.description}
            </p>
            <button class="call-to-action-btn">Lihat</button>
          </div>
          <div class="fade-bgColor"></div>
          <div class="container image-and-result">   
            <img class="project-image" src="images and icons/icons/${project.image}" alt="proj-img" />
            <div class="project-result d-flex">
              <div>
                <p class="role semi-transparent-word">Role</p>
                <p class="result">${project.role}</p>
              </div>  
              <div>
                <p class="satisfaction semi-transparent-word">
                  Kemampuan
                </p>
                <p class="result">${project.clientSatisfaction}</p>
              </div>
            </div>
          </div>
        </div>
    `
  });
  
  document.querySelector('.projects-container').innerHTML = projectHTML


}
