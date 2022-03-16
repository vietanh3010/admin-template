

var FILTER_DEFINE = [
    {
        title: "Hôm nay"
    },
    {
        title: "Tuần này"
    },
    {
        title: "30 ngày gần nhất"
    },
];

var activeFilter = FILTER_DEFINE[0].title;

function genFilterBar() {
    const el = document.getElementById('filterBar');
    FILTER_DEFINE.forEach(v => {
        const elChild = document.createElement('c-button');
        elChild.setAttribute('type', activeFilter === v.title ? 'active' : 'inactive');
        elChild.append(v.title);
        elChild.onclick = () => {
            activeFilter = v.title;
            el.innerHTML = '';
            genFilterBar();
        }
        el.appendChild(elChild);
    })
}

genFilterBar();

var STAT_CARD_DEFINE = [
    {
        id: 'allCustomer',
        title: 'Tổng số khách ghé thăm',
        statCount: '68',
        statUnit: 'khách',
        change: 'increase',
        subValue: 4,
    },
    {
        id: 'averageVisitTime',
        title: 'Thời gian ghé thăm trung bình',
        statCount: '14',
        statUnit: 'phút',
        change: 'decrease',
        subValue: 1.2,
    },
    {
        id: 'customerRushHour',
        title: 'Số lượng khách vào giờ cao điểm',
        statCount: '15',
        statUnit: 'người',
        subValue: '10h - 11h',
    },
    {
        id: 'oldCustomer',
        title: 'Khách hàng cũ',
        statCount: '01',
        statUnit: 'người',
    },
]

function getStatCard() {
    const el = document.getElementById('statCard');
    STAT_CARD_DEFINE.forEach(v => {
        const elChild = document.createElement('c-stat-card');
        elChild.setAttribute('cardTitle', v.title);
        elChild.setAttribute('statCount', v.statCount);
        elChild.setAttribute('statUnit', v.statUnit);
        elChild.setAttribute('change', v.change ?? '');
        elChild.setAttribute('subValue', v.subValue ?? '');
        elChild.classList.add("stat-card-child")
        el.appendChild(elChild);
    })

}

getStatCard()

var AVG_CARD_DEFINE = [
    {
        id: 'avgCustomerVisit',
        title: 'Thời gian trung bình gần nhất khách hàng xuất hiện',
        statCount: '04',
        statUnit: 'ngày',
        tooltip: 'Thời gian trung bình gần nhất khách hàng xuất hiện',
    },
    {
        id: 'avgCustomerReturn',
        title: 'Khoảng thời gian trung bình khách hàng xuất hiện lại',
        statCount: '33',
        statUnit: 'ngày',
        tooltip: 'Khoảng thời gian trung bình khách hàng xuất hiện lại'
    },
    {
        id: 'avgVisitTime',
        title: 'Tần suất ghé thăm trung bình',
        statCount: '1',
        statUnit: 'lần',
        tooltip: 'Là trung bình cộng của tổng số thời gian khách hàng xuất hiện',
    },
]

function getAvgCard() {
    const el = document.getElementById('avgCard');
    AVG_CARD_DEFINE.forEach(v => {
        const elChild = document.createElement('c-stat-card');
        elChild.setAttribute('cardTitle', v.title);
        elChild.setAttribute('statCount', v.statCount);
        elChild.setAttribute('statUnit', v.statUnit);
        elChild.setAttribute('change', v.change ?? '');
        elChild.setAttribute('subValue', v.subValue ?? '');
        elChild.setAttribute('tooltipTitle', v.tooltip ?? '');
        elChild.classList.add("avg-card-child")
        el.appendChild(elChild);
    })

}

getAvgCard();


function setUpdateDate() {
    const el = document.getElementById('overallDate');
    const currDate = new Date();
    el.innerHTML = `${currDate.getHours()}:${currDate.getMinutes()} - ${currDate.toLocaleDateString("vi-VI")}`;
}

setUpdateDate()
