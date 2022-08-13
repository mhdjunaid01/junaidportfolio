$(document).ready(function(){

    $("#submitform").validate({
        
        rules:{
            name:{
                required:true,
                minlength:3,
                maxlength:10
                
            },
            emailAddress:{
                required:true,
                email:true
                
                

            },
            message:{
                required:true,
                minlength:10,
                maxlength:50
            }
            
        },
        messages:{
            name:{
                required:"enter a name ",
                minlength:"enter minimum 3 charecter",
                maxlength:"maximum 10 charecters"
            },
            emailAddress:{
                required:"enter email",
                email:"enter valid email id "
                

            },
            message:{
                required:"enter message",
                minlength:"enter minimum 10 charecters",
                maxlength:"maximum 50 charecters"
            }
        }
    })
})