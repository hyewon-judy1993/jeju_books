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
    tab.eq(v).on('click', function(data){
        open(v)
    })
};

function open(v) {
tab.eq(v).on('click', function(data){
    contents_1.removeClass('show');
    contents_1.eq(v).addClass('show');
})}



function ajax() {
    fetch("./data/seogwipo.json").then(function(response){
        if(response.status != 200) {
            alert("서버와 통신에 실패했습니다")
        } else {
            return response.json();
        }
    }).then(function(data){
       
        let article = document.querySelector('.container-2');
     
        
        let tag = "";

        for(let i = 0; i < data.length; i++) {
           let name = data[i].name;
           let web = data[i].Web;
           let sns = data[i].SNS;
           let img = data[i].img;
           let copyright = data[i].copyright;
           let address = data[i].address;
           let opening_hours = data[i].opening_hours;
           let phone_number = data[i].phone_number;
           let description = data[i].description; 
       
          
            //console.log(name,web,sns,img,copyright,address,opening_hours,phone_number,description)
           
            tag +='<div class="contents">';
            tag += '<div class="main">';
            tag += '<p>'+ name; 
            tag += '<a href="'+ web +'" target="_blank">';
            tag += '<i class="'+ sns +'"></i>';
            tag += '</a>' ;
            tag += '<br><br>';   
            tag += '<img class="images" src="'+ img +'" />';
            tag += '</p>';
            tag += '<span class="copyright">'+ copyright +'</span>';
            tag += '</div>';
            tag += '<div class="aside">';
            tag += '<br><br><br><br>';
            tag += address + '<br>';
            tag += opening_hours + '<br>';
            tag += phone_number + '<br><br>';
            tag += '<br>'+description;    
            tag += '</div>';
            tag += '</div>';


        } // end for
        article.innerHTML = tag ;


    })
}

(function() {
    ajax();
})();




