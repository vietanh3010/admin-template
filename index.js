
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

function loadAdvancedSearch() {
    $(document).ready(function () {
        $('#advanced-search').load('src/app/layouts/advanced-search/advanced-search.html');
    });
}

loadHeader();
loadBreadCrumb();
loadNav();
loadAdvancedSearch();

