$(document).ready(function(){
    $("#btnSignIn").click(function(){

         var mail = $("#mail").val;
         var password = $("#password").val;

 $.ajax({
            url: 'http://localhost:1337/loginRecu',
            type: 'POST',
            dataType:'JSON',
            data: { mail: mail, password: password },  
            success: function(data){
                  
                location.replace.href ="admin.html";
            
                
            }
        })

    });
});