// Scroll controller for concert info reveal + marquee warnings
let lastScrollTop = 0;

window.addEventListener('scroll', function () {
    const winTop = window.pageYOffset || document.documentElement.scrollTop;
    const winHeight = window.innerHeight;
    const docHeight = document.documentElement.scrollHeight;
    const scrollPercent = (docHeight - winHeight) > 0
        ? winTop / (docHeight - winHeight)
        : 0;

    // Core elements
    const sections = document.querySelectorAll('.scroll-sections .section');
    const concertHeader = document.querySelector('.concert-header');
    const banner = document.querySelector('.banner-image');
    const scrollIndicator = document.getElementById('scroll-indicator');
    const mainSection = document.querySelector('main');
    const marqueeBars = document.querySelectorAll('.marquee');

    // ---------------------------------
    // 1. Step logic for overlays/banner
    // ---------------------------------
    // Each .section is one "step"
    if (concertHeader && sections.length > 0) {
        const maxSectionIndex = sections.length - 1;
        const sectionIndex = Math.min(
            maxSectionIndex,
            Math.max(0, Math.floor(winTop / winHeight))
        );

        // IMPORTANT: allow step 7 so CSS .step-7 rules apply
        const step = sectionIndex + 1; // 1 .. 7

        // Remove any existing step-* class
        concertHeader.className = concertHeader.className.replace(/\bstep-\d+\b/g, '').trim();
        // Add the new step class
        concertHeader.classList.add(`step-${step}`);
    }

    // ---------------------------------
    // 2. Scroll indicator behavior
    // ---------------------------------
    if (scrollIndicator) {
        // Hide near bottom of page
        if (scrollPercent > 0.98) {
            scrollIndicator.classList.add('hidden');
        } else {
            scrollIndicator.classList.remove('hidden');
        }

        // Move indicator to right margin once main program section is reached
        if (mainSection) {
            const mainTop = mainSection.offsetTop;
            if (winTop >= mainTop - winHeight) {
                scrollIndicator.classList.add('right-position');
            } else {
                scrollIndicator.classList.remove('right-position');
            }
        }
    }

    // ---------------------------------
    // 3. Marquee warnings (top & bottom)
    // ---------------------------------
    // Show the marquee only while the program section is actually in view
    if (mainSection && marqueeBars.length > 0) {
        const mainTop = mainSection.offsetTop;
        const mainHeight = mainSection.offsetHeight;
        const mainBottom = mainTop + mainHeight;

        if (winTop >= mainTop && winTop < mainBottom) {
            marqueeBars.forEach(el => el.classList.add('marquee--active'));
        } else {
            marqueeBars.forEach(el => el.classList.remove('marquee--active'));
        }
    }

    // ---------------------------------
    // 4. Scroll direction (kept for future use)
    // ---------------------------------
    if (winTop > lastScrollTop) {
        // Scrolling down
    } else {
        // Scrolling up
    }

    lastScrollTop = winTop;
});

// Trigger on load to set initial state
window.dispatchEvent(new Event('scroll'));
