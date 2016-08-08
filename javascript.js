/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-08-01 18:15:29
 * @version $Id$
 */




 //阅读全文按钮  
    function btnshowarticle(obj){          
        
        var articleAbstract = obj.parentNode.previousElementSibling.previousElementSibling;
        var articleContent = articleAbstract.nextElementSibling;

           
        if(obj.innerHTML == "阅读全文"){
            obj.innerHTML = "收起全文";
            articleAbstract.style.display = "none";
            articleContent.style.display = "block";

            
        }else{
            

            articleAbstract.style.display = "block";
            articleContent.style.display = "none";
            obj.innerHTML = "阅读全文";
            
        }
  
    }    

//阅读全文按钮结束






//回到顶部
window.onload = function(){
    //获取回到顶部按钮
    var obtn = document.getElementById("arrowtopbtn");
    var timer = null;
    //滚动条触发回到顶部按钮
    window.onscroll = function(){
        var ostop = document.documentElement.scrollTop || document.body.scrollTop; 
        //700px显示按钮
        if(ostop >= 700){
        obtn.style.display="block";
    }else{
        obtn.style.display="none";
    }
    
    }
    

    obtn.onclick = function(){
        // 设置定时器
        timer = setInterval(function(){
            // 获取滚动条距离顶部的高度
            var ostop = document.documentElement.scrollTop || document.body.scrollTop; 
            //向下取整，滚动条的速度。
            var ispeed = Math.floor(-ostop/6);
            //滚动条距离顶部的高度
            document.documentElement.scrollTop = document.body.scrollTop = ostop + ispeed;
            if(ostop == 0){
                clearInterval(timer);    
            }   
        },30);
        

    }     
}


