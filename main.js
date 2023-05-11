const trigger = document.querySelector('.trigger');
const balloon = document.querySelector('.balloon');

trigger.addEventListener('mouseover', () => {
  balloon.style.display = 'block';
  trigger.style.display = 'none';
});

trigger.addEventListener('mouseout', () => {
  balloon.style.display = 'none';
  trigger.style.display = 'flex';
});

balloon.addEventListener('mouseover', () => {
    balloon.style.display = 'block';
    trigger.style.display = 'none';
  });

balloon.addEventListener('mouseout', () => {
    balloon.style.display = 'none';
    trigger.style.display = 'flex';
  });
