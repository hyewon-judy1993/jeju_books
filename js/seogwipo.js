
const json = JSON.parse(JSON.stringify(stores));
//console.log(json);

const stores1 =[stores.store_1];
const stores2 =[stores.store_2];
//document.querySelector('.contents').innerHTML=JSON.stringify(stores2);
//console.log(stores1);
//console.log(stores2);

let list = Object.keys(json);
let data = Object.values(json);
//console.log(list[0]);
//console.log(data[0]);


//for ( let i = 0; i < data.length; i++ ) {

 //console.log(data[0]);
    
    // let name = data[i].name
    // let web = data[i].Web;
    // let sns = data[i].SNS;
    // let img = data[i].img;
    // let copyright = data[i].copyright;
    // let address = data[i].address;
    // let opening_hours = data[i].opening_hours;
    // let phone_number = data[i].phone_number;
    // let description = data[i].description; 

    let temp_html = 
                            `<div class="contents">
                                <div class="main">
                                    <p> ${data[0].name} <a href= ${data[0].web} target="_blank"><i class= ${data[0].sns}></i></a> 
                                        <br><br>
                                        <img class="images"src=${data[0].img}></p>
                                        <span class="copyright"> ${data[0].copyright}</span>
                                </div>
                                <div class="aside">
                                    <br>
                                    <br>
                                    <br>
                                    <br>
                                    ${data[0].address} <br>
                                    ${data[0].opening_hours}<br>
                                    ${data[0].phone_number} <br><br>
                                    <br>
                                    ${data[0].description}
                                </div>
                            </div> 
                        </div>`;
$('.container-2').append(temp_html)


    let temp_html2 = 
                            `<div class="contents">
                                <div class="main">
                                    <p> ${data[1].name} <a href= ${data[1].web} target="_blank"><i class= ${data[1].sns}></i></a> 
                                        <br><br>
                                        <img class="images"src=${data[1].img}></p>
                                        <span class="copyright"> ${data[1].copyright}</span>
                                </div>
                                <div class="aside">
                                    <br>
                                    <br>
                                    <br>
                                    <br>
                                    ${data[1].address} <br>
                                    ${data[1].opening_hours}<br>
                                    ${data[1].phone_number} <br><br>
                                    <br>
                                    ${data[1].description}
                                </div>
                            </div> 
                            </div>`;
    $('.container-2-1').append(temp_html2)
//} ;


let tab = $('.list-group-item');
let contents_1 = $('#more');

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