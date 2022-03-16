
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


var ADVANCED_SEARCH_DEFINE = [
    {
        title: 'Cửa hàng',
        options: [
            'Vin3S Pham Ngoc Thach',
            'Vin3S Ton Duc Thang'
        ],
    },
    {
        title: 'Thời gian',
        options: [
            "Hôm nay",
            "Tuần này",
            "30 ngày gần nhất"
        ]
    },
]

var FILTER_DEFINE = [
    {
        title: "Giới tính",
        options: [
            "Nam",
            "Nữ"
        ]
    },
    {
        title: "Khoảng tuổi",
        options: [
            "<19"
        ]
    }
]

var formState = {
    shop: '',
    time: '',
    genders: [],
    ages: []
};

function initAdvancedSearch() {

    var el = document.getElementById("search");
    // ADVANCED_SEARCH_DEFINE.forEach(item => {
    //     var dropdown = document.createElement("c-dropdown");
    //     dropdown.setAttribute('options', JSON.stringify(item.options));
    //     dropdown.setAttribute('dropdownTitle', JSON.stringify(item.title));
    //     el.appendChild(dropdown);
    // })

    // FILTER_DEFINE.forEach(item => {
    //     var gbutton = document.createElement("c-group-button");
    //     gbutton.setAttribute('options', JSON.stringify(item.options));
    //     gbutton.setAttribute('customLabel', JSON.stringify(item.title));

    //     el.appendChild(gbutton);
    // })

    const formGender = document.getElementById('formGender');
    const optionGender = formGender.getElementsByTagName('button');
    for (let i = 0; i < optionGender.length; i++) {
        const elItem = optionGender.item(i);
        elItem.onclick = () => {
            elItem.classList.toggle("button-check");
            var check = formState.genders.includes(elItem.value);
            if (check) {
                formState.genders = formState.genders.filter(v => v !== elItem.value);
            }
            else {
                formState.genders = [...formState.genders, ...[elItem.value]];
            }
        }
    }

    const formAge = document.getElementById('formAge');
    const optionAge = formAge.getElementsByTagName('button');
    for (let i = 0; i < optionAge.length; i++) {
        const elItem = optionAge.item(i);
        elItem.onclick = () => {
            elItem.classList.toggle("button-check");
            var check = formState.ages.includes(elItem.value);
            if (check) {
                formState.ages = formState.ages.filter(v => v !== elItem.value);
            }
            else {
                formState.ages = [...formState.ages, ...[elItem.value]];
            }
        }
    }


    const submitBtn = document.createElement('button')
    submitBtn.innerHTML = 'Tìm kiếm';

    submitBtn.onclick = () => {
        const formShop = document.getElementById('formShop');
        const formTime = document.getElementById('formTime');
        formState.shop = formShop.value;
        formState.time = formTime.value;
        console.log(formState)
    }


    el.appendChild(submitBtn)
}

$(document).ready(function () {
    initAdvancedSearch();
    clickSearch();
});

function clickSearch() {
    const el = document.getElementById("close-search");
    el.onclick = () => {
        const search = document.getElementById('search');
        search.classList.toggle('advanced-search-toggle')
    }
}






