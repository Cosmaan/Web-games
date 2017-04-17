 var app = new Vue({
            el: '#app',
            data: {
                text: 'Hello Vue World',
                count: 0,
                time: 0,
                timerID: 0,
                timeSelect: 0,
                record: false,
                disableButton: true,
                disableInput: true
            },
            methods: {
                restart: function() {
                  this.count = 0;
                  this.time = 0;
                  this.disableButton = true;
                  this.record = false;
                  this.disableInput = true;
                  clearTimeout(this.timerID);
                },
                timer: function() {
                  this.time += 1;
                  if (this.time == this.timeSelect) {
                    this.record = true;
                    this.disableButton = false;
                    clearTimeout(this.timerID);
                    return;
                  }
                  else {
                    this.record = false;
                  }
                },
                up: function() {
                  this.disableInput = false;
                  if (this.timeSelect <= 0) {
                    alert('USE GOOD NUMBER!');
                    return;
                  }
                  if (this.count == 0) {
                    this.timerID = setInterval(this.timer, 1000);
                  }
                  this.count += 1;
                },
          }

        })
