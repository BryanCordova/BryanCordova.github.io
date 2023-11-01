
new Vue({
  el: "#app",
  data() {
    return {
      audio: null,
      circleLeft: null,
      barWidth: null,
      duration: null,
      currentTime: null,
      isTimerPlaying: false,
      tracks: [
        {
          name: "Musica 1",
          artist: "Balada",
          cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/1.jpg",
          source: "musica/musica1.mp3",
          url: "https://youtu.be/eA7DbE6Fnz8?si=1cJjWqWNYIae8L3U",
          favorited: false
        },
        {
          name: "Musica 2",
          artist: "Balada",
          cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/2.jpg",
          source: "musica/musica2.mp3",
          url: "https://youtu.be/eA7DbE6Fnz8?si=1cJjWqWNYIae8L3U",
          favorited: true
        },
        {
          name: "Musica 3",
          artist: "Balada",
          cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/3.jpg",
          source: "musica/musica3.mp3",
          url: "https://youtu.be/eA7DbE6Fnz8?si=1cJjWqWNYIae8L3U",
          favorited: false
        },
        {
          name: "Musica 4",
          artist: "Balada",
          cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/4.jpg",
          source: "musica/musica4.mp3",
          url: "https://youtu.be/eA7DbE6Fnz8?si=1cJjWqWNYIae8L3U",
          favorited: false
        },
        {
          name: "Musica 5",
          artist: "Balada",
          cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/5.jpg",
          source: "musica/musica5.mp3",
          url: "https://youtu.be/eA7DbE6Fnz8?si=1cJjWqWNYIae8L3U",
          favorited: true
        },
        {
          name: "Musica 6",
          artist: "Balada",
          cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/6.jpg",
          source: "musica/musica6.mp3",
          url: "https://youtu.be/eA7DbE6Fnz8?si=1cJjWqWNYIae8L3U",
          favorited: false
        },
        {
          name: "Musica 7",
          artist: "Balada",
          cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/7.jpg",
          source: "musica/musica7.mp3",
          url: "https://youtu.be/eA7DbE6Fnz8?si=1cJjWqWNYIae8L3U",
          favorited: true
        },
        {
          name: "Musica 8",
          artist: "Balada",
          cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/8.jpg",
          source: "musica/musica8.mp3",
          url: "https://youtu.be/eA7DbE6Fnz8?si=1cJjWqWNYIae8L3U",
          favorited: false
        },
        {
          name: "Musica 9",
          artist: "Balada",
          cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/9.jpg",
          source: "musica/musica9.mp3",
          url: "https://youtu.be/eA7DbE6Fnz8?si=1cJjWqWNYIae8L3U",
          favorited: false
        },
        {
          name: "Musica 10",
          artist: "Balada",
          cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/1.jpg",
          source: "musica/musica10.mp3",
          url: "https://youtu.be/eA7DbE6Fnz8?si=1cJjWqWNYIae8L3U",
          favorited: false
        },
        {
          name: "Musica 11",
          artist: "Balada",
          cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/2.jpg",
          source: "musica/musica11.mp3",
          url: "https://youtu.be/eA7DbE6Fnz8?si=1cJjWqWNYIae8L3U",
          favorited: false
        },
        {
          name: "Musica 12",
          artist: "Balada",
          cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/3.jpg",
          source: "musica/musica12.mp3",
          url: "https://youtu.be/eA7DbE6Fnz8?si=1cJjWqWNYIae8L3U",
          favorited: false
        },
        {
          name: "Musica 13",
          artist: "Balada",
          cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/4.jpg",
          source: "musica/musica13.mp3",
          uurl: "https://youtu.be/eA7DbE6Fnz8?si=1cJjWqWNYIae8L3U",
          favorited: false
        },
        {
          name: "Musica 14",
          artist: "Balada",
          cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/5.jpg",
          source: "musica/musica14.mp3",
          url: "https://youtu.be/eA7DbE6Fnz8?si=1cJjWqWNYIae8L3U",
          favorited: false
        },
        {
          name: "Musica 15",
          artist: "Balada",
          cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/6.jpg",
          source: "musica/musica15.mp3",
          uurl: "https://youtu.be/eA7DbE6Fnz8?si=1cJjWqWNYIae8L3U",
          favorited: false
        },
        {
          name: "Musica 16",
          artist: "Balada",
          cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/7.jpg",
          source: "musica/musica16.mp3",
          url: "https://youtu.be/eA7DbE6Fnz8?si=1cJjWqWNYIae8L3U",
          favorited: false
        },
        {
          name: "Musica 17",
          artist: "Balada",
          cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/8.jpg",
          source: "musica/musica17.mp3",
          url: "https://youtu.be/eA7DbE6Fnz8?si=1cJjWqWNYIae8L3U",
          favorited: false
        },
        {
          name: "Musica 18",
          artist: "Balada",
          cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/9.jpg",
          source: "musica/musica18.mp3",
          url: "https://youtu.be/eA7DbE6Fnz8?si=1cJjWqWNYIae8L3U",
          favorited: false
        },
        {
          name: "Musica 19",
          artist: "Balada",
          cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/1.jpg",
          source: "musica/musica19.mp3",
          url: "https://youtu.be/eA7DbE6Fnz8?si=1cJjWqWNYIae8L3U",
          favorited: false
        },
        {
          name: "Musica 20",
          artist: "Balada",
          cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/2.jpg",
          source: "musica/music20.mp3",
          url: "https://youtu.be/eA7DbE6Fnz8?si=1cJjWqWNYIae8L3U",
          favorited: false
        },
        {
          name: "Musica 21",
          artist: "Balada",
          cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/3.jpg",
          source: "musica/musica21.mp3",
          url: "https://youtu.be/eA7DbE6Fnz8?si=1cJjWqWNYIae8L3U",
          favorited: false
        },
        {
          name: "Musica 22",
          artist: "Balada",
          cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/4.jpg",
          source: "musica/musica22.mp3",
          url: "https://youtu.be/eA7DbE6Fnz8?si=1cJjWqWNYIae8L3U",
          favorited: false
        },
      ],
      currentTrack: null,
      currentTrackIndex: 0,
      transitionName: null
    };
  },
  methods: {
    play() {
      if (this.audio.paused) {
        this.audio.play();
        this.isTimerPlaying = true;
      } else {
        this.audio.pause();
        this.isTimerPlaying = false;
      }
    },
    generateTime() {
      let width = (100 / this.audio.duration) * this.audio.currentTime;
      this.barWidth = width + "%";
      this.circleLeft = width + "%";
      let durmin = Math.floor(this.audio.duration / 60);
      let dursec = Math.floor(this.audio.duration - durmin * 60);
      let curmin = Math.floor(this.audio.currentTime / 60);
      let cursec = Math.floor(this.audio.currentTime - curmin * 60);
      if (durmin < 10) {
        durmin = "0" + durmin;
      }
      if (dursec < 10) {
        dursec = "0" + dursec;
      }
      if (curmin < 10) {
        curmin = "0" + curmin;
      }
      if (cursec < 10) {
        cursec = "0" + cursec;
      }
      this.duration = durmin + ":" + dursec;
      this.currentTime = curmin + ":" + cursec;
    },
    updateBar(x) {
      let progress = this.$refs.progress;
      let maxduration = this.audio.duration;
      let position = x - progress.offsetLeft;
      let percentage = (100 * position) / progress.offsetWidth;
      if (percentage > 100) {
        percentage = 100;
      }
      if (percentage < 0) {
        percentage = 0;
      }
      this.barWidth = percentage + "%";
      this.circleLeft = percentage + "%";
      this.audio.currentTime = (maxduration * percentage) / 100;
      this.audio.play();
    },
    clickProgress(e) {
      this.isTimerPlaying = true;
      this.audio.pause();
      this.updateBar(e.pageX);
    },
    prevTrack() {
      this.transitionName = "scale-in";
      this.isShowCover = false;
      if (this.currentTrackIndex > 0) {
        this.currentTrackIndex--;
      } else {
        this.currentTrackIndex = this.tracks.length - 1;
      }
      this.currentTrack = this.tracks[this.currentTrackIndex];
      this.resetPlayer();
    },
    nextTrack() {
      this.transitionName = "scale-out";
      this.isShowCover = false;
      if (this.currentTrackIndex < this.tracks.length - 1) {
        this.currentTrackIndex++;
      } else {
        this.currentTrackIndex = 0;
      }
      this.currentTrack = this.tracks[this.currentTrackIndex];
      this.resetPlayer();
    },
    resetPlayer() {
      this.barWidth = 0;
      this.circleLeft = 0;
      this.audio.currentTime = 0;
      this.audio.src = this.currentTrack.source;
      setTimeout(() => {
        if(this.isTimerPlaying) {
          this.audio.play();
        } else {
          this.audio.pause();
        }
      }, 300);
    },
    favorite() {
      this.tracks[this.currentTrackIndex].favorited = !this.tracks[
        this.currentTrackIndex
      ].favorited;
    }
  },
  created() {
    let vm = this;
    this.currentTrack = this.tracks[0];
    this.audio = new Audio();
    this.audio.src = this.currentTrack.source;
    this.audio.ontimeupdate = function() {
      vm.generateTime();
    };
    this.audio.onloadedmetadata = function() {
      vm.generateTime();
    };
    this.audio.onended = function() {
      vm.nextTrack();
      this.isTimerPlaying = true;
    };

    // this is optional (for preload covers)
    for (let index = 0; index < this.tracks.length; index++) {
      const element = this.tracks[index];
      let link = document.createElement('link');
      link.rel = "prefetch";
      link.href = element.cover;
      link.as = "image"
      document.head.appendChild(link)
    }
  }
});