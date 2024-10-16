$(document).ready(function () {
    $(window).scroll(function () {
      //  sticky navbar on scroll script  //
      if (this.scrollY > 20) {
        $(".navbar").addClass("sticky");
      } else {
        $(".navbar").removeClass("sticky");
      }
  
      //  scroll-up button show/hide script  //
      if (this.scrollY > 500) {
        $(".scroll-up-btn").addClass("show");
      } else {
        $(".scroll-up-btn").removeClass("show");
      }
    });
  
    //  slide-up script  //
  
    $(".scroll-up-btn").click(function () {
      $("html").animate({ scrollTop: 0 });
      //  removing smooth scroll on slide-up button click  //
      $("html").css("scrollBehavior", "auto");
    });
  
    $(".navbar .menu li a").click(function () {
      //  Smooth scroll on Menu Items click  //
  
      $("html").css("scrollBehavior", "smooth");
    });
  
    //  Toggle Navbar  //
  
    $(".menu-btn").click(function () {
      $(".navbar .menu").toggleClass("active");
      $(".menu-btn i").toggleClass("active");
    });
  
  
    //  Owl Carousel  //
  
    $(".carousel").owlCarousel({
      margin: 20,
      loop: true,
      autoplay: true,
      autoplayTimeOut: 2000,
      autoplayHoverPause: true,
      responsive: {
        0: {
          items: 1,
          nav: false
        },
        600: {
          items: 2,
          nav: false
        },
        1000: {
          items: 3,
          nav: false
        }
      }
    });
  })
  
  // SMTP Contact Form
  
  // function Send() {
  
  
  //   var name = document.getElementById("naam").value;
  //   var mail = document.getElementById("emaal").value;
  //   var sub = document.getElementById("sujbect").value;
  //   var mess = document.getElementById("mosaj").value;
  
  //   Email.send({
  
  //     SecureToken: "a149c940-e13b-4da7-ae71-c59e84a9cc16",
  //     To: 'iamhuzaifaehsan@gmail.com',
  //     From: "iamhuzaifaehsan@gmail.com",
  //     Name: name,
  //     Mail: mail,
  //     Subject: sub,
    //   Body: mess
    // }).then(
    //   message => {
    //     if (message == 'OK') {
  
    //       swal("Successfull", "Your Data Successfully Received", "success");
    //     }
    //     else {
  
    //       swal("Something Wrong", "Your Data is not Received", "error");
    //     }
    //   }
    // );
  
  
  
  // }

  //currency converter
  const exchangeRates = {
    "USD": 278.50, // Example exchange rate to PKR
    "EUR": 325.20, // Example exchange rate to PKR
    "GBP": 378.90, // Example exchange rate to PKR
    "PKR": 1 // PKR to PKR
    // Add more currencies and their exchange rates to PKR as needed
};

function convertCurrency() {
    const amount = parseFloat(document.getElementById('amount').value);
    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;

    const fromRate = exchangeRates[fromCurrency];
    const toRate = exchangeRates[toCurrency];

    const convertedAmount = (amount * fromRate) / toRate;

    document.getElementById('result').innerText = `${amount} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency}`;
}

//Add Slider
const slider = document.querySelector('.slider');
const images = slider.querySelectorAll('img');
let currentSlide = 0;

// Function to show the current slide
function showSlide(index) {
  // Hide all slides
  images.forEach((image) => {
    image.classList.remove('active');
  });
  
  // Ensure index is within bounds
  if (index < 0) {
    currentSlide = images.length - 1;
  } else if (index >= images.length) {
    currentSlide = 0;
  } else {
    currentSlide = index;
  }
  
  // Show the current slide
  images[currentSlide].classList.add('active');
}

// Show the first slide initially
showSlide(currentSlide);

// Automatic slide change every 3 seconds (adjust as needed)
setInterval(() => {
  showSlide(currentSlide + 1);
}, 4000);

// Manual slide navigation with buttons
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

prevBtn.addEventListener('click', () => {
  showSlide(currentSlide - 1);
});

nextBtn.addEventListener('click', () => {
  showSlide(currentSlide + 1);
});




 
document.addEventListener('DOMContentLoaded', populateTable);
  
    const nome = document.getElementById('naam');
    const mail = document.getElementById('emaal');
    const sub = document.getElementById('sujbect');
    const mess = document.getElementById('mosaj');
  
  submit.addEventListener('submit',(e)=>{
      e.preventDefault();
      let ebody = `
      <h1>First Name: </h1>${nome.value}
      <br>
      <h1>Email: </h1>${mail.value}
      <br>
      <h1>Subject: </h1>${sub.value}
      <br>
      <h1>Message: </h1>${mess.value}
      <br>
      `;
  
      Email.send({
          Host : "smtp.elasticemail.com", //add your token here
          Username:"ahsantanveer818@gmail.com",
          Password:"B97F8D1D9106E5B47AEF7FC6A37D8CEFF65D",
          To : 'ahsantanveer818@gmail.com', 
          From : "ahsantanveer818@gmail.com",
          Subject : sub,
          Body : ebody
      }).then(
        message => {
          if (message == 'OK') {
    
            swal("Successfull", "Your Data Successfully Received", "success");
          }
          else {
    
            swal("Something Wrong", "Your Data is not Received", "error");
          }
        }
      );
  });