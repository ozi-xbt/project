export function RenderContent(){


  // ----------------RENDERING HOME SECTION-------------------//
  const homeDetails = {
    greetTxt: `Hallo semuanya `,
    name: 'Ahmad Fauzi',
    profilePhoto: 'profil.jpg',
    welcomeTxt: 'Selamat datang di website saya.',
    fbLink: 'https://facebook.com/ozi.xbt/',
    tiktokLink: 'https://tiktok.com/@ozi.xbt',
    instagramLink: 'https://instagram.com/ozi.xbt',
    ytLink: 'https://www.youtube.com/@ozi_xbt'
  }

  const homeHTML = `
    <div class="profile-detail">
      <p>${homeDetails.greetTxt}</p>
      <h1 class="my-name gradient-word">${homeDetails.name}</h1>
      <h2 class="display-skills gradient-word"></h2>
      <p>${homeDetails.welcomeTxt}</p>
      <div class="my-social-media-accounts">
        <a
          class="social-media"
          target="_blank"
          href="${homeDetails.fbLink}">
          <img src="images and icons/icons/facebook (2).png" alt="fb icon" />
        </a>
        <a
          class="social-media"
          target="_blank"
          href="${homeDetails.tiktokLink}">
          <img src="images and icons/icons/tik-tok.png" alt="tiktok icon" />
        </a>
        <a
          class="social-media"
          target="_blank"
          href="${homeDetails.ytLink}">
          <img src="images and icons/icons/youtube.png" alt="YT icon" />
        </a>
        <a class="social-media" target="_blank" href="${homeDetails.instagramLink}">
          <img src="images and icons/icons/instagram (1).png" alt="insta icon" />
        </a>
      </div>
    </div>

    <div class="profile-pic">
      <div id="first-layer">
        <img
          id="profile-img"
          src="images and icons/images/${homeDetails.profilePhoto}"
          alt="profile img" />
      </div>
    </div>
  `;
  
  const homeSection = document.querySelector('#home-section').innerHTML = homeHTML;
    




   // ----------------RENDERING ABOUT SECTION-------------------//
   const aboutDetails = {
    myPhoto: 'profil.jpg',
    aboutMeFirstPrgrph: `Hi! Aku Ozi, seorang TikToker dan programmer.
Aku suka berbagi hal-hal kreatif seputar coding, teknologi, dan dunia digital. Lewat konten yang aku buat, aku berusaha menjadikan hal yang rumit jadi terlihat simpel, menarik, dan menyenangkan. Aku juga suka bereksperimen dengan project-project unik yang bisa menginspirasi orang lain untuk belajar dan berkreasi!`,
    aboutMeSecondPrgrph: `Di luar TikTok, aku juga mendesain wallpaper berbasis kode dan membangun website portofolio dengan sentuhan estetika yang mencerminkan skill teknis sekaligus sisi artistikku. Melalui karya-karyaku, aku ingin menyatukan kreativitas dan fungsionalitas, sambil menunjukkan bahwa pemrograman itu nggak harus kaku—tapi bisa indah dan ekspresif.`
   }

   const aboutHTML = `
    <h2 class="section-name about">PROFILE<span class="line"></span></h2>
    <div class="container">
      <div>
        <img
          class="profile-pic"
          src="images and icons/images/${aboutDetails.myPhoto}"
          alt="profile img" />
      </div>
      <div class="about-self scroll-reveal">
        <p class="first-paragraph">
          <span>${aboutDetails.aboutMeFirstPrgrph}</span>
        </p>
        <br />
        <p class="second-paragraph">
          <span>${aboutDetails.aboutMeSecondPrgrph}</span>
        </p>
      </div>
    </div>
   `

  const aboutSection = document.querySelector('#about-section').innerHTML = aboutHTML;




    // ----------------RENDERING SKILLS SECTION-------------------//

    const skills = [
      
      { iconName: "gpt.png", skillName: "Learning Ai" },
      { iconName: "html.png", skillName: "HTML" },
      { iconName: "CSS.png", skillName: "CSS" },
      { iconName: "creator.png", skillName: "Content creator" },
      { iconName: "coding.png", skillName: "Coding" },
      { iconName: "candle.png", skillName: "Trading" },
    ];

    const skillHTML = `
        <h2 class="section-name"><span class="line"></span> SKILL</h2>
          
          <div class="skills-container d-flex">
          </div>
    `

  const skillSection = document.querySelector('#skills-section').innerHTML = skillHTML;
  
  let skillCard = ''
  skills.forEach(skill => {
   skillCard += `<div class="skill">
    <img src="images and icons/icons/${skill.iconName}" alt="" class="skill-icon">
    <p class="skill-name">${skill.skillName}</p>
  </div>`
  });
  const skillsContainer = document.querySelector('.skills-container').innerHTML = skillCard;




  // ----------------RENDERING CONTACT SECTION-------------------//
  const contactDetails = {
    heading: ' Temui Aku di Sini ',
    subheading: 'Yuk, Bikin Sesuatu yang Keren Bareng!',
  }
  const contactHTML = `
    <h2 class="section-name">${contactDetails.heading}</h2>
    <p class="subheading">${contactDetails.subheading}</p>
    <form class="f-flex">
      <div class="input-container">
        <input class="input name" type="text" placeholder="Nama" required />
        <input class="input email" type="email" placeholder="Email" required/>
      </div>

      <div class="txt-area-btn-container">
        <textarea name="Message-me" class="input" placeholder="Mau Ngobrol? Tulis Aja"></textarea> 
        <button id="submit-btn">Kirim pesan</button>
      </div>
    
    </form>
  `;

  const contactSection = document.querySelector('#contact-section').innerHTML = contactHTML;
}
