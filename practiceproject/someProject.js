const cardsData = [
  {
    title: 'Mountain Escape',
    description: 'A calm retreat with fresh air, green trails, and peaceful hills.',
    img: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'City Lights',
    description: 'Modern nightlife, street food, and urban adventures in a glowing city.',
    img: 'https://images.unsplash.com/photo-1494745830058-7f07b2b8ef7f?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Ocean Breeze',
    description: 'Relax by the water with waves, sand, and a cool salty breeze.',
    img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Forest Walk',
    description: 'Nature trails, tall trees, and a quiet place to breathe deeply.',
    img: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Desert Dream',
    description: 'Warm sunsets, sandy dunes, and a magical golden landscape.',
    img: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Cozy Cabin',
    description: 'A snug hideaway with warm lighting, soft blankets, and comfort.',
    img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80'
  }
];

const cardsContainer = document.getElementById('cardsContainer');
const searchInput = document.getElementById('searchInput');

function renderCards(items) {
  cardsContainer.innerHTML = '';

  if (items.length === 0) {
    cardsContainer.innerHTML = '<div class="no-results">No cards match your search.</div>';
    return;
  }

  items.forEach(({ title, description, img }) => {
    const card = document.createElement('div');
    card.className = 'card';

    const imgWrapper = document.createElement('div');
    imgWrapper.className = 'card-img';

    const image = document.createElement('img');
    image.src = img;
    image.alt = title;

    imgWrapper.appendChild(image);

    const content = document.createElement('div');
    content.className = 'card-content';

    const cardTitle = document.createElement('h2');
    cardTitle.textContent = title;

    const cardDesc = document.createElement('p');
    cardDesc.textContent = description;

    content.append(cardTitle, cardDesc);
    card.append(imgWrapper, content);
    cardsContainer.appendChild(card);
  });
}

function filterCards(query) {
  const normalized = query.trim().toLowerCase();

  if (!normalized) {
    return cardsData;
  }

  return cardsData.filter(({ title, description }) => {
    return (
      title.toLowerCase().includes(normalized) ||
      description.toLowerCase().includes(normalized)
    );
  });
}

searchInput.addEventListener('input', () => {
  const filtered = filterCards(searchInput.value);
  renderCards(filtered);
});

renderCards(cardsData);
