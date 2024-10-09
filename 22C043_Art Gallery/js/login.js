document.addEventListener('DOMContentLoaded', () => {
    const signInBtnLink = document.querySelector('.signInBtn-link');
    const signUpBtnLink = document.querySelector('.signUpBtn-link');
    const wrapper = document.querySelector('.wrapper');
    const signUpForm = document.getElementById('signUpForm');
   
  
    signUpBtnLink.addEventListener('click', () => {
      wrapper.classList.toggle('active');
    });
  
    signInBtnLink.addEventListener('click', () => {
      wrapper.classList.toggle('active');
    });
});    
  
    
  
  
  