document.addEventListener('DOMContentLoaded', function() {
    // Example book data
    const books = [
        {
            title: 'Book Title 1',
            author: 'Author Name 1',
            publishedDate: '2023-05-01',
            coverImage: 'book-cover1.jpg',
            description: 'A brief description of the book 1...'
        },
        {
            title: 'Book Title 2',
            author: 'Author Name 2',
            publishedDate: '2023-06-01',
            coverImage: 'book-cover2.jpg',
            description: 'A brief description of the book 2...'
        }
    ];

    // Function to render books
    function renderBooks() {
        const mainContent = document.querySelector('main section');
        books.forEach(book => {
            const article = document.createElement('article');

            const h2 = document.createElement('h2');
            h2.textContent = book.title;
            article.appendChild(h2);

            const author = document.createElement('p');
            author.innerHTML = `Author: <span class="author">${book.author}</span>`;
            article.appendChild(author);

            const publishedDate = document.createElement('p');
            publishedDate.innerHTML = `Published: <time datetime="${book.publishedDate}">${new Date(book.publishedDate).toDateString()}</time>`;
            article.appendChild(publishedDate);

            const img = document.createElement('img');
            img.src = book.coverImage;
            img.alt = `Cover of ${book.title}`;
            article.appendChild(img);

            const description = document.createElement('p');
            description.className = 'description';
            description.textContent = book.description;
            article.appendChild(description);

            mainContent.appendChild(article);
        });
    }

    renderBooks();
});
