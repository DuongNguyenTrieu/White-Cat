// scripts.js
document.getElementById('postForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;

    const postElement = document.createElement('div');
    postElement.classList.add('post');
    postElement.innerHTML = `
        <h2>${title}</h2>
        <p>${content}</p>
    `;

    document.getElementById('posts').prepend(postElement);

    // Xóa nội dung form sau khi đăng
    document.getElementById('postForm').reset();
});
