
function loadHeader() {
    $(document).ready(function () {
        $('#header').load('src/app/layouts/header/header.html');
    });

}

function loadBreadCrumb() {
    $(document).ready(function () {
        $('#breadCrumb').load('src/app/components/breadCrumb/breadCrumb.html');
    });
}

function loadNav() {
    $(document).ready(function () {
        $('#nav').load('src/app/layouts/nav/nav.html');
    });
}

loadHeader();
loadBreadCrumb();
loadNav();





