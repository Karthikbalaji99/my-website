let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');

};





let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active')
            });
        };
    });

    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.screenY > 100);


    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

};


ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200

});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img,.certification-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });


const typed = new Typed('.multiple-text', {
    strings: ['Data Scientist', 'GenAI Lead', 'Data Analyst', 'AI/ML Engineer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

const type = new Typed('.multi-text', {
    strings: ['Hello', 'नमस्ते', 'வணக்கம்', 'Halo'
    ],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

const experienceBoxes = document.querySelectorAll('.experience-box');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
  });
}, {
  threshold: 0.5
});

experienceBoxes.forEach((box) => observer.observe(box));
ScrollReveal().reveal('.skills-container .skill-box', {
  origin: 'bottom',
  interval: 200,
  scale: 0.9,
  easing: 'ease-in-out',
  reset: true
});

const form = document.getElementById('contact-form');
const responseMessage = document.getElementById('form-response');

form.addEventListener('submit', async function (e) {
  e.preventDefault();

  const inputs = form.querySelectorAll('input, textarea');
  let isValid = true;

  inputs.forEach(input => {
    if (!input.value.trim()) {
      input.classList.add('error');
      isValid = false;
    } else {
      input.classList.remove('error');
    }
  });

  if (!isValid) {
    responseMessage.style.color = 'red';
    responseMessage.textContent = 'Please fill out all fields.';
    return;
  }

  // Submit the form to FormSubmit.co manually
  const formData = new FormData(form);

  try {
    await fetch('https://formsubmit.co/karthikb2725@gmail.com', {
      method: 'POST',
      body: formData
    });

    responseMessage.style.color = '#00e5ff';
    responseMessage.textContent = 'Message sent successfully! I will get back to you shortly.';
    form.reset();

    setTimeout(() => {
      responseMessage.textContent = '';
    }, 5000);
  } catch (error) {
    responseMessage.style.color = 'red';
    responseMessage.textContent = 'Something went wrong. Please try again later.';
  }
});
