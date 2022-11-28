$(document).ready(function(){

var price,
    type1,
    type2,
    sigmaType,
    first,
    second;


price = $('#val');

price = 10;

first = $('input1').val();
second = $('input2').val();



$('.minpl').click(function() {
    /*Находим input*/
        $input = $(this).parent().find('.vibor1');
        var qty = Number($input.val());
    /*На случай, если количество не удалось определить (например, пользователь мог оставить поле пустым)*/
        if (isNaN(qty)) qty = 0;
        if ($(this).hasClass('plus_minpl')) {
            if (qty == 0) {
                qty = $input.data('min');
            } else {
                qty += $input.data('step');
            }
        } else {
            qty -= $input.data('step');
        }
        var min = $input.data('min');
        if (qty >= min)  {
            $input.val(qty).trigger('input');
        } else {
             $input.val(0).trigger('input');
        }
        first = $('#input1').val();
        second = $('#input2').val();

        calculatePrice($input);


        $('.vibor').change(function(){
            type1 = $('#select1').val();
            
            type2 = $('#select2').val();
            
            
            sigmaType = 0
            
            
            
            if ( (type1 == 'ПВХ') && (type2 == 'Белый')) {
                sigmaType = sigmaType + 1390;
                
            };
            
            if ( (type1 == 'ПВХ') && (type2 == 'Цветной')) {
                sigmaType = sigmaType + 1600;
                
            };
            
            if ( (type1 == 'Тканевый') && (type2 == 'Белый')) {
                sigmaType = sigmaType + 2250;
                
            };
            
            if ( (type1 == 'Тканевый') && (type2 == 'Цветной')) {
                sigmaType = NaN;
                alert('К сожалению у нас нет Тканевого и Цветного одновременно')
            
            }
            
            calculatePrice()
            });
    });



  $('#input1').on('input', function(){
    if(+$(this).val() < 10) {
      $(this).val(10);
    }
  });
  $('#input2').on('input', function(){
    if(+$(this).val() < 4) {
      $(this).val(4);
    }
  });



function calculatePrice(){

    if (sigmaType == undefined) {
        sigmaType = 1390
    }


    if ((($input.val()) == first) && (($input.val()) != second)){
        first = Number($input.val())
    }
    else {
        second =  Number($input.val())
    }

    sigmaType = Number(sigmaType)


    
    price = Number(first*sigmaType) + (100 * second);

    $("#val").text(price);
}



openModal();//вызываем нашу функцию


function govnoizZHOPY() {
    
}


$(".button_2").click(function () {

    ss = document.getElementById('pdf')

    html2pdf(ss).save();
})

function openModal() {



$(".button_1").click(function () {

$(".modal").show('fast');//показывает див модалки

});


$(".cansel").click(function () {

$(".modal").hide('fast');//скрывает див модалки


});


$(".send").click(function () {


var name = $("input#name:text").val();



var phone = $("input#phone:text").val();


if(name !=="" && phone !==""){


var text = "Ваше имя: " +name + "\n" +"Ваш телефон: "+phone;//строка с значениями из формы



window.open('mailto:' + phone + '?subject=subject&body=body');


$(".modal").hide('fast');//закрываем модалку



}else{



alert("ВОУ! ВОУ! АЛАРМ! ЗАПОЛНИ ВСЕ ПОЛЯ!");//если поля формы пустые, выводи сообщение



}


});
}

});

