// Initialize Firebase
var config = {
  apiKey: "AIzaSyCal7Z0k-uFVLaQiSDlsd-XgwQ6G_ovVwc",
  authDomain: "cosmaan-game.firebaseapp.com",
  databaseURL: "https://cosmaan-game.firebaseio.com",
  projectId: "cosmaan-game",
  storageBucket: "cosmaan-game.appspot.com",
  messagingSenderId: "562207389623"
};
firebase.initializeApp(config);


//Getting database
const reffer = firebase.database().ref('users');

//const onRef = reffer.child('users');
//console.log(firebase.database().ref('users/'));

//Input Filter
Vue.directive("filter", {
  bind: function(el, binding) {
    this.inputHandler = function(e) {
      var ch = String.fromCharCode(e.which);
      var re = new RegExp(binding.value);
      if (!ch.match(re)) {
        e.preventDefault();
      }
    };
    el.addEventListener("keypress", this.inputHandler);
  },
  unbind: function(el) {
    el.removeEventListener("keypress", this.inputHandler);
  },
  inputHandler: null
});

//Initialize Vue app
let app = new Vue({
  el: '#app',
  data: {
    place: 0,
    score: 0,
    nickName: '',
    alertAppeare: false,
    errorMessage: '',
    showBoard: true,
    scoreBoard: [],
  },
  methods: {
    alertOn: function() {
      this.alertAppeare = false;
    },
    upe: function() {
      this.score += 1;
    },
    login: function() {
        if (this.nickName == '') {
          this.errorMessage = 'Invalid nick';
          this.alertAppeare = true;
          return;
        }
        else {
          this.alertAppeare = false;
        }
        firebase.database().ref('users/'+this.nickName).set(this.score);
    },
    osb: function() {
      this.scoreBoard = [];

      let sb = this.scoreBoard;
      let listPlace = this.place;
      reffer.orderByValue().limitToLast(50).once('value', function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
          listPlace += 1;
          let currentNick = childSnapshot.key;
          let currentScore = childSnapshot.val();
          sb.push(currentNick + ' ' + currentScore);
        });
        this.sb = sb.reverse();
      });
    }
  }
})
