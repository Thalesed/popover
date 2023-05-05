const trigger = document.querySelector('.trigger');
const balloon = document.querySelector('.balloon');

trigger.addEventListener('mouseover', () => {
  balloon.style.display = 'block';
});

trigger.addEventListener('mouseout', () => {
  balloon.style.display = 'none';
});

balloon.addEventListener('mouseover', () => {
    balloon.style.display = 'block';
  });

balloon.addEventListener('mouseout', () => {
    balloon.style.display = 'none';
  });
