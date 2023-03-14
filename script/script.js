const navLinks = document.querySelectorAll('#HomeNav, #AboutNav, #ContactNav, #SkillsNav, #PortfolioNav');
const navText = document.querySelector('#navText');

navLinks.forEach(link => {
  link.addEventListener('mouseover', () => {
    navText.style.display = 'inline';
    navText.textContent = link.id.replace('Nav', '');
  });

  link.addEventListener('mouseout', () => {
    navText.style.display = 'none';
    navText.textContent = '';
  });
});
