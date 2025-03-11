let sidebar = document.getElementById("sidebar");
let content = document.querySelector("#content");
let sidebar_toggle = document.querySelector("#sidebar-toggle");


sidebar_toggle.addEventListener("click", () => {
    let sidebarLeft = window.getComputedStyle(sidebar).left 
    if (window.innerWidth > 767) 
    {
        if (sidebarLeft === "0px")
        {
            sidebar.style.left = "-250px";
            content.style.marginLeft = "0";
        } 
        else 
        {
            sidebar.style.left = "0";
            content.style.marginLeft = "250px";
        }
    }

    else
    {
        if (sidebarLeft === "0px") {
            sidebar.style.left = "-250px";
        }
        else 
        {
            sidebar.style.left = "0";
        }
    }

    });
    



// sidebar_toggle.addEventListener("click", () => {
//     let sidebarWidth = parseInt(window.getComputedStyle(sidebar).width); // Sayısal değer al

//     if (sidebarWidth === 250) { // 250px ile karşılaştır
//         sidebar.style.width = "0";
//         content.style.marginright = "0";
//     } else {
//         sidebar.style.width = "250px";
//         content.style.marginright = "250px";
//     }
// });



let messagescontainer = document.getElementById('messages-container') ;
let messagesarea = document.getElementById('messages-area') ;

messagescontainer.addEventListener("click", function() {
    messagesarea.style.display = messagesarea.style.display === "block" ? "none" : "block" ;
});



// new DataTable('#example');


new DataTable('#example', {

    responsive : true ,

    buttons: [

        // {
        //     extend: 'copy' ,
        //     text: 'نسخ'
        // } ,
        // {
        //     extend: 'excel' ,
        //     text: 'اكسل'
        // } ,
        // {
        //     extend: 'pdf' ,
        //     text: 'ب د ف'
        // } ,
        // {
        //     extend: 'print' ,
        //     text: 'طبعة'
        // } ,

        // uste bulunan kod eger tus tukce yerine arabca  

        'copy', 'excel', 'pdf', 'print'
    ],
    layout: {
        topStart: 'buttons'
    }
});








