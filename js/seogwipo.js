
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


// const musa = {
//     name: "책방무사",
//     Web: "https://www.instagram.com/musabooks/",
//     img: "images/서귀포시_책방무사.jpg",
//     copyright: "- 출처: seull_a 인스타그램",
//     address: "📍 주소: 서귀포시 성산읍 수시로10번길 3",
//     opening_hours: '⏰ 운영시간: 12:00 ~ 18:00 (수요일 휴무)',
//     phone_number: '📞 010-6584-6571',
//     description: '‘무사하다’의 뜻을 가진 책방 무사는 가수 ‘요조’가 운영하는 독립서점이에요! 서울, 제주 2곳에 운영하고 있어요.베스트 셀러보다는 독립 출판물 위주이며 요조의 에세이도 있고 여성관련 서적들도 꽤 있답니다. 그리고 서점 옆에 ‘카페 공드리’와 서점 들어오는 입구에 보라색 필름 자판기가 있으니 한번 들러보세요😋'
// };

// //let musa_1 = JSON.stringify(musa, null, 2);
// //console.log(musa_1);

// const book_time = {
//     name: "북타임",
//     Web: "https://www.facebook.com/booktimejeju",
//     img: "images/서귀포시_북타임.jpg",
//     address: "📍 주소: 서귀포시 남원읍 위미중앙로 160",
//     opening_hours: "⏰ 운영시간: 10:00 ~ 19:00 (월요일 휴무)",
//     phone_number: "📞 064-763-5511",
//     description: " 둥그런 아치 모양의 독특한 책장이 매력적인 공간입니다. 일반서적도 꽤 있는 편이고 책방지기님이 자필로 직접 적으신 책 소개 쪽지도 하나하나 보는 매력이 있으니 북타임의 소박하지만 정겨운 매력을 느껴보시길 바랄게요."
// };

// // let book_time_1 = JSON.stringify(book_time, null, 2);
// // console.log(book_time_1);

// const noran_usan = {
//     name: "그림책방 노란우산",
//     Web: "https://www.instagram.com/bookshopnoranusan/",
//     img: "images/서귀포시_그림책방노란우산.jpg",
//     address: "📍 주소: 서귀포시 안덕면 녹차분재로 32 (서광점) / 제주시 애월읍 하광로 515 104동 102호 (광령점)",
//     opening_hours: "⏰ 운영시간: 10:00 ~ 19:00 (일요일 휴무)",
//     phone_number: "📞 064-794-9313",
//     description: "서귀포, 제주시 2곳에서 운영중이며, 그림책 전문 책방입니다. 아이들과 함께 방문하기 좋고, 카페도 같이 운영하고 있어서 맛있는 커피와 함께 할 수 있어요. 하지만, 책이나 음료 구매하시는 분들만 입장 가능하니 참고하세요!"

// };

//  let noran_usan_1 = JSON.stringify(noran_usan, null, 2);
//  console.log(noran_usan_1);

// const btw = {
//     name: "그건그렇고",
//     Web: "https://www.instagram.com/bookshopnoranusan/",
//     img: "images/서귀포시_그림책방노란우산.jpg",
//     address: "📍 주소: 서귀포시 안덕면 녹차분재로 32 (서광점) / 제주시 애월읍 하광로 515 104동 102호 (광령점)",
//     opening_hours: "⏰ 운영시간: 10:00 ~ 19:00 (일요일 휴무)",
//     phone_number: "📞 064-794-9313",
//     description: "서귀포, 제주시 2곳에서 운영중이며, 그림책 전문 책방입니다. 아이들과 함께 방문하기 좋고, 카페도 같이 운영하고 있어서 맛있는 커피와 함께 할 수 있어요. 하지만, 책이나 음료 구매하시는 분들만 입장 가능하니 참고하세요!"

// };
