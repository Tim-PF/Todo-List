function toggleTheme() {
    const toggleThemeButton = document.querySelector('#checkbox')
    toggleThemeButton.addEventListener('click', () => {
        const root = document.documentElement;
        const newTheme = root.className === 'dark' ? 'light' : 'dark';
        root.className = newTheme;

    })
}

export {toggleTheme};