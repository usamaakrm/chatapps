document.addEventListener('DOMContentLoaded', function() {
  
    const chatWindow = document.getElementById('main');
    let isScrolledToBottom = true;
    let timeout = null;

    function throttledScroll(event) {
      
        console.log( `scrollTop ${chatWindow.scrollTop}` )
      
        console.log( `scrollHeight ${chatWindow.scrollHeight}` )
      
        console.log( `clientHeight ${chatWindow.clientHeight}` )
        
        isScrolledToBottom = chatWindow.scrollHeight - chatWindow.clientHeight <= chatWindow.scrollTop + 20;
        
    }

    chatWindow.addEventListener('scroll', throttledScroll);

    function addMessage() {
        if (isScrolledToBottom) {
            chatWindow.scrollTop = chatWindow.scrollHeight;
        }
    }
    setInterval(addMessage, 100);
});


t1 = document.getElementById("t1")
setTimeout(()=>{
    t1.style.display = "block ";
},2000)
t2 = document.getElementById("t2")
setTimeout(()=>{
    t2.style.display = "block";
    h2.style.display = "none";
},3000)
t3 = document.getElementById("t3")
setTimeout(()=>{
    t3.style.display = "block";
    h3.style.display = "none";
},6500)
t4 = document.getElementById("t4")
setTimeout(()=>{
    t4.style.display = "block";
    h4.style.display = "none";
},10000)
t5 = document.getElementById("t5")
setTimeout(()=>{
    t5.style.display = "block";
    h5.style.display = "none";
},14000)
t6 = document.getElementById("t6")
setTimeout(()=>{
    t6.style.display = "block";
    h6.style.display = "none";
},15500)

h1 = document.getElementById("h1")
setTimeout(()=>{
    h1.style.display = "none";
},1800)

h2 = document.getElementById("h2")
setTimeout(()=>{
    h2.style.display = "block";
},2000)
h3 = document.getElementById("h3")
setTimeout(()=>{
    h3.style.display = "block";
},3500)
h4 = document.getElementById("h4")
setTimeout(()=>{
    h4.style.display = "block";
},8500)
h5 = document.getElementById("h5")
setTimeout(()=>{
    h5.style.display = "block";
},10500)
h6 = document.getElementById("h6")
setTimeout(()=>{
    h6.style.display = "block";
},14500)


function btn1(){
    t7 = document.getElementById("t7")
    setTimeout(()=>{
        t7.style.display = "block";
        h7.style.display = "none";
    },2000)
    t8 = document.getElementById("t8")
    setTimeout(()=>{
        t8.style.display = "block";
        h8.style.display = "none";
    },3000)

    h7 = document.getElementById("h7")
setTimeout(()=>{
    h7.style.display = "block";
},500)
h8 = document.getElementById("h8")
setTimeout(()=>{
    h8.style.display = "block";
},2400)
}

function btn2(){
    t9 = document.getElementById("t9")
    setTimeout(()=>{
        t9.style.display = "block";
        h9.style.display = "none";
        // s1.style.display = "none";
    },2000)
    t10 = document.getElementById("t10")
    setTimeout(()=>{
        t10.style.display = "block";
        h10.style.display = "none";
    },5000)
    t11 = document.getElementById("t11")
    setTimeout(()=>{
        t11.style.display = "block";
        h11.style.display = "none";
    },7000)
    t12 = document.getElementById("t12")
    setTimeout(()=>{
        t12.style.display = "block";
        h12.style.display = "none";
    },7600)

    h9 = document.getElementById("h9")
setTimeout(()=>{
    h9.style.display = "block";
},500)
h10 = document.getElementById("h10")
setTimeout(()=>{
    h10.style.display = "block";
},2400)
h11 = document.getElementById("h11")
setTimeout(()=>{
    h11.style.display = "block";
},5500)
h12 = document.getElementById("h12")
setTimeout(()=>{
    h12.style.display = "block";
},7200)
}
function btn3(){
    t14 = document.getElementById("t14")
    setTimeout(()=>{
        t14.style.display = "block";
        h14.style.display = "none";
        // s1.style.display = "none";
    },2000)
    t15 = document.getElementById("t15")
    setTimeout(()=>{
        t15.style.display = "block";
        h15.style.display = "none";
    },5000)
    t16 = document.getElementById("t16")
    setTimeout(()=>{
        t16.style.display = "block";
        h16.style.display = "none";
    },7000)
    // t12 = document.getElementById("t12")
    // setTimeout(()=>{
    //     t12.style.display = "block";
    //     h12.style.display = "none";
    // },7600)

    h14 = document.getElementById("h14")
setTimeout(()=>{
    h14.style.display = "block";
},500)
h15 = document.getElementById("h15")
setTimeout(()=>{
    h15.style.display = "block";
},2400)
h16 = document.getElementById("h16")
setTimeout(()=>{
    h16.style.display = "block";
},5500)
t17 = document.getElementById("t17")
setTimeout(()=>{
    t17.style.display = "block";
},7200)
}