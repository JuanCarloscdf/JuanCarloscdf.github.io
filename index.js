
/* 🅷🅰🅽🅳🅻🅸🅽🅶 🅵🅾🆁🅼 */
const contactForm = document.getElementById('contact-form-id')
const formMessage = document.getElementById('form-msg')
const formLoader = document.getElementById('form-loader-id')
const formButton = document.getElementById('form-button-id')
contactForm.addEventListener('submit',(e) => {
/*     console.log(Object.fromEntries(new FormData(e.target))); */
    e.preventDefault()
    const formData = Object.fromEntries(new FormData(e.target))
    if(!(/^[a-zA-Z\s'-]{4,50}$/.test(formData.name))){
        formMessage.style.display = "block"
        formMessage.textContent = "Check your name, please"
        return
    }
    if(!(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[(\d{1,3}\.){3}\d{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    .test(formData.email))){
        formMessage.style.display = "block"
        formMessage.textContent = "Insert a valid email please"
        return
    }
    if(!(/^[a-zA-Z0-9\s]{5,}$/.test(formData.message))){
        formMessage.style.display = "block"
        formMessage.textContent = "Check your message, please"
        return
    }

    formMessage.style.display="none"
    formLoader.style.display="block"
    formButton.style.display="none"
    fetch('https://formsubmit.co/ajax/6e9388bc7f79fc68ac0e8562a4b2af2f',
        {
            method:"POST",
            body: new FormData(e.target)
        })
    .then(res => res.ok ? res.json(): Promise.reject(res))
    .then(res => {
        /* console.log(res) */
        
        formLoader.style.display="none"
        formMessage.style.display="block"
        formMessage.style.color="#0DCAF0"
        formMessage.textContent = res.message
        contactForm.reset();
        const formInterval = setInterval(() => {
            formMessage.style.display="none"
            formButton.style.display="block"
            clearInterval(formInterval)
        },1500)

        
    })
    .catch(error => console.log(error))
    
})
/* 🅰🅳🅳🅸🅽🅶 🆂🅴🆁🆅🅸🅲🅴🆂 */
/* render */

const addServices = (containerId, data) => {
    const servicesCont = document.getElementById(containerId)


    data.forEach(service => {
        const serviceCard = document.createElement('article')
        serviceCard.classList.add('service_cont', 'cont-fluid')
        serviceCard.innerHTML = `
            <div class="service-icon-cont">
                <i class="service_icon fa-solid ${service.icon} fa-2x"></i>
            </div>
            <div class="service-info-cont">
                <h3 class="service-info-title">${service.title}</h3>
                <p class="service-info-p">${service.description}</p>
            </div>`
        servicesCont.appendChild(serviceCard)

    });

}
/* call function */
const mockServices = [
    {
        icon: 'fa-database',
        title: 'Database handling',
        description: "Proficient in server-side technologies, database design, and API integration. Committed to robust functionality and seamless performance."
    },
    {
        icon: 'fa-server',
        title: 'Back End developer',
        description: "Experienced server-side technologies, databases, and API integration. Committed to robust functionality and seamless performance."
    },
    {
        icon: 'fa-desktop',
        title: 'Front End developer',
        description: "Experienced in HTML, CSS, JavaScript, and various frameworks. Committed to usability and captivating design."
    },
    {
        icon: 'fa-palette',
        title: 'UI/UX Design',
        description: "Passionate about crafting user-friendly interfaces and captivating experiences."
    }
]
const containerId = 'services-cont'
addServices(containerId, mockServices)
/* 🅰🅳🅳🅸🅽🅶 🆁🅴🆂🆄🅼🅴 */
const addResumes =(containerId,data) => {
    const container = document.getElementById(containerId)

    data.forEach(resume => {
        const card = document.createElement('article')
        card.classList.add('resume-card')
        card.innerHTML=`
            <h3 class="resume-card-title">${resume.title}</h3>
            <h3 class="resume-card-subtitle">${resume.subtitle}</h3>
            <p class="resume-card-content">${resume.content}</p>
        `
        container.appendChild(card) 
    });
}
/* call method */
const mockResume = [
    {
        title:'Electronic engineer',
        subtitle:'Universidad Mayor de San Andres',
        content:'I got my electronic engineer degree in Universidad Mayor de San Andres Bolvia focusing in telecommunications branch',
    },
    {
        title:'Full Stack Developer',
        subtitle:'Free Code Camp',
        content:'I honed my skills at FreeCodeCamp, solidifying my path as a Full-stack Developer after my background in Electronic Engineering.',
    }
]
const resumeContId = 'resume-cont'
addResumes(resumeContId,mockResume)
/* 🅰🅳🅳🅸🅽🅶 🆂🅺🅸🅻🅻 🅱🅰🆁🆂 */

const addSkills = (containerId,data) => {
    const container = document.getElementById(containerId)
    data.forEach(skill => {
        const card = document.createElement('article')
        card.classList.add('resume-card-skill')
        card.innerHTML=`
            <img class="resume-card-skill-icon"  class="contact__icon" src="./asets/icons/${skill.icon}" alt="">
            <progress class="resume-card-fillbar" value=${skill.value} max="100"></progress>
        `
        container.appendChild(card)
    });
}
/* clling */
const skillsId = 'skills-id-cont'
const mockSkills=[
    {
        icon:'js.svg',
        value:'80'
    },
    {
        icon:'typescriptlang-icon.svg',
        value:'70'
    },
    {
        icon:'nodejs-icon.svg',
        value:'70'
    },
    {
        icon:'w3_html5-icon.svg',
        value:'80'
    },
    {
        icon:'w3_css-icon.svg',
        value:'60'
    },
    {
        icon:'mongodb-icon.svg',
        value:'65'
    },
    {
        icon:'mysql-icon.svg',
        value:'60'
    },
    {
        icon:'reactjs-icon.svg',
        value:'60'
    },
    {
        icon:'docker-icon.svg',
        value:'50'
    }
]
addSkills(skillsId,mockSkills)

/* 🅰🅳🅳🅸🅽🅶 🅿🆁🅾🅹🅴🅲🆃🆂*/

const addProjects =(containerId,data) => {
    const container = document.getElementById(containerId)
    data.forEach(project => {
        const card = document.createElement('article')
        card.classList.add('projects-card')
        card.setAttribute("style",`background:linear-gradient(#00000093, #00000097)`)
        card.innerHTML= `
            <h2 class="projects-card-title">${project.title}</h2>
            <p class="projects-card-content">${project.content}</p>
        `
        card.addEventListener('click',() => {
            /* console.log(project); */
            const modalCont = document.getElementById('modal-id')
            renderModal(modalCont,project)
            modalCont.classList.add('modal--show')
        })
        container.appendChild(card)
    });
}
const projectsId = "projects-container"
const mockProjects = [
    {   
        id:1,
        title:"IoT Platform",
        content:'The Internet of Things platform enables users to manage IoT devices. In this project, an IoT test device was created with sensors and actuators. Communication is handled by the MQTT protocol.',
        imgUrl:['./asets/iot3.png','./asets/iot2.png','./asets/iot1.png'],
        client:"Personal project",
        tech:"Node.js, html, css, JavaScript, Mongo, Express, Nuxt.js, HighCharts, Docker, MQTT-Broker",
        year:"2019",
        git:"https://github.com/JuanCarloscdf/app",
        gitb:"https://github.com/JuanCarloscdf/app",
    },
    {
        id:2,
        title:"Online Store",
        content:'This website allows users to both offer and purchase products. It features functionalities like a shopping cart, product creation, and buying processes.',
        imgUrl:['./asets/store1.png','./asets/store2.png'],
        client:"Personal project",
        tech:"Node.js, React, HTML, CSS, TypeScript, Express, MySQL, Docker",
        year:"2022",
        git:"https://github.com/JuanCarloscdf/StoreUI",
        gitb:"https://github.com/JuanCarloscdf/StoreAPI",
    },
    {
        id:3,
        title:"Unident",
        content:'This page enables dental appointment management, including viewing establishment details, patient reviews, service information, checking appointment availability, making reservations, and more.',
        imgUrl:['./asets/unident1.png','./asets/unident2.png','./asets/unident3.png'],
        client:"Personal project",
        tech:"JS,HTML,CSS, TypeScript, Nest.js, MySQL, Redis, Docker",
        year:"2022",
        git:"https://github.com/JuanCarloscdf/UnidentUI",
        gitb:"https://github.com/JuanCarloscdf/UnidentAPI",
    }
]
addProjects(projectsId,mockProjects)
/* 🅽🅰🆅🅱🅰🆁 */

const  arrowElements = document.querySelectorAll('.list__button--click')
arrowElements.forEach(arrowElement =>{
    arrowElement.addEventListener('click',() => {
        arrowElement.classList.toggle('arrow')

        let height = 0;
        const menu = arrowElement.nextElementSibling

        if(menu.clientHeight === 0){
            height = menu.scrollHeight
        }
        menu.style.height = `${height}px`
    })
})


/* 🆁🅴🅽🅳🅴🆁 🅼🅾🅳🅰🅻 */
const renderModal = (containerId,data) => {
    const container = containerId
    container.innerHTML='';
    const modalDiv = document.createElement('div')
    modalDiv.classList.add('modal__container')
    modalDiv.innerHTML=`
        <div class="modal__conta">
            <i class=" modal__close  fa-regular fa-circle-xmark" id="close_modal_id"></i>
            <h1 class="modal__title">${data.title}</h1>
            <div class="modal__content">
                <div class="modal__view">
                    <figure>
                    <img class="modal__view-img" src="${data.imgUrl[0]}" alt="" id="modal__img_id">
                    <figcaption class="modal__img--figcaption" id="img-figcaption-id">1 from ${data.imgUrl.length} tap the image</figcaption>
                    </figure>
                </div>
                <div class="modal__info">
                    <h1 class="modal__info-title">Project Info:</h1>
                    <p class="modal__info-text">${data.content}</p>
                    <h2 class="modal__info-title">Project details</h3>
                    <h3 class="modal__info-textItem">Client: <span>${data.client}</span></h3>
                    <hr class="modal__info_hr">
                    <h3 class="modal__info-textItem">Tecnologies: <span>${data.tech}</span></h3>
                    <hr class="modal__info_hr">
                    <h3 class="modal__info-textItem">Year: <span>${data.year}</span></h3>
                    <hr class="modal__info_hr">
                    <h3 class="modal__info-textItem">Front End: <a class="modal__info__link" target="_blank" href=" ${data.git}">${data.git ? data.git:''}</a></h3>
                    <hr class="modal__info_hr">
                    <h3 class="modal__info-textItem">Back End: <a  class="modal__info__link"target="_blank" href=" ${data.gitb}">${data.gitb ? data.gitb:''}</a></h3>
                    <hr class="modal__info_hr">
                </div>
            </div>
        </div>
    `
    container.appendChild(modalDiv)
    const closeModal = document.getElementById('close_modal_id')
    closeModal.addEventListener('click',() => {
        container.classList.remove('modal--show')
    })

    let imgIndex = 0;
    const imagesLenght = data.imgUrl.length
    const modalImg = document.getElementById('modal__img_id')
    const figcaption = document.getElementById('img-figcaption-id')
    modalImg.addEventListener('click',(params) => {
        imgIndex = imgIndex + 1
        if(imgIndex === data.imgUrl.length){
            imgIndex = 0
        }
        modalImg.setAttribute('src',`${data.imgUrl[imgIndex]}`)
        figcaption.textContent = `${imgIndex + 1} from ${data.imgUrl.length}`
    
    }) 
}
/* addins projects to navbar */

const addProjectsNav =(containerId,data) => {
    const container = document.getElementById(containerId)
    data.forEach((project) => {
        const projectLi = document.createElement('li')
        projectLi.classList.add('list__inside')
        projectLi.innerHTML=`
            <a href="" class="nav__link nav__link--inside">${project.title}</a>
        `
        projectLi.addEventListener('click',(e) => {
            e.preventDefault()
            const modalCont = document.getElementById('modal-id')
            renderModal(modalCont,project)
            modalCont.classList.add('modal--show')
        })
        container.appendChild(projectLi)
    })
}
addProjectsNav('nav__projects__list',mockProjects)
