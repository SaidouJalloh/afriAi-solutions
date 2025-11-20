export const scrollToSection = (href: string) => {
    const targetElement = document.querySelector(href);

    if (targetElement) {
        const headerHeight = 80;
        const offsetTop = targetElement.getBoundingClientRect().top + window.scrollY - headerHeight;

        window.scrollTo({
            top: offsetTop,
            behavior: "smooth",
        });
    }
};
