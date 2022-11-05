new Vue({
    el:'#app',
    data:{
        num1:0,
        num2:0,
    },
    computed:{
        result(){
            return parseInt(this.num1)+parseInt(this.num2);
        }
    }

});