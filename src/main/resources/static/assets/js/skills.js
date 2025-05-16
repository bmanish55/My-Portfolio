// skills javascript start from here
// Animate skill bars on scroll
document.addEventListener('DOMContentLoaded', function() {
    const skillLevels = document.querySelectorAll('.skill-level');
    
    const animateSkills = () => {
        skillLevels.forEach(level => {
            const percent = level.getAttribute('data-level');
            level.style.width = percent;
        });
    };

    // Intersection Observer for skill animation
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateSkills();
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    const skillsContainer = document.querySelector('.skills-container');
    if (skillsContainer) {
        observer.observe(skillsContainer);
    }

    // Java stack animation
    const javaStack = document.querySelector('.java-stack');
    if (javaStack) {
        javaStack.addEventListener('mousemove', (e) => {
            const { left, top, width, height } = javaStack.getBoundingClientRect();
            const x = (e.clientX - left) / width - 0.5;
            const y = (e.clientY - top) / height - 0.5;
            
            const layers = javaStack.querySelectorAll('.stack-layer');
            layers.forEach((layer, index) => {
                const factor = index === 0 ? 10 : index === 1 ? 15 : 20;
                layer.style.transform = `translateX(${x * factor}px) translateY(${y * factor}px) ${layer.style.transform.split(' ')[2] || ''}`;
            });
        });

        javaStack.addEventListener('mouseleave', () => {
            const layers = javaStack.querySelectorAll('.stack-layer');
            layers.forEach(layer => {
                layer.style.transform = layer.style.transform.split(' ')[2] || '';
            });
        });
    }
});

// skiils javascript page ends here