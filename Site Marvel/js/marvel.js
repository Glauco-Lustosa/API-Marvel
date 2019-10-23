var marvel = {
    render: function () {
        var url = "http://gateway.marvel.com/v1/public/characters?ts=1&apikey=24b811cfedfac163d1495cf9cada9612&hash=57ed83842940cc630923dd0d5e6e1aee";

        var message = document.getElementById("message");
        var footer = document.getElementById("footer");
        var heros0 = document.getElementById("heros0");
        var heros1 = document.getElementById("heros1");
        var heros2 = document.getElementById("heros2");
        var heros3 = document.getElementById("heros3");
        var heros4 = document.getElementById("heros4");
        var heros5 = document.getElementById("heros5");
        var heros6 = document.getElementById("heros6");
        var heros7 = document.getElementById("heros7");
        var heros8 = document.getElementById("heros8");
        var heros9 = document.getElementById("heros9");
        var heros10 = document.getElementById("heros10");
        var heros11 = document.getElementById("heros11");
        
        
        // variaveis para melhor manipulação


        
        var marvelContainer = document.getElementById("marvel-container");


        // AJAX para conseguirmos usar o Json
        $.ajax({
            url: url,
            type: "GET",

            beforeSend: function () {
                message.innerHTML = "API STATUS: Carregando aguarde...";

            },

            complete: function () {

                message.innerHTML = "API STATUS: Funcionando com Sucesso";
            },
            // Inserir dados do json na div
            success: function (data) {
                
                var heroi0 = data.data.results[0];
                var heroi1 = data.data.results[1];
                var heroi2 = data.data.results[2];
                var heroi3 = data.data.results[3];
                var heroi4 = data.data.results[4];
                var heroi5 = data.data.results[5];
                var heroi6 = data.data.results[6];
                var heroi7 = data.data.results[7];
                var heroi8 = data.data.results[8];
                var heroi9 = data.data.results[9];
                var heroi10 = data.data.results[10];
                var heroi11 = data.data.results[11];

               
                                               
                heros0.innerHTML = heroi0.name;
                heros1.innerHTML = heroi1.name;
                heros2.innerHTML = heroi2.name;
                heros3.innerHTML = heroi3.name;
                heros4.innerHTML = heroi4.name;
                heros5.innerHTML = heroi5.name;
                heros6.innerHTML = heroi6.name;
                heros7.innerHTML = heroi7.name;
                heros8.innerHTML = heroi8.name;
                heros9.innerHTML = heroi9.name;
                heros10.innerHTML = heroi10.name;
                heros11.innerHTML = heroi11.name;
               


                footer.innerHTML = data.attributionHTML;
               
                // ver respectivos nomes na api
                for(var i =0; i<data.data.results.length;i++){
                    var element = data.data.results[i];
                    
                    console.log(element.thumbnail.path);

                }
                

            },
                // Mensagem para erro
            error: function () {

                message.innerHTML = "API STATUS: Desculpe , houve um problema =( "
            }



        });



    }




};
marvel.render();