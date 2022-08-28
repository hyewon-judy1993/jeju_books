
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

