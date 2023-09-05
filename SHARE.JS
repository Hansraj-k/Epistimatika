const shareBtn = document.getElementById('shareBtn');

shareBtn.addEventListener('click', event => {
  // Check for Web Share api support
  if (navigator.share) {
    // Browser supports native share api
      const pinterestImg = document.querySelector(".pinterest-img");

    navigator.share({
      img: 'AB.PNG',
      text: 'Discover a world of knowledge with Epistimatika, your gateway to a universe of books and short notes that will ignite your curiosity and expand your horizons. Dive into captivating stories, unravel profound insights, and embark on intellectual adventures that will enrich your mind. Explore our vast collection today and let the pages of wisdom guide your journey to enlightenment:',
      url: 'https://epistimatika.netlify.app',
      h1: 'Thanks & Regards, <br>"Epistímatiká: Illuminating Minds, One Page at a Time."'
    }).then(() => {
      console.log('Thanks for sharing!');
    })
      .catch((err) => console.error(err));
  } else {
    // Fallback
    alert("The current browser does not support the share function. Please, manually share the link")
  }
});
