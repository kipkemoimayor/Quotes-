$(document).ready(function () {
  $("#move").click(function(){
      // $("html,body").animate({scrollTop:$("#form").scrollTop()},1000);
      // return false;
       $("html,body").animate({scrollTop:$(document).height()},2000);
       return false;
  })
});
