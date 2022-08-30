
let tab = $('.list-group-item');
let contents = $('.container-2');

for (let i= 0; i < tab.length; i++){
    tab.eq(i).on('click', function(){
        open(i)
    })
};


function open(i) {
tab.eq(i).on('click', function(){
    contents.removeClass('show');
    contents.eq(i).addClass('show');
})}


const musa = {
    name: "책방무사",
    Web: "https://www.instagram.com/musabooks/",
    img: "images/서귀포시_책방무사.jpg",
    copyright: "- 출처: seull_a 인스타그램",
    address: "📍 주소: 서귀포시 성산읍 수시로10번길 3",
    opening_hours: '⏰ 운영시간: 12:00 ~ 18:00 (수요일 휴무)',
    phone_number: '📞 010-6584-6571',
    description: '‘무사하다’의 뜻을 가진 책방 무사는 가수 ‘요조’가 운영하는 독립서점이에요! 서울, 제주 2곳에 운영하고 있어요.베스트 셀러보다는 독립 출판물 위주이며 요조의 에세이도 있고 여성관련 서적들도 꽤 있답니다. 그리고 서점 옆에 ‘카페 공드리’와 서점 들어오는 입구에 보라색 필름 자판기가 있으니 한번 들러보세요😋'
};

let musa_1 = JSON.stringify(musa, null, 2);
console.log(musa_1);

const book_time = {
    name: "북타임",
    Web: "https://www.facebook.com/booktimejeju",
    img: "images/서귀포시_북타임.jpg",
    address: "📍 주소: 서귀포시 남원읍 위미중앙로 160",
    opening_hours: "⏰ 운영시간: 10:00 ~ 19:00 (월요일 휴무)",
    phone_number: "📞 064-763-5511",
    description: " 둥그런 아치 모양의 독특한 책장이 매력적인 공간입니다. 일반서적도 꽤 있는 편이고 책방지기님이 자필로 직접 적으신 책 소개 쪽지도 하나하나 보는 매력이 있으니 북타임의 소박하지만 정겨운 매력을 느껴보시길 바랄게요."
};

let book_time_1 = JSON.stringify(book_time, null, 2);
console.log(book_time_1);
