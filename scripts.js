























const track = document.getElementById('marquee-track');
const original = track.innerHTML;

// Clone until track is at least 2x the screen width
while (track.scrollWidth < window.innerWidth * 2) {
  track.innerHTML += original;
}

// Now apply the animation
track.style.animation = 'scroll-left 13s linear infinite';