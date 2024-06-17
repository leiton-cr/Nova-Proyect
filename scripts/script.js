function showSection(sectionId) {
    const sections = document.querySelectorAll('.c-main section');
    sections.forEach(section => {
        section.classList.add('hidden');
    });

    const selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.classList.remove('hidden');
    }
}