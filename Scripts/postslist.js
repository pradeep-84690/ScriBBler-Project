const deletePostIcons = document.querySelectorAll('.delete-post');
const modalOverlay = document.querySelector('.modal-overlay');
const modalYesButton = document.querySelector('.modal-yes');
const modalNoButton = document.querySelector('.modal-no');

deletePostIcons.forEach((icon) => {
  icon.addEventListener('click', () => {
    modalOverlay.style.display = 'flex';
    const post = icon.closest('.post');
    const postContainer = post.parentNode;

    modalYesButton.addEventListener('click', () => {
      const index = Array.from(postContainer.children).indexOf(post);
      postContainer.removeChild(post);
      modalOverlay.style.display = 'none';

      // Rearrange remaining posts
      const remainingPosts = document.querySelectorAll('.post');
      const postsPerRow = 2;

      remainingPosts.forEach((post, i) => {
        const rowIndex = Math.floor(i / postsPerRow);
        const columnIndex = i % postsPerRow;
        post.style.order = rowIndex * postsPerRow + columnIndex + 1;
      });
    });
  });
});

modalNoButton.addEventListener('click', () => {
  modalOverlay.style.display = 'none';
});
