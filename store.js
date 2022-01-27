var history = [];

var isNavCollapse = false;

var navActive = {
    id: 'overall',
    path: 'src/app/pages/overall/overall.html',
    parent: "Phân tích khách hàng",
    child: "Tổng quan",
};

$(document).ready(function () {
    $('#page').load(navActive.path);
});
