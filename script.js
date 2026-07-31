// Aguarda o carregamento completo do documento HTML
document.addEventListener('DOMContentLoaded', () => {
  // Seleciona os elementos do HTML pelos seus IDs
  const likeButton = document.getElementById('btnLike');
  const countDisplay = document.getElementById('countDisplay');

  // Variável para controlar a quantidade de likes
  let likes = 0;

  // Adiciona o evento de clique ao botão
  likeButton.addEventListener('click', () => {
    likes++;

    // Atualiza a exibição na tela com concordância gramatical
    if (likes === 1) {
      countDisplay.textContent = '1 curtida';
    } else {
      countDisplay.textContent = `${likes} curtidas`;
    }
  });
});
