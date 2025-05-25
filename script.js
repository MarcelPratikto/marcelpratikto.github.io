// Marcel Pratikto Resume Website - JavaScript

// Resume data storage
let resumeData = {
    profile: {
        name: 'Marcel Pratikto',
        title: 'Lead Software Engineer',
        summary: 'Computer Science graduate with 4+ years of Python experience and expertise in machine learning, embedded systems, and scalable software development.',
        imageUrl: ''
    },
    contact: {
        phone: '267-356-7568',
        email: 'marcelaapratikto@gmail.com',
        location: 'Lexington, KY'
    },
    social: [
        { platform: 'linkedin', icon: 'fab fa-linkedin', url: 'https://linkedin.com/in/marcel-pratikto' },
        { platform: 'github', icon: 'fab fa-github', url: 'https://github.com/MarcelPratikto' }
    ],
    skills: [
        {
            category: 'Languages',
            icon: 'fas fa-code',
            skills: ['Python (4 years)', 'C & C++ (3 years)', 'Java & C# (1 year)', 'JavaScript', 'HTML & CSS']
        },
        {
            category: 'Development',
            icon: 'fas fa-tools',
            skills: ['Git & GitHub', 'Docker', 'Linux Terminal', 'Agile & Scrum', 'RESTful APIs']
        },
        {
            category: 'Embedded Systems',
            icon: 'fas fa-microchip',
            skills: ['Raspberry Pi', 'Arduino', 'HPC Systems']
        },
        {
            category: 'Languages',
            icon: 'fas fa-globe',
            skills: ['English (Native)', 'Indonesian (Proficient)']
        }
    ],
    experience: [
        {
            title: 'Lead Software Engineer',
            company: 'COG',
            dateRange: 'March 2025 – April 2025',
            description: [
                'Spearheaded a software product launch that achieved 80% adoption rate among initial users, delivering a solution that addressed critical workflow inefficiencies',
                'Architected an innovative HyperCard-like system using JanusGraph and BerkleyDB, enabling intuitive management of files and graphs',
                'Oversaw development and maintenance of RESTful APIs, ensuring scalability, security, and optimal performance with strategic emphasis on AWS cloud preparation'
            ]
        },
        {
            title: 'Software Engineer Intern',
            company: 'BYU Brand & Creative',
            dateRange: 'July 2024 – October 2024',
            description: [
                'Built a live language translation app that improved communication efficiency by 95% for international students and received a 4.5/5 user satisfaction rating',
                'Reduced new developer onboarding time from 1 month to 2 weeks by creating comprehensive technical documentation',
                'Collaborated with an Agile software development team to support a high-traffic website with over 30 million annual connections'
            ]
        },
        {
            title: 'Undergraduate Researcher Intern',
            company: 'BYU ECEN',
            dateRange: 'May 2023 – July 2023',
            description: [
                'Created a parser to merge outputs from multiple simulation tools, accelerating data analysis for UAV collision avoidance research',
                'Boosted target tracking accuracy by 90% through innovative computer vision algorithm implementation',
                'Transformed complex research findings into actionable insights through daily briefings, enabling timely decision-making'
            ]
        },
        {
            title: 'Computer Science Tutor',
            company: 'BYU-I Tutoring Center',
            dateRange: 'January 2022 – May 2023',
            description: [
                'Elevated student performance by 30% on average across programming courses by developing custom learning materials',
                'Mentored 20+ students each semester, with 90% reporting significant improvement in understanding core CS principles'
            ]
        }
    ],
    education: [
        {
            degree: 'BS, Computer Science',
            school: 'BYU-I | Rexburg, ID',
            details: 'Machine Learning Emphasis, Embedded Systems Minor | GPA: 3.8 | September 2020 – July 2024'
        }
    ]
};

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    // Check if we're in development mode (localhost or file://)
    const isDevelopment = location.hostname === 'localhost' || 
                         location.hostname === '127.0.0.1' || 
                         location.protocol === 'file:' ||
                         location.hostname === '' ||
                         new URLSearchParams(location.search).has('dev');
    
    if (isDevelopment) {
        document.body.classList.add('dev-mode');
    }
    
    // Initialize all interactive features
    initializeAnimations();
    initializeContactInteractions();
    initializeSmoothScrolling();
    initializeSkillTags();
});

