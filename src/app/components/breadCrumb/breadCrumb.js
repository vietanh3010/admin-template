
function setBreadCrumb() {
    document.getElementById("parentPath").innerHTML = navActive.parent;
    document.getElementById("childPath").innerHTML = navActive.child;
}

setBreadCrumb();
