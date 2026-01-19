// Load and render AWS services data
async function loadData() {
    try {
        const response = await fetch('data.json');
        const data = await response.json();
        renderDiagram(data);
    } catch (error) {
        console.error('Error loading data:', error);
        document.getElementById('diagramContainer').innerHTML = 
            '<p style="color: #ff6b6b; text-align: center;">Error loading AWS services data. Please check the console.</p>';
    }
}

// Render the entire diagram
function renderDiagram(data) {
    const container = document.getElementById('diagramContainer');
    container.innerHTML = '';

    data.categories.forEach(category => {
        const categoryElement = createCategoryElement(category);
        container.appendChild(categoryElement);
    });
}

// Create a category circle element
function createCategoryElement(category) {
    const categoryDiv = document.createElement('div');
    categoryDiv.className = 'category';

    const title = document.createElement('div');
    title.className = 'category-title';
    title.textContent = category.name;
    categoryDiv.appendChild(title);

    const groupsContainer = document.createElement('div');
    groupsContainer.className = 'groups-container';

    category.groups.forEach(group => {
        const groupElement = createGroupElement(group);
        groupsContainer.appendChild(groupElement);
    });

    categoryDiv.appendChild(groupsContainer);
    return categoryDiv;
}

// Create a group circle element
function createGroupElement(group) {
    const groupDiv = document.createElement('div');
    groupDiv.className = 'group';

    const title = document.createElement('div');
    title.className = 'group-title';
    title.textContent = group.name;
    groupDiv.appendChild(title);

    const servicesContainer = document.createElement('div');
    servicesContainer.className = 'services-container';

    group.services.forEach(service => {
        const serviceElement = createServiceElement(service);
        servicesContainer.appendChild(serviceElement);
    });

    groupDiv.appendChild(servicesContainer);
    return groupDiv;
}

// Create a service element with expandable description
function createServiceElement(service) {
    const serviceDiv = document.createElement('div');
    serviceDiv.className = 'service';

    const titleDiv = document.createElement('div');
    titleDiv.className = 'service-title';
    titleDiv.textContent = service.title;

    const descriptionDiv = document.createElement('div');
    descriptionDiv.className = 'service-description';
    descriptionDiv.textContent = service.description;

    // Add click event to toggle description
    serviceDiv.addEventListener('click', function(e) {
        e.stopPropagation();
        this.classList.toggle('expanded');
    });

    serviceDiv.appendChild(titleDiv);
    serviceDiv.appendChild(descriptionDiv);

    return serviceDiv;
}

// Initialize the diagram when the page loads
document.addEventListener('DOMContentLoaded', loadData);
