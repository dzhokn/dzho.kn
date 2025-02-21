export async function loadFooter(relativePath = '') {
  try {
    const response = await fetch(`${relativePath}components/footer.html`);
    const html = await response.text();
    document.body.insertAdjacentHTML('beforeend', html);
  } catch (error) {
    console.error('Error loading footer:', error);
  }
} 