// ==================== MODAL FUNCTIONS ====================

function openModal(modalId) {
    document.getElementById(modalId).style.display = 'block';
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

// Close modal when clicking outside
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = 'none';
    }
}

// ==================== PROFILE EDITING FUNCTIONS ====================

function editProfile() {
    document.getElementById('editName').value = resumeData.profile.name;
    document.getElementById('editTitle').value = resumeData.profile.title;
    document.getElementById('editSummary').value = resumeData.profile.summary;
    document.getElementById('profileImageUrl').value = resumeData.profile.imageUrl || '';
    openModal('profileModal');
}

document.getElementById('profileForm').addEventListener('submit', function(e) {
    e.preventDefault();
    resumeData.profile.name = document.getElementById('editName').value;
    resumeData.profile.title = document.getElementById('editTitle').value;
    resumeData.profile.summary = document.getElementById('editSummary').value;
    resumeData.profile.imageUrl = document.getElementById('profileImageUrl').value;
    
    updateProfileDisplay();
    closeModal('profileModal');
});

function updateProfileDisplay() {
    document.getElementById('profileName').textContent = resumeData.profile.name;
    document.getElementById('profileTitle').textContent = resumeData.profile.title;
    document.getElementById('profileSummary').textContent = resumeData.profile.summary;
    
    const profileImage = document.getElementById('profileImage');
    if (resumeData.profile.imageUrl) {
        profileImage.innerHTML = `<img src="${resumeData.profile.imageUrl}" alt="Profile Picture">`;
    } else {
        profileImage.innerHTML = '<i class="fas fa-user"></i>';
    }
}

// ==================== CONTACT EDITING FUNCTIONS ====================

function editContact() {
    document.getElementById('editPhone').value = resumeData.contact.phone;
    document.getElementById('editEmail').value = resumeData.contact.email;
    document.getElementById('editLocation').value = resumeData.contact.location;
    openModal('contactModal');
}

document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    resumeData.contact.phone = document.getElementById('editPhone').value;
    resumeData.contact.email = document.getElementById('editEmail').value;
    resumeData.contact.location = document.getElementById('editLocation').value;
    
    updateContactDisplay();
    closeModal('contactModal');
});

function updateContactDisplay() {
    const contactInfo = document.getElementById('contactInfo');
    contactInfo.innerHTML = `
        ${resumeData.contact.phone ? `<div class="contact-item"><i class="fas fa-phone"></i><span>${resumeData.contact.phone}</span></div>` : ''}
        ${resumeData.contact.email ? `<div class="contact-item"><i class="fas fa-envelope"></i><span>${resumeData.contact.email}</span></div>` : ''}
        ${resumeData.contact.location ? `<div class="contact-item"><i class="fas fa-map-marker-alt"></i><span>${resumeData.contact.location}</span></div>` : ''}
    `;
    
    // Re-initialize contact interactions after updating
    initializeContactInteractions();
}

// ==================== SOCIAL LINKS EDITING FUNCTIONS ====================

function editSocial() {
    const socialLinksEdit = document.getElementById('socialLinksEdit');
    socialLinksEdit.innerHTML = '';
    
    resumeData.social.forEach((social, index) => {
        addSocialLinkEdit(social, index);
    });
    
    openModal('socialModal');
}

function addSocialLink() {
    const index = resumeData.social.length;
    addSocialLinkEdit({ platform: '', icon: '', url: '' }, index);
}

