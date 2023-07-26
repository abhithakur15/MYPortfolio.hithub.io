          // for dark and light mode
          const modeBtn = document.getElementById('mode');
          modeBtn.onchange = (e) => {
            if (modeBtn.checked === true) {
              document.documentElement.classList.remove("light")
              document.documentElement.classList.add("dark")
              window.localStorage.setItem('mode', 'dark');
            } else {
              document.documentElement.classList.remove("dark")
              document.documentElement.classList.add("light")
              window.localStorage.setItem('mode', 'light');
            }
          }
          
          const mode = window.localStorage.getItem('mode');
          if (mode == 'dark') {
            modeBtn.checked = true;
            document.documentElement.classList.remove("light")
            document.documentElement.classList.add("dark")
          }
          
          if (mode == 'light') {
            modeBtn.checked = false;
            document.documentElement.classList.remove("dark")
            document.documentElement.classList.add("light")
          }
            // end for dark and light mode


            $(window).scroll(function() {
              if ($(this).scrollTop() > 150){  
                  $('header').addClass('sticky fadeInDown animated');
              }
              else{
                  $('header').removeClass('sticky fadeInDown animated');
              }
          });

          $('.nav_link_a').on('click', function(){
            $('.navbar-collapse').collapse('hide');
            });

            function openCity(cityName) {
              var i;
              var x = document.getElementsByClassName("city");
              for (i = 0; i < x.length; i++) {
                x[i].style.display = "none";  
              }
              document.getElementById(cityName).style.display = "block";  
            }

     
	// FOR YEAR IN FOOTER
const year = document.querySelector('#current-year')
year.innerHTML = new Date().getFullYear()


$(window).on('load', function () {
  $(".set-loder").fadeOut(1750);
  });