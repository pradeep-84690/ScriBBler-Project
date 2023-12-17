function toggleEdit() {
    const postTitle = document.querySelector('.title-text');
    const postContent = document.querySelector('.post-content');
    const editButton = document.querySelector('.edit-button');
    const saveButton = document.querySelector('.save-button');
  
    const isEditable = postTitle.contentEditable === 'true';
  
    postTitle.contentEditable = !isEditable;
    postContent.contentEditable = !isEditable;
    editButton.classList.toggle('hidden');
    saveButton.classList.toggle('hidden');
  
    if (!isEditable) {
      postTitle.classList.add('editable-border');
      postContent.classList.add('editable-border');
      editButton.innerHTML = 'Cancel <i class="fas fa-times"></i>';
    } else {
      postTitle.classList.remove('editable-border');
      postContent.classList.remove('editable-border');
      editButton.innerHTML = 'Edit <i class="fas fa-edit"></i>';
    }
  }
  
  function saveChanges() {
    const postTitle = document.querySelector('.title-text');
    const postContent = document.querySelector('.post-content');
    const editButton = document.querySelector('.edit-button');
    const saveButton = document.querySelector('.save-button');
  
    const updatedTitle = postTitle.textContent;
    const updatedContent = postContent.textContent;
  
    postTitle.innerHTML = updatedTitle;
    postContent.innerHTML = updatedContent;
  
    postTitle.contentEditable = false;
    postContent.contentEditable = false;
    editButton.classList.toggle('hidden');
    saveButton.classList.toggle('hidden');
  
    postTitle.classList.remove('editable-border');
    postContent.classList.remove('editable-border');
    editButton.innerHTML = 'Edit <i class="fas fa-edit"></i>';
  }
  

  /*Like Button*/
  let likeCount = 0;

  function likePost() {
    const likeButton = document.querySelector('.like-button');
    const likeStatus = document.querySelector('.like-status');
  
    likeCount++;
    if (likeCount === 1) {
      likeStatus.textContent = '1 person likes this!';
    } else {
      likeStatus.textContent = `${likeCount} people like this!`;
    }
  
    likeButton.classList.add('liked');
    likeButton.disabled = true;
    likeButton.innerHTML = '<i class="fas fa-thumbs-up"></i> Liked !';
  }
  

  /**Comment Section*/
  function addComment() {
    const commentInput = document.querySelector('.comment-input');
    const allComments = document.querySelector('.all-comments');
  
    const commentText = commentInput.value;
    if (commentText.trim() !== '') {
      const commentElement = document.createElement('div');
      commentElement.classList.add('comment');
      commentElement.textContent = commentText;
  
      // Insert the new comment at the top of the comments section
      allComments.insertBefore(commentElement, allComments.firstChild);
      commentInput.value = '';
  
      // Scroll to the newly added comment
      commentElement.scrollIntoView({ behavior: 'smooth' });
    }
  }
  