function addSocialLinkEdit(social, index) {
    const socialLinksEdit = document.getElementById('socialLinksEdit');
    const linkDiv = document.createElement('div');
    linkDiv.className = 'form-group';
    linkDiv.innerHTML = `
        <label>Social Link ${index + 1}:</label>
        <div class="list-item">
            <select class="social-platform" data-index="${index}">
                <option value="">Select Platform</option>
                <option value="linkedin" ${social.platform === 'linkedin' ? 'selected' : ''}>LinkedIn</option>
                <option value="github" ${social.platform === 'github' ? 'selected' : ''}>GitHub</option>
                <option value="twitter" ${social.platform === 'twitter' ? 'selected' : ''}>Twitter</option>
                <option value="instagram" ${social.platform === 'instagram' ? 'selected' : ''}>Instagram</option>
                <option value="facebook" ${social.platform === 'facebook' ? 'selected' : ''}>Facebook</option>
                <option value="website" ${social.platform === 'website' ? 'selected' : ''}>Website</option>
            </select>
            <input type="url" placeholder="URL" class="social-url" data-index="${index}" value="${social.url}">
            <button type="button" class="remove-btn" onclick="removeSocialLink(${index})">Remove</button>
        </div>
    `;
    socialLinksEdit.appendChild(linkDiv);
}

function removeSocialLink(index) {
    resumeData.social.splice(index, 1);
    editSocial(); // Refresh the edit view
}

document.getElementById('socialForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const platforms = document.querySelectorAll('.social-platform');
    const urls = document.querySelectorAll('.social-url');
    
    resumeData.social = [];
    
    platforms.forEach((platform, index) => {
        const platformValue = platform.value;
        const urlValue = urls[index].value;
        
        if (platformValue && urlValue) {
            let icon = 'fas fa-link'; // default icon
            switch(platformValue) {
                case 'linkedin': icon = 'fab fa-linkedin'; break;
                case 'github': icon = 'fab fa-github'; break;
                case 'twitter': icon = 'fab fa-twitter'; break;
                case 'instagram': icon = 'fab fa-instagram'; break;
                case 'facebook': icon = 'fab fa-facebook'; break;
                case 'website': icon = 'fas fa-globe'; break;
            }
            
            resumeData.social.push({
                platform: platformValue,
                icon: icon,
                url: urlValue
            });
        }
    });
    
    updateSocialDisplay();
    closeModal('socialModal');
});

function updateSocialDisplay() {
    const socialLinks = document.getElementById('socialLinks');
    socialLinks.innerHTML = resumeData.social.map(social => 
        `<a href="${social.url}" target="_blank"><i class="${social.icon}"></i></a>`
    ).join('');
}

// ==================== SKILLS EDITING FUNCTIONS ====================

function editSkills() {
    const skillCategoriesEdit = document.getElementById('skillCategoriesEdit');
    skillCategoriesEdit.innerHTML = '';
    
    resumeData.skills.forEach((category, index) => {
        addSkillCategoryEdit(category, index);
    });
    
    openModal('skillsModal');
}

function addSkillCategory() {
    const index = resumeData.skills.length;
    addSkillCategoryEdit({ category: '', icon: 'fas fa-star', skills: [] }, index);
}

function addSkillCategoryEdit(skillCategory, index) {
    const skillCategoriesEdit = document.getElementById('skillCategoriesEdit');
    const categoryDiv = document.createElement('div');
    categoryDiv.className = 'form-group';
    categoryDiv.innerHTML = `
        <label>Skill Category ${index + 1}:</label>
        <div class="list-item">
            <input type="text" placeholder="Category Name" class="category-name" data-index="${index}" value="${skillCategory.category}">
            <select class="category-icon" data-index="${index}">
                <option value="fas fa-code" ${skillCategory.icon === 'fas fa-code' ? 'selected' : ''}>Code</option>
                <option value="fas fa-tools" ${skillCategory.icon === 'fas fa-tools' ? 'selected' : ''}>Tools</option>
                <option value="fas fa-microchip" ${skillCategory.icon === 'fas fa-microchip' ? 'selected' : ''}>Hardware</option>
                <option value="fas fa-globe" ${skillCategory.icon === 'fas fa-globe' ? 'selected' : ''}>Languages</option>
                <option value="fas fa-star" ${skillCategory.icon === 'fas fa-star' ? 'selected' : ''}>Star</option>
                <option value="fas fa-cog" ${skillCategory.icon === 'fas fa-cog' ? 'selected' : ''}>Settings</option>
            </select>
            <button type="button" class="remove-btn" onclick="removeSkillCategory(${index})">Remove</button>
        </div>
        <div class="dynamic-list">
            <label>Skills:</label>
            <div id="skills-${index}">
                ${skillCategory.skills.map((skill, skillIndex) => 
                    `<div class="list-item">
                        <input type="text" value="${skill}" class="skill-item" data-category="${index}" data-skill="${skillIndex}">
                        <button type="button" class="remove-btn" onclick="removeSkill(${index}, ${skillIndex})">Remove</button>
                    </div>`
                ).join('')}
            </div>
            <button type="button" class="add-btn" onclick="addSkill(${index})">Add Skill</button>
        </div>
    `;
    skillCategoriesEdit.appendChild(categoryDiv);
}

