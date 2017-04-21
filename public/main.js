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
var database = firebase.database();


//Initialize Vue app

var app = new Vue({
  el: '#app',
  data: {
    inputEmail: '',
    inputPAssword: '',
    alertAppeare: false,
    errorMessage: ''
  },
  methods: {
    test: function() {
      this.alertAppeare = !this.alertAppeare;
    },
    login: function() {
      firebase.auth().signInWithEmailAndPassword(this.inputEmail, this.inputPAssword).catch(function(error) {
        this.errorMessage = error.message;
        console.log(this.errorMessage);
        this.alertAppeare = true;
      });
    },
    signUp: function() {
      firebase.auth().createUserWithEmailAndPassword(this.inputEmail, this.inputPAssword).catch(function(error) {
        this.errorMessage = error.message;
        console.log(this.errorMessage);
        this.alertAppeare = true;
      });
    }

  }
})
