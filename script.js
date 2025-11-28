$(document).ready(function(){

    let index = 0;
    const imgs = $(".banner-img");

    function cambiarImagen() {
        imgs.fadeOut(600);                  
        $(imgs[index]).fadeIn(800);        
        index = (index + 1) % imgs.length;  
    }
    cambiarImagen();

    setInterval(cambiarImagen, 3500);

    $("#signup").on("submit", function(e){
        e.preventDefault();

        $("button").css({
            boxShadow: "0 0 12px #00eaff",
            transition: "0.3s"
        });

        alert("Tu registro ha sido enviado al Shatterdome.\n¡Glorioso trabajo, cadete!");

        this.reset();
        setTimeout(() => {
            $("button").css("box-shadow","none");
        }, 700);
    });

    $(".card").hover(
        function(){
            $(this).css("transform","scale(1.04)");
        },
        function(){
            $(this).css("transform","scale(1)");
        }
    );

});