function removeSkillCategory(index) {
    resumeData.skills.splice(index, 1);
    editSkills(); // Refresh the edit view
}

function addSkill(categoryIndex) {
    const skillsDiv = document.getElementById(`skills-${categoryIndex}`);
    const skillIndex = skillsDiv.children.length;
    const skillDiv = document.createElement('div');
    skillDiv.className = 'list-item';
    skillDiv.innerHTML = `
        <input type="text" placeholder="New skill" class="skill-item" data-category="${categoryIndex}" data-skill="${skillIndex}">
        <button type="button" class="remove-btn" onclick="removeSkill(${categoryIndex}, ${skillIndex})">Remove</button>
    `;
    skillsDiv.appendChild(skillDiv);
}

function removeSkill(categoryIndex, skillIndex) {
    resumeData.skills[categoryIndex].skills.splice(skillIndex, 1);
    editSkills(); // Refresh the edit view
}

document.getElementById('skillsForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const categoryNames = document.querySelectorAll('.category-name');
    const categoryIcons = document.querySelectorAll('.category-icon');
    
    resumeData.skills = [];
    
    categoryNames.forEach((categoryName, index) => {
        const name = categoryName.value;
        const icon = categoryIcons[index].value;
        const skillInputs = document.querySelectorAll(`[data-category="${index}"]`);
        const skills = [];
        
        skillInputs.forEach(input => {
            if (input.classList.contains('skill-item') && input.value.trim()) {
                skills.push(input.value.trim());
            }
        });
        
        if (name && skills.length > 0) {
            resumeData.skills.push({
                category: name,
                icon: icon,
                skills: skills
            });
        }
    });
    
    updateSkillsDisplay();
    closeModal('skillsModal');
});

function updateSkillsDisplay() {
    const skillsGrid = document.getElementById('skillsGrid');
    skillsGrid.innerHTML = resumeData.skills.map(category => 
        `<div class="skill-category">
            <h4><i class="${category.icon}"></i> ${category.category}</h4>
            <div class="skill-tags">
                ${category.skills.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
            </div>
        </div>`
    ).join('');
    
    // Re-initialize skill tag interactions
    initializeSkillTags();
}

// ==================== EXPERIENCE EDITING FUNCTIONS ====================

function editExperience() {
    const experienceEdit = document.getElementById('experienceEdit');
    experienceEdit.innerHTML = '';
    
    resumeData.experience.forEach((exp, index) => {
        addExperienceItemEdit(exp, index);
    });
    
    openModal('experienceModal');
}

function addExperienceItem() {
    const index = resumeData.experience.length;
    addExperienceItemEdit({ title: '', company: '', dateRange: '', description: [] }, index);
}

