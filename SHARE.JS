const shareBtn = document.getElementById('shareBtn')

shareBtn.addEventListener('click', event => {

  // Check for Web Share api support
  if (navigator.share) {
    // Browser supports native share api
    navigator.share({
      img: 'assets/img/bg.jpg',
      text: 'Digitizing Creativity Is All That We Do So Well ,   Check Our Creativity 👇🏻 & Digitalize Your Creativity: ',
      url: '${postUrl}',
      h1: 'Thanks & Regards, <br> Websites By Hansraj Kondeda'
    }).then(() => {
      console.log('Thanks for sharing!');
    })
      .catch((err) => console.error(err));
  } else {
    // Fallback
    alert("The current browser does not support the share function. Please, manually share the link")
  }
});
