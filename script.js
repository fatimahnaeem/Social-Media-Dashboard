const navToggle = document.getElementById('nav-toggle');
const navMenu = document.querySelector('.nav-menu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});












document.getElementById('postButton').addEventListener('click', function() {
    const postInput = document.getElementById('postInput');
    const postContent = postInput.value;

    if (postContent) {
        const postsContainer = document.getElementById('postsContainer');

        const postDiv = document.createElement('div');
        postDiv.classList.add('post');
        postDiv.textContent = postContent;

        postsContainer.prepend(postDiv); // Add the new post at the top
        postInput.value = ''; // Clear input field
    } else {
        alert('Please enter something to post.');
    }
});