function addExperienceItemEdit(experience, index) {
    const experienceEdit = document.getElementById('experienceEdit');
    const expDiv = document.createElement('div');
    expDiv.className = 'form-group';
    expDiv.style.border = '1px solid rgba(255,255,255,0.2)';
    expDiv.style.padding = '15px';
    expDiv.style.borderRadius = '8px';
    expDiv.style.marginBottom = '20px';
    expDiv.innerHTML = `
        <h4>Experience ${index + 1}</h4>
        <div class="form-group">
            <label>Job Title:</label>
            <input type="text" class="exp-title" data-index="${index}" value="${experience.title}">
        </div>
        <div class="form-group">
            <label>Company:</label>
            <input type="text" class="exp-company" data-index="${index}" value="${experience.company}">
        </div>
        <div class="form-group">
            <label>Date Range:</label>
            <input type="text" class="exp-date" data-index="${index}" value="${experience.dateRange}">
        </div>
        <div class="form-group">
            <label>Description (one achievement per line):</label>
            <textarea class="exp-description" data-index="${index}" rows="4">${experience.description.join('\n')}</textarea>
        </div>
        <button type="button" class="btn btn-danger" onclick="removeExperience(${index})">Remove Experience</button>
    `;
    experienceEdit.appendChild(expDiv);
}

function removeExperience(index) {
    resumeData.experience.splice(index, 1);
    editExperience(); // Refresh the edit view
}

document.getElementById('experienceForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const titles = document.querySelectorAll('.exp-title');
    const companies = document.querySelectorAll('.exp-company');
    const dates = document.querySelectorAll('.exp-date');
    const descriptions = document.querySelectorAll('.exp-description');
    
    resumeData.experience = [];
    
    titles.forEach((title, index) => {
        const titleValue = title.value.trim();
        const companyValue = companies[index].value.trim();
        const dateValue = dates[index].value.trim();
        const descriptionValue = descriptions[index].value.trim();
        
        if (titleValue && companyValue) {
            resumeData.experience.push({
                title: titleValue,
                company: companyValue,
                dateRange: dateValue,
                description: descriptionValue ? descriptionValue.split('\n').filter(line => line.trim()) : []
            });
        }
    });
    
    updateExperienceDisplay();
    closeModal('experienceModal');
});

function updateExperienceDisplay() {
    const experienceList = document.getElementById('experienceList');
    experienceList.innerHTML = resumeData.experience.map(exp => 
        `<div class="experience-item">
            <div class="job-header">
                <div>
                    <div class="job-title">${exp.title}</div>
                    <div class="company">${exp.company}</div>
                </div>
                <div class="date-range">${exp.dateRange}</div>
            </div>
            <div class="job-description">
                <ul>
                    ${exp.description.map(desc => `<li>${desc}</li>`).join('')}
                </ul>
            </div>
        </div>`
    ).join('');
}

// ==================== EDUCATION EDITING FUNCTIONS ====================

function editEducation() {
    const educationEdit = document.getElementById('educationEdit');
    educationEdit.innerHTML = '';
    
    resumeData.education.forEach((edu, index) => {
        addEducationItemEdit(edu, index);
    });
    
    openModal('educationModal');
}

function addEducationItem() {
    const index = resumeData.education.length;
    addEducationItemEdit({ degree: '', school: '', details: '' }, index);
}

function addEducationItemEdit(education, index) {
    const educationEdit = document.getElementById('educationEdit');
    const eduDiv = document.createElement('div');
    eduDiv.className = 'form-group';
    eduDiv.style.border = '1px solid rgba(255,255,255,0.2)';
    eduDiv.style.padding = '15px';
    eduDiv.style.borderRadius = '8px';
    eduDiv.style.marginBottom = '20px';
    eduDiv.innerHTML = `
        <h4>Education ${index + 1}</h4>
        <div class="form-group">
            <label>Degree:</label>
            <input type="text" class="edu-degree" data-index="${index}" value="${education.degree}">
        </div>
        <div class="form-group">
            <label>School:</label>
            <input type="text" class="edu-school" data-index="${index}" value="${education.school}">
        </div>
        <div class="form-group">
            <label>Additional Details:</label>
            <input type="text" class="edu-details" data-index="${index}" value="${education.details}">
        </div>
        <button type="button" class="btn btn-danger" onclick="removeEducation(${index})">Remove Education</button>
    `;
    educationEdit.appendChild(eduDiv);
}

function removeEducation(index) {
    resumeData.education.splice(index, 1);
    editEducation(); // Refresh the edit view
}

