//Efeitos Jquery
$(function(){
    $('.button-menu').click(function(){
        $('#DropDown').removeClass('oculto').fadeTo('slow', 0.5);
    });
    $('.itens-menu').mouseout(function(){
        $('#DropDown').fadeTo('fast', 0).addClass('oculto');

    })
    
});

//Requisições Ajax
$(function(){ 
    $('.btn1').click(function(){
        $.post('texto.html', function(data){
            $('.Msg-p').html(data);
        });
    });//fim btn1

    $('.btn2').click(function(){
        $.get('texto.html', function(data){
            $('.Msg-g').html(data);
        });
    });//fim btn2

});//fim do function

$(function(){
    $('#form').on('submit', function(e){
        e.preventDefault();

        var txt = $(this).serialize();
        
        $('.resultado1').html(txt);
    })
});//fim do function

$(function(){
    $('#form2').on('submit', function(e){
        e.preventDefault();
        
        var inputs = $(this).serialize();
        
        $.ajax({
            type: 'POST', //Tipo da requisião get ou post
            url: 'ajax.php',
            data: inputs,
            success: function(resposta){
                $('.resultado2').html(resposta);
            },
            error: function(){
                alert('Ocorreu um erro !');
            }
        });
    })
});// fim do function

$(function(){
    $('#form3').on('submit', function(e){
        e.preventDefault();
        
        var teste = $(this).serialize();
        

        $.ajax({
            type: 'POST', //Tipo da requisião get ou post
            url: 'ajax.php',
            data: teste,
            dataType: 'json',
            success: function(data){
                $('.resultado3').html("Nome: "+data.nome+"<br>SobreNome: "+data.sobrenome);
            }
        });
    })
});// fim do function