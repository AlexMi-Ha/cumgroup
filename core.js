document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("navbar-toggle").addEventListener('click', function() {
        toggleNav();
    });
    
    const links = document.getElementsByClassName('nav-link');
    for(element of links) {
        element.addEventListener('click', function() {
            toggleNav();
        });
    }
});


function toggleNav() {
    const nav = document.getElementById('nav');
    if(nav.classList.contains('active')) {
        nav.classList.remove('active');
    }else {
        nav.classList.add('active');
    }
}


const allProjects = new Map();

class Project {
    constructor(projId, title, previewImage, previewText, modalHtml) {
        this.projId = projId;
        this.title = title;
        this.previewImage = previewImage;
        this.previewText = previewText;
        this.modalHtml = modalHtml;
    }
}

function addProject(proj) {
    allProjects.set(proj.projId, proj);
    return proj;
}

function openProjectModal(projId) {
    const proj = allProjects.get(projId);
    if(!proj)
        return;

    const modal = document.getElementById('proj-dialog');
    document.getElementById('modal-content').innerHTML = proj.modalHtml;
    modal.showModal();
}

function reloadProjectView() {
    htmlGen = "";
    for(const proj of allProjects.values()) {
        htmlGen += `
        <div class="card">
                        <div class="card-wrap">
                            <div>
                                <img class="card-image" src="${proj.previewImage}"/>
                                <div class="card-content">
                                    <h2 class="card-title">${proj.title}</h2>
                                    <p>${proj.previewText}</p>
                                </div>
                            </div>
                            <div class="card-actions">
                                <button onclick="openProjectModal('${proj.projId}')">Read More</button>
                            </div>
                        </div>
                    </div>
        `;
    }
    document.getElementById("project-cards").innerHTML = htmlGen;
}