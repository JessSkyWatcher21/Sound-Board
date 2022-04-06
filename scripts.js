const playSound = e => {
      let keyCode;
      if (e.type === 'keydown') {
        keyCode = e.keyCode;
      } else {
        keyCode = e.target.getAttribute('data-key') || e.target.parentNode.getAttribute('data-key');
      }
      const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
      const key = document.querySelector(`div[data-key="${keyCode}"]`);

      if (!audio) return;

      key.classList.add('playing');
      audio.currentTime = 0;
      audio.play();
  
       
    }

    const removeTransition = e => {
      if (e.propertyName !== 'transform') return;
      e.target.classList.remove('playing');
    }

    const keys = Array.from(document.querySelectorAll('.key'));
    keys.forEach(key => {
      key.addEventListener('transitionend', removeTransition)
    });

    window.addEventListener('keydown', playSound);
    window.addEventListener('touchstart', playSound);
    w.addEventListener('click', playSound);

    

// refrences
//cloud: https://betterprogramming.pub/create-beautiful-images-in-css-to-buff-up-your-portfolio-c5a85d046f2a
// sounds edited in: Kapwing.com
// sounds from: zapsplat.com