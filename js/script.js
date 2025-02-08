(function ($) {

  "use strict";

  // ------------------------------------------------------------------------------ //
  // Overlay Menu Navigation
  // ------------------------------------------------------------------------------ //
  var overlayMenu = function () {

    if (!$('.nav-overlay').length) {
      return false;
    }

    var body = undefined;
    var menu = undefined;
    var menuItems = undefined;
    var init = function init() {
      body = document.querySelector('body');
      menu = document.querySelector('.menu-btn');
      menuItems = document.querySelectorAll('.nav__list-item');
      applyListeners();
    };
    var applyListeners = function applyListeners() {
      menu.addEventListener('click', function () {
        return toggleClass(body, 'nav-active');
      });
    };
    var toggleClass = function toggleClass(element, stringClass) {
      if (element.classList.contains(stringClass)) element.classList.remove(stringClass); else element.classList.add(stringClass);
    };
    init();
  }


  // Portfolio Slider
  var swiper = new Swiper(".portfolio-Swiper", {
    slidesPerView: 4,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      300: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  });

  // Animate Texts
  var initTextFx = function () {
    $('.txt-fx').each(function () {
      var newstr = '';
      var count = 0;
      var delay = 100;
      var stagger = 10;
      var words = this.textContent.split(/\s/);
      var arrWords = new Array();
      
      $.each( words, function( key, value ) {
        newstr = '<span class="word">';

        for ( var i = 0, l = value.length; i < l; i++ ) {
          newstr += "<span class='letter' style='transition-delay:"+ ( delay + stagger * count ) +"ms;'>"+ value[ i ] +"</span>";
          count++;
        }
        newstr += '</span>';

        arrWords.push(newstr);
        count++;
      });

      this.innerHTML = arrWords.join("<span class='letter' style='transition-delay:"+ delay +"ms;'>&nbsp;</span>");
    });
  }

  // init Isotope
  var initIsotope = function() {
    
    $('.grid').each(function(){

      // $('.grid').imagesLoaded( function() {
        // images have loaded
        var $buttonGroup = $( '.button-group' );
        var $checked = $buttonGroup.find('.is-checked');
        var filterValue = $checked.attr('data-filter');
  
        var $grid = $('.grid').isotope({
          itemSelector: '.portfolio-item',
          // layoutMode: 'fitRows',
          filter: filterValue
        });
    
        // bind filter button click
        $('.button-group').on( 'click', 'a', function(e) {
          e.preventDefault();
          filterValue = $( this ).attr('data-filter');
          $grid.isotope({ filter: filterValue });
        });
    
        // change is-checked class on buttons
        $('.button-group').each( function( i, buttonGroup ) {
          $buttonGroup.on( 'click', 'a', function() {
            $buttonGroup.find('.is-checked').removeClass('is-checked');
            $( this ).addClass('is-checked');
          });
        });
      // });

    });
  }

  // init Chocolat light box
  var initChocolat = function() {
    Chocolat(document.querySelectorAll('.image-link'), {
      imageSize: 'contain',
      loop: true,
    })
  }

  $(document).ready(function () {

    overlayMenu();
    initTextFx();
    initChocolat();

    // mobile menu
    $('.menu-btn').click(function(e){
      e.preventDefault();
      $('body').toggleClass('nav-active');
    });

    AOS.init({
      duration: 1200,
      // once: true,
    })

  });


  // window load
  $(window).load(function () {
    $(".preloader").fadeOut("slow");
    initIsotope();
  })


})(jQuery);




// // Select the terminal text and cursor elements
// const terminalText = document.querySelector(".terminal_text");
// const terminalCursor = document.querySelector(".terminal_cursor");

// // Listen for input events to simulate typing behavior
// terminalText.addEventListener("input", function () {
//   // Update the cursor position after text input
//   const textWidth = terminalText.scrollWidth;
//   terminalCursor.style.left = `${textWidth + 4}px`; // Adjust position based on text width
// });

// // Make sure the cursor always blinks
// function blinkCursor() {
//   terminalCursor.style.animation = 'blink 1s step-end infinite';
// }

// // Focus on the terminal so the user can type immediately
// terminalText.focus();

// // Optional: Listen for the Enter key to simulate running commands in the terminal
// terminalText.addEventListener("keydown", function (event) {
//   if (event.key === "Enter") {
//     const inputText = terminalText.textContent.trim();
//     if (inputText) {
//       let newLine = document.createElement("div");
//       newLine.classList.add("terminal_prompt");
//       newLine.innerHTML = `
//         <span class="terminal_user">johndoe@admin:</span>
//         <span class="terminal_location">~</span>
//         <span class="terminal_bling">$</span>
//         <span class="terminal_command">${inputText}</span>
//       `;
//       document.querySelector(".terminal_body").appendChild(newLine);

//       // Simulate command output (example)
//       let outputLine = document.createElement("div");
//       outputLine.classList.add("terminal_prompt");
//       if (inputText === "ls") {
//         outputLine.innerHTML = `
//           <span class="terminal_output">resume.pdf</span>
//         `;
//       } else {
//         outputLine.innerHTML = `
//           <span class="terminal_user">johndoe@admin:</span>
//           <span class="terminal_location">~</span>
//           <span class="terminal_bling">$</span>
//           <span class="terminal_output">Command not found: ${inputText}</span>
//         `;
//       }
//       document.querySelector(".terminal_body").appendChild(outputLine);
//     }
//     terminalText.textContent = ''; // Clear the input after the command is processed
//     event.preventDefault(); // Prevent the default "Enter" behavior
//   }
// });




// Select the terminal text and cursor elements
const terminalText = document.querySelector(".terminal_text");
const terminalCursor = document.querySelector(".terminal_cursor");

// Listen for input events to simulate typing behavior
terminalText.addEventListener("input", function () {
  // Update the cursor position after text input
  const textWidth = terminalText.scrollWidth;
  terminalCursor.style.left = `${textWidth + 4}px`; // Adjust position based on text width
});

// Make sure the cursor always blinks
function blinkCursor() {
  terminalCursor.style.animation = 'blink 1s step-end infinite';
}

// Focus on the terminal so the user can type immediately
terminalText.focus();

// Optional: Listen for the Enter key to simulate running commands in the terminal
terminalText.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    const inputText = terminalText.textContent.trim();
    if (inputText) {
      let newLine = document.createElement("div");
      newLine.classList.add("terminal_prompt");
      newLine.innerHTML = `
        <span class="terminal_user">aumsathwara@admin:</span>
        <span class="terminal_location">~</span>
        <span class="terminal_bling">$</span>
        <span class="terminal_command">${inputText}</span>
      `;
      document.querySelector(".terminal_body").appendChild(newLine);

      // Handle the command input
      let outputLine = document.createElement("div");
      outputLine.classList.add("terminal_prompt");

      if (inputText === "ls") {
        outputLine.innerHTML = `
          <span class="terminal_output">resume.pdf</span>
        `;
      }else if (inputText === "cat resume.pdf") {
        // Open resume.pdf in a new tab
        window.open('pdf/resume.pdf', '_blank');
        outputLine.innerHTML = `
          <span class="terminal_output">Opening resume.pdf...</span>
        `;
      } else {
        outputLine.innerHTML = `
          <span class="terminal_output">Command not found: ${inputText}</span>
        `;
      }
      
      document.querySelector(".terminal_body").appendChild(outputLine);
    }
    terminalText.textContent = ''; // Clear the input after the command is processed
    event.preventDefault(); // Prevent the default "Enter" behavior
  }
});

