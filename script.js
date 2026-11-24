const menuDropdown = document.querySelector('.menu-dropdown');
const menuBtn = document.getElementById('menu-btn');

if (menuBtn && menuDropdown) {
  menuBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    const isOpen = menuDropdown.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded', isOpen);
  });

  document.addEventListener('click', (e) => {
    if (!menuDropdown.contains(e.target)) {
      menuDropdown.classList.remove('open');
      menuBtn.setAttribute('aria-expanded', 'false');
    }
  });
}

const resForm = document.querySelector('form.booking-bar');
const modal = document.getElementById('modal');
const closeBtn = document.getElementById('closeBtn');
const summaryText = document.getElementById('summaryText');
const confirmForm = document.getElementById('confirmForm');

if (resForm && modal) {
  resForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const dateInput = document.getElementById('res-date').value;
    const guestsSelect = document.getElementById('res-guests');
    const guestText = guestsSelect.options[guestsSelect.selectedIndex].text;

    summaryText.textContent = `${dateInput} • ${guestText}`;
    modal.classList.add('active');
  });
  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      modal.classList.remove('active');
    });
  }

  
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('active');
    }
  });

 
  if (confirmForm) {
    confirmForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Reservation confirmed! We look forward to seeing you at The Nook Cafe.');
      modal.classList.remove('active');
      resForm.reset();
      confirmForm.reset();
    });
  }
}