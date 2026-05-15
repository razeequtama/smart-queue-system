/* SimpleHouse - Global / Mock Logic */

function getCurrentUser() {
  const user = localStorage.getItem('simplehouse_user');
  return user ? JSON.parse(user) : null;
}

function setCurrentUser(userData) {
  localStorage.setItem('simplehouse_user', JSON.stringify(userData));
}

function clearCurrentUser() {
  localStorage.removeItem('simplehouse_user');
}

function getQueues() {
  const queues = localStorage.getItem('simplehouse_queues');
  return queues ? JSON.parse(queues) : [];
}

function saveQueues(queues) {
  localStorage.setItem('simplehouse_queues', JSON.stringify(queues));
}

function generateQueueNumber() {
  const queues = getQueues();
  return String(queues.length + 1).padStart(4, '0');
}

function validateForm(form) {
  let isValid = true;
  const requiredInputs = form.querySelectorAll('[required]');
  requiredInputs.forEach(input => {
    const errorEl = input.parentElement.querySelector('.error-text');
    if (!input.value.trim()) {
      isValid = false;
      input.classList.add('error');
      if (errorEl) errorEl.style.display = 'block';
    } else {
      input.classList.remove('error');
      if (errorEl) errorEl.style.display = 'none';
    }
  });
  return isValid;
}

function navigateTo(url) {
  window.location.href = url;
}

function logout(role) {
  clearCurrentUser();
  navigateTo(role === 'admin' ? '/admin/login.html' : '/user/login.html');
}

function initSidebar() {
  const currentPage = window.location.pathname.split('/').pop();
  document.querySelectorAll('.sidebar-btn').forEach(btn => {
    const btnPage = btn.getAttribute('data-page');
    if (btnPage && currentPage.includes(btnPage)) btn.classList.add('active');
  });
}

document.addEventListener('DOMContentLoaded', () => { initSidebar(); });
