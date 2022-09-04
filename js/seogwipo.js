/*fetch("seogwipo.html").then(function(response){
    response.text().then(function(text) {
        alert(text)
    })
})
promise > 패치를 사용했을때 실행결과에 대한 상태를 반환해주는 약속된 객체
pending :실행중 fullfilled: 성공적인 완료  rejected: 실패했다
then (콜백함수) 패치는 한가지 약속된 함수를 제공함 그것이 .then
 내가 이파일을 읽어오는데 시간이 오래걸릴수있으니 
 너가 .then안에 실행결과를 받을 수 있는 함수만 적어주면 나는 완료되면 then 콜백함수를 안에 
 실행결과를 넣어줄게
 respons는 성공실패에 대한 결과를 가지고 있는 중요한 객체*/


let tab = $('.list-group-item');
let contents_1 = $('.container-2');

for (let v= 0; v < tab.length; v++){
    tab.eq(v).on('click', function(){
        open(v)
    })
};

function open(v) {
tab.eq(v).on('click', function(){
    contents_1.removeClass('show');
    contents_1.eq(v).addClass('show');
})}



const json = JSON.parse(JSON.stringify(stores));
//console.log(json);

const stores1 =[stores.store_1];
const stores2 =[stores.store_2];
//document.querySelector('.contents').innerHTML=JSON.stringify(stores2);
//console.log(stores1);
//console.log(stores2);

let list = Object.keys(json);
let data = Object.values(json);
//console.log(list.length);
//console.log(data.length);

for ( let i = 0; i < list.length; i++ ) {

    //console.log(data[i]);
    
    let name = data[i].name
    let web = data[i].Web;
    let sns = data[i].SNS;
    let img = data[i].img;
    let copyright = data[i].copyright;
    let address = data[i].address;
    let opening_hours = data[i].opening_hours;
    let phone_number = data[i].phone_number;
    let description = data[i].description; 

    let temp_html = 
                            `<div class="contents">
                                <div class="main">
                                    <p> ${name} <a href= ${web} target="_blank"><i class= ${sns}></i></a> 
                                        <br><br>
                                        <img class="images"src=${img}></p>
                                        <span class="copyright"> ${copyright}</span>
                                </div>
                                <div class="aside">
                                    <br>
                                    <br>
                                    <br>
                                    <br>
                                    ${address} <br>
                                    ${opening_hours}<br>
                                    ${phone_number} <br><br>
                                    <br>
                                    ${description}
                                </div>
                            </div> 
                        </div>`

$('.container-2').append(temp_html)
} 

