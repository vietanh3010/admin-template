
var MENU_ROUTES = [
    {
        title: "Phân tích khách hàng",
        subMenu: [
            {
                title: "Tổng quan",
                icon: 'chart',
                id: 'overall',
            },
        ]
    },
    {
        title: "Phân tích showroom",
        subMenu: [
            {
                title: "Chất lượng nhân viên",
                icon: 'history',
                id: 'staffQuality',
            },
        ]
    },
    {
        title: "Quản lý an ninh",
        subMenu: [
            {
                title: "Cánh báo khu vực hạn chế",
                icon: 'square-marker',
                id: 'areaLimit',
            },
            {
                title: "Cánh báo khác chủ xe",
                icon: 'warn',
                id: 'ownerWarning',
            },
        ]
    },
    {
        title: "Quản trị hệ thống",
        subMenu: [
            {
                title: "Hồ sơ nhân viên",
                icon: 'group',
                id: 'staffProfile',
            },
            {
                title: "Hồ sơ khách hàng",
                icon: 'profile',
                id: 'customerProfile',
            },
            {
                title: "Hồ sơ người lạ",
                icon: 'alien',
                id: 'anonymousProfile',
            },
        ]
    },
]

function genMenu() {
    const data = document.getElementById("nav-menu");
    const result = MENU_ROUTES.map(v => {
        const wraper = document.createElement('div');

        const menu = document.createElement('span');
        menu.classList.add("nav-menu-title");
        menu.innerHTML = v.title;
        wraper.appendChild(menu);

        const subMenuWraper = document.createElement('div');
        v.subMenu.forEach(sub => {
            const subItem = document.createElement('div');
            subItem.classList.add("subMenu-item");
            subItem.id = sub.icon;

            const icon = document.createElement('img');
            icon.classList.add("subMenu-icon");
            icon.src = `src/assets/images/${sub.icon}.svg`;

            const subTitle = document.createElement('span');
            subTitle.classList.add("subMenu-title");
            subTitle.innerHTML = sub.title;

            subItem.onclick = () => {
                const { id } = sub;
                const path = `src/app/pages/${id}/${id}.html`;
                $(document).ready(function () {
                    $('#page').load(path);
                });
                navActive = { id, path, parent: v.title, child: sub.title };
                setBreadCrumb();

                const elActive = document.getElementsByClassName('subMenu-active');
                elActive.item(0)?.classList.remove('subMenu-active');
                const el = document.getElementById(sub.icon);
                el.classList.add('subMenu-active');
            }
            setActive(subItem, sub.id === navActive.id);

            subItem.appendChild(icon);
            subItem.appendChild(subTitle);
            subMenuWraper.appendChild(subItem);
        })

        wraper.appendChild(menu);
        wraper.appendChild(subMenuWraper);

        return wraper;
    })

    result.forEach(v => data.appendChild(v));

}

function setActive(el, isActive) {
    if (isActive) {
        el.classList.add('subMenu-active')
    } else {
        el.classList.remove('subMenu-active')
    }
}

genMenu();

