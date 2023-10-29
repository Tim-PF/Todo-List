function toggleSideBar () {
    const sideBarButton = document.querySelector('#sidebar-button');
    const sidebarPanel = document.querySelector('.left-panel');
    sideBarButton.addEventListener('click', () => {
        sidebarPanel.classList.toggle('hidden');
    })
}

export {toggleSideBar}