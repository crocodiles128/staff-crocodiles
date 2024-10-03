// auth.js

export function checkAuth() {
    const token = localStorage.getItem('authToken');
    if (!token) {
      window.location.href = '/staff-crocodiles/login.html'; // Redireciona para a página de login se não estiver autenticado
    }
  }
  
  export function logout() {
    localStorage.removeItem('authToken'); // Remove o token de autenticação
    window.location.href = '/staff-crocodiles/login.html'; // Redireciona para a página de login
  }
  
  export function initAuth() {
    document.addEventListener('DOMContentLoaded', () => {
      checkAuth(); // Verifica a autenticação ao carregar a página
  
      const logoutButton = document.getElementById('logoutButton');
      if (logoutButton) {
        logoutButton.addEventListener('click', logout);
      }
    });
  }
  