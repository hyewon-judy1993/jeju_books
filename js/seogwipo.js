
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


let musa = {
    name: '책방무사',
    copyright: '- 출처: seull_a 인스타그램',
    address: '📍 주소: 서귀포시 성산읍 수시로10번길 3',
    opening_hours: '⏰ 운영시간: 12:00 ~ 18:00 (수요일 휴무)',
    phone_number: '📞 010-6584-6571',
    description: '‘무사하다’의 뜻을 가진 책방 무사는 가수 ‘요조’가 운영하는 독립서점이에요! 서울, 제주 2곳에 운영하고 있어요.베스트 셀러보다는 독립 출판물 위주이며 요조의 에세이도 있고 여성관련 서적들도 꽤 있답니다. 그리고 서점 옆에 ‘카페 공드리’와 서점 들어오는 입구에 보라색 필름 자판기가 있으니 한번 들러보세요😋'
};

json = JSON.stringify(musa);
console.log(json);