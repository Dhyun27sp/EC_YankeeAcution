var searchManage= new Vue({
    el: '#header',
    data(){
        return{
            isClick: false,
        }
    },
    methods:{
        handleClickSearch(e){
            this.isClick= true;
        }, 
        handleClickX(e){
            this.isClick= false;
        }
    }
})