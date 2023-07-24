import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

let currentTime = localStorage.getItem('videoplayer-current-time');

player.on(
  'timeupdate',
  throttle(function ({ seconds }) {
    currentTime = seconds;
    localStorage.setItem('videoplayer-current-time', currentTime);
  }, 1000)
);

player.setCurrentTime(currentTime).then(function (seconds) {});
