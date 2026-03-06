const orderBackdrop = document.querySelector('.order-modal-overlay');
const orderCloseBtn = document.querySelector('.order-close-btn');

export default function openOrderModal() {
  // Show modal order window
  orderBackdrop.classList.add('is-open');

  // Add listener to close button
  orderCloseBtn.addEventListener('click', closeOrderModal);

  // Add listener to backdrop
  orderBackdrop.addEventListener('click', handleBackdropClick);

  // Add listener for Esc key
  document.addEventListener('keydown', handleEscKeydown);
}

function closeOrderModal() {
  // Hide modal order window
  orderBackdrop.classList.remove('is-open');

  // Remove listener from close button
  orderCloseBtn.removeEventListener('click', closeOrderModal);

  // Remove listener from backdrop
  orderBackdrop.removeEventListener('click', handleBackdropClick);

  // Remove listener from Esc key
  document.removeEventListener('keydown', handleEscKeydown);
}

function handleBackdropClick(event) {
  if (event.target === orderBackdrop) {
    closeOrderModal();
  }
}

function handleEscKeydown(event) {
  if (event.key === 'Escape') {
    closeOrderModal();
  }
}
