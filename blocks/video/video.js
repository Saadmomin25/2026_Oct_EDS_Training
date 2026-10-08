export default function decorate(block) {
  /* Process video block content */
  const videos = block.querySelectorAll('a');
  
  videos.forEach((link) => {
    const url = link.href;
    const videoSource = url.includes('youtube.com') || url.includes('youtu.be') 
      ? `https://www.youtube.com/embed/${extractVideoId(url)}`
      : url;
    
    const video = document.createElement('video');
    video.controls = true;
    video.src = videoSource;
    link.parentElement.replaceChild(video, link);
  });
}

function extractVideoId(url) {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return (match && match[2].length === 11) ? match[2] : null;
}