document.getElementById('educationForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const degrees = document.querySelectorAll('.edu-degree');
    const schools = document.querySelectorAll('.edu-school');
    const details = document.querySelectorAll('.edu-details');
    
    resumeData.education = [];
    
    degrees.forEach((degree, index) => {
        const degreeValue = degree.value.trim();
        const schoolValue = schools[index].value.trim();
        const detailsValue = details[index].value.trim();
        
        if (degreeValue && schoolValue) {
            resumeData.education.push({
                degree: degreeValue,
                school: schoolValue,
                details: detailsValue
            });
        }
    });
    
    updateEducationDisplay();
    closeModal('educationModal');
});

function updateEducationDisplay() {
    const educationList = document.getElementById('educationList');
    educationList.innerHTML = resumeData.education.map(edu => 
        `<div class="education-item">
            <div class="degree">${edu.degree}</div>
            <div class="school">${edu.school}</div>
            <div class="gpa">${edu.details}</div>
        </div>`
    ).join('');
}

// ==================== ORIGINAL ANIMATION AND INTERACTION FUNCTIONS ====================

function initializeAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    const elementsToAnimate = document.querySelectorAll('.section, .experience-item, .skill-category');
    elementsToAnimate.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

function initializeContactInteractions() {
    const contactItems = document.querySelectorAll('.contact-item');
    
    contactItems.forEach(item => {
        const span = item.querySelector('span');
        if (span) {
            const text = span.textContent;
            
            item.addEventListener('click', function() {
                if (text.includes('@')) {
                    window.location.href = `mailto:${text}`;
                } else if (text.match(/^\d{3}-\d{3}-\d{4}$/)) {
                    window.location.href = `tel:${text}`;
                }
            });

            item.addEventListener('mouseenter', function() {
                this.style.cursor = text.includes('@') || text.match(/^\d{3}-\d{3}-\d{4}$/) ? 'pointer' : 'default';
            });
        }
    });
}

function initializeSmoothScrolling() {
    document.documentElement.style.scrollBehavior = 'smooth';
}

function initializeSkillTags() {
    const skillTags = document.querySelectorAll('.skill-tag');
    
    skillTags.forEach(tag => {
        tag.addEventListener('click', function() {
            createRippleEffect(this);
            console.log(`Clicked on skill: ${this.textContent}`);
        });
    });
}

function createRippleEffect(element) {
    const ripple = document.createElement('span');
    const rect = element.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = rect.width / 2;
    const y = rect.height / 2;

    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = (x - size / 2) + 'px';
    ripple.style.top = (y - size / 2) + 'px';
    ripple.classList.add('ripple');

    ripple.style.position = 'absolute';
    ripple.style.borderRadius = '50%';
    ripple.style.background = 'rgba(255, 255, 255, 0.3)';
    ripple.style.transform = 'scale(0)';
    ripple.style.animation = 'ripple 0.6s linear';
    ripple.style.pointerEvents = 'none';

    element.style.position = 'relative';
    element.style.overflow = 'hidden';
    element.appendChild(ripple);

    setTimeout(() => {
        ripple.remove();
    }, 600);
}

// ==================== UTILITY FUNCTIONS ====================

// Utility function to add typing effect (for future use)
function typeWriter(element, text, speed = 50) {
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Print/PDF functionality
function printResume() {
    // Hide edit buttons before printing
    const editButtons = document.querySelectorAll('.edit-btn');
    editButtons.forEach(btn => btn.style.display = 'none');
    
    window.print();
    
    // Show edit buttons after printing (if in dev mode)
    if (document.body.classList.contains('dev-mode')) {
        editButtons.forEach(btn => btn.style.display = 'flex');
    }
}

// Theme toggle functionality (for future enhancement)
function toggleTheme() {
    document.body.classList.toggle('light-theme');
}

// Export functions for potential future use
window.MarcelResumeUtils = {
    typeWriter,
    printResume,
    toggleTheme,
    createRippleEffect,
    editProfile,
    editContact,
    editSocial,
    editSkills,
    editExperience,
    editEducation
};