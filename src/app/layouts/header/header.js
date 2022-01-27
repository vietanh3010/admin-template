

function onCollapseNav() {
    isNavCollapse = !isNavCollapse;
    const navEl = document.getElementById("nav-collapse");
    if (isNavCollapse) {
        navEl.classList.remove('nav-open');
        navEl.classList.add('nav-close');
    } else {
        navEl.classList.add('nav-open');
        navEl.classList.remove('nav-close');
    }
}