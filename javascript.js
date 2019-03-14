


    var h,m,s;

    // klok
    function startTime() {
      var today = new Date();

      // get current time
      h = today.getHours();
      m = today.getMinutes();
      s = today.getSeconds();

      //h = 15;

      // add trailing zero
      m = checkTime(m);
      s = checkTime(s);


      document.getElementById('txt').innerHTML = h + ":" + m + ":" + s;


      var t = setTimeout(startTime, 500);
    }

    function checkTime(i) {
      if (i < 10) {i = "0" + i}; 
      return i;
    };

    checkTime();
    

    // groeten

    function animation() {
      var greeting = '';
      var hour = new Date().getHours();


      if (hour < 12) {
        greeting = "Good Morning";
      } else if (hour < 18) {
        greeting = "Good afternoon"
      } else {
        greeting = "Good evening"
      }

      document.getElementById('anime').innerHTML = greeting;


    }

    animation();



  // datum

    function initArray() {
      this.length = initArray.arguments.length;
      for (var i = 0; i < this.length; i++)
      this[i+1] = initArray.arguments[i];
      }

      var dagArray = new initArray("Sunday","Monday", "Tuesday","Wednesday","Thursday","Friday","Saturday");

      var maandArray = new initArray("January","February","March","April","May","June","July", "August","September","Oktober","November","December");

      var nu = new Date();
      var dagtekst = dagArray[(nu.getDay()+1)];
      var dag = nu.getDate();
      var maandtekst = maandArray[(nu.getMonth()+1)];
      var jaar = nu.getYear();
      var jaar4 = ((jaar < 1900) ? (jaar + 1900) : (jaar));

      var datumweergave =  dagtekst + " " + dag + " " + maandtekst + " " + jaar4;

      document.getElementById('date').innerHTML = datumweergave;
      

  // animation


  // animation: greeting
  TweenMax.from("#anime", 2, {autoAlpha:0, scale:0, ease:Power0.easeNone}, 0);

  

  // animation: clock
  var tl = new TimelineLite();

  tl.from("#txt",8,{ y:-40 , opacity:0 , ease: Elastic.easeOut })
  
  // animation: date

  var animationDate = new TimelineLite();

  animationDate.from("#date",2, {x:-100, opacity:0, ease: Power0.easeOut})


  // background

  // function background() {
  //   var hour = new Date().getHours();
  //   // var hour = 11

  //     if (hour < 12) {
  //       document.body.style.background = "white" ('image/jad-limcaco-284462-unsplash.jpg');
  //     } else if (hour < 18) {
  //       document.body.style.background = "blue";
  //     } else {
  //       document.body.style.background = "black";
  //     }

  //   }

  // background();

  function backgroundImage () {
    var hour = new Date().getHours();
    // var hour = 10;
    if (hour < 12) {
      
       document.body.style.backgroundImage = "url('image/jad-limcaco-284462-unsplash.jpg')";
       // document.body.style.backgroundPosition = 'fixed';
       // // document.body.style.backgroundSize = 'cover';
       // document.body.style.backgroundRepeat = 'no-repeat';

       
    } else if (hour < 18) {
       document.body.style.backgroundImage = "url('image/n-altentaller-1244874-unsplash.jpg')";
     } else {
       document.body.style.backgroundImage = "url('image/m-wrona-272247-unsplash.jpg' )";
      

     }


  }
backgroundImage()





 



