/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-08-04 13:58:01
 * @version $Id$
 */






(function(){

    var Menubar = function(){
        this.el = document.querySelector('#sidebar ul');
        this.state = 'allClosed';
        this.el.addEventListener('click',function(e){
            e.stopPropagation();
        });
        var self = this;
        this.currentOpendMenuContent = null;
        this.menuList = document.querySelectorAll('#sidebar ul > li');
        for(var i = 0;i<this.menuList.length;i++){
            this.menuList[i].addEventListener('click',function(e){
                var menuContentEl = document.getElementById(e.currentTarget.id + '-content');
                if(self.state === 'allClosed'){
                    console.log('打开'+menuContentEl.id);
                    menuContentEl.style.top = '0';
                    menuContentEl.style.left = '-80px';
                    menuContentEl.className = 'nav-content';
                    menuContentEl.classList.add('menuContent-move-right');
                    self.state = 'hasOpened';
                    self.currentOpendMenuContent = menuContentEl;
                }else{
                    console.log('关闭' + self.currentOpendMenuContent.id);
                    self.currentOpendMenuContent.className = 'nav-content';
                    self.currentOpendMenuContent.style.top = '0';
                    self.currentOpendMenuContent.style.left = '40px';
                    self.currentOpendMenuContent.classList.add('menuContent-move-left');
                    console.log('打开'+menuContentEl.id);
                    menuContentEl.className = 'nav-content';
                    menuContentEl.style.top = '250px';
                    menuContentEl.style.left = '40px';
                    menuContentEl.classList.add('menuContent-move-up');
                    self.state = 'hasOpened';
                    self.currentOpendMenuContent = menuContentEl;
                }
            });
        }
        this.menuContentList = document.querySelectorAll('.nav-content > div.nav-con-close');
        for(i=0;i<this.menuContentList.length;i++){
            this.menuContentList[i].addEventListener('click',function(e){
                console.log('关闭content');
                var menuContent = e.currentTarget.parentNode;
                menuContent.className = 'nav-content';
                menuContent.style.top = '0';
                menuContent.style.left = '40px';
                menuContent.classList.add('menuContent-move-left');
                this.state = 'allClosed';
            });
        }
      
    };

    var Sidebar = function(eId,closeBarId){
        this.state = "opened";
        this.el = document.getElementById(eId||'sidebar');
        this.closeBarEl = document.getElementById(closeBarId||'closeBar');
        var self = this;
        this.menubar = new Menubar();
        this.el.addEventListener('click',function(event){
            if(event.target !==self.el) {
                self.triggerSwich();
            }   
        });
    };
    Sidebar.prototype.close = function(){
        console.log('关闭sidebar');
        this.el.style.left='0px'; 
        this.closeBarEl.style.left='0px';
        this.el.className = 'sidebar-move-left';
        this.closeBarEl.className = 'closeBar-move-right'; 
        this.state = 'closed';
    };
    Sidebar.prototype.open = function(){
        console.log('打开sidebar');
        this.el.style.left = '-120px';
        this.el.className = 'sidebar-move-right';
        this.closeBarEl.style.left = '160px';
        this.closeBarEl.className = 'closeBar-move-left';
        this.state = 'opened';
    };
    Sidebar.prototype.triggerSwich = function(){
        if(this.state === 'opened'){
            this.close();
        }else{
            this.open(); 
        }
    };
    var sidebar = new Sidebar();
  
})();





