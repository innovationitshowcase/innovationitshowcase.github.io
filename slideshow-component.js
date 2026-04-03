import { Project } from './Project.js';

function createCard(project) {
    const div = document.createElement('div');
    div.classList.add('card');

    div.innerHTML = `
        <div class="card-content">
            <div class="card-text">
            <h2>${project.projectTitle}</h2>
            <p class="author">By ${project.author}</p>
            </div>

            <div class="thumbnail-wrapper">
            <img src="${project.thumbnailPath}" class="thumbnail" alt="">
            </div>
        </div>
    `;

    return div;
}

const projects = [
    new Project("Gunship on Crack", "Alice", "https://www.youtube.com/watch?v=nIWZfhpnq6M"),
    new Project("Paper Mache Computer", "Bob", "https://www.youtube.com/watch?v=nIWZfhpnq6M"),
    new Project("IRL Death Note", "Charlie", "https://www.youtube.com/watch?v=nIWZfhpnq6M"),
    new Project("Java Cat", "David", "https://www.youtube.com/watch?v=nIWZfhpnq6M"),
    new Project("Jumping a Fence", "Edgar", "https://www.youtube.com/watch?v=nIWZfhpnq6M"),
    new Project("Virtual Insanity", "Felix", "https://www.youtube.com/watch?v=nIWZfhpnq6M"),
    new Project("HeadpShones", "Greg", "https://www.youtube.com/watch?v=nIWZfhpnq6M"),
    new Project("Java Drink", "Jeffrey", "https://www.youtube.com/watch?v=nIWZfhpnq6M")
];

const display = document.getElementById('display');
const PROJECTS_PER_PAGE = 4;
const TOTAL_PAGES = Math.ceil(projects.length / PROJECTS_PER_PAGE);

let page = 0;

function renderPage() {
    display.innerHTML = '';

    for (let i = 0; i < PROJECTS_PER_PAGE; i++) {
        const index = page * PROJECTS_PER_PAGE + i;
        if (index >= projects.length) break;
        display.appendChild(createCard(projects[index]));
    }

    page = (page + 1) % TOTAL_PAGES;
}

renderPage();
setInterval(renderPage, 10000);
