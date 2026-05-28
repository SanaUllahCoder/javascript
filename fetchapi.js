document.addEventListener('DOMContentLoaded', () => {
    const container = document.createElement('div');
    container.id = 'users-container';
    container.style.display = 'grid';
    container.style.gridTemplateColumns = 'repeat(auto-fit, minmax(220px, 1fr))';
    container.style.gap = '12px';
    container.style.padding = '12px';
    container.style.boxSizing = 'border-box';
    document.body.prepend(container);

    fetch('https://jsonplaceholder.typicode.com/users')
        .then((raw) => raw.json())
        .then((data) => {
            data.forEach((user) => {
                const card = document.createElement('div');
                card.className = 'user-card';
                card.style.border = '1px solid #e0e0e0';
                card.style.borderRadius = '8px';
                card.style.padding = '10px';
                card.style.background = '#fff';
                card.style.boxShadow = '0 1px 3px rgba(0,0,0,0.06)';

                const name = document.createElement('h3');
                name.textContent = user.name;
                name.style.margin = '0 0 6px 0';

                const username = document.createElement('p');
                username.textContent = `@${user.username}`;
                username.style.margin = '0 0 6px 0';
                username.style.color = '#555';

                const email = document.createElement('p');
                email.innerHTML = `<a href="mailto:${user.email}">${user.email}</a>`;
                email.style.margin = '0';

                card.appendChild(name);
                card.appendChild(username);
                card.appendChild(email);
                container.appendChild(card);
            });
        })
        .catch((err) => console.error('Fetch error:', err));
});