
var formState = {
    shop: '',
    time: '',
    genders: [],
    ages: []
};

function initAdvancedSearch() {
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
}

$(document).ready(function () {
    initAdvancedSearch();
});

function clickSearch() {
    const search = document.getElementById('search');
    search.classList.toggle('advanced-search-toggle')
}

function submitSearch() {
    const formShop = document.getElementById('formShop');
    const formTime = document.getElementById('formTime');
    formState.shop = formShop.value;
    formState.time = formTime.value;
    console.log("search me")
    console.log(formState)

    const activeIndex = ['1', '7', '30'].indexOf(formTime.value);
    activeFilter = formTime.value;
    const filterBar = document.getElementById('filterBar');
    const els = filterBar.children
    for (let i = 0; i < els.length; i++) {
        if (i === activeIndex) {
            els.item(i).click()
        }
    }
}

function resetSearch() {
    formState = {
        shop: '',
        time: '',
        genders: [],
        ages: []
    };
    $('select').prop('selectedIndex', 0);
    const filterBar = document.getElementById('filterBar');
    filterBar.children.item(0).click();


    const formGender = document.getElementById('formGender');
    const optionGender = formGender.getElementsByTagName('button');
    for (let i = 0; i < optionGender.length; i++) {
        const elItem = optionGender.item(i);
        elItem.classList.remove("button-check")
    }

    const formAge = document.getElementById('formAge');
    const optionAge = formAge.getElementsByTagName('button');
    for (let i = 0; i < optionAge.length; i++) {
        const elItem = optionAge.item(i);
        elItem.classList.remove("button-check")
    }
}