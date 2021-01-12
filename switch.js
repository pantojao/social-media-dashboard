$(document).ready(function(){
  $(".check").click(function(){
      if(this.checked == true) {
        $("body").addClass('very-dark-background')
        $(".follower-card").addClass('dark-card-background')
        $(".stat-card").addClass('dark-card-background')
        $(".follower-amount").addClass('white-text')
        $(".stat-number").addClass('white-text')
        $(".username").addClass('desaturated-text')
        $(".text").addClass('white-text')

      } else {
        $("body").removeClass('very-dark-background')
        $(".follower-card").removeClass('dark-card-background')
        $(".stat-card").removeClass('dark-card-background')
        $(".follower-amount").removeClass('white-text')
        $(".stat-number").removeClass('white-text')
        $(".username").removeClass('desaturated-text')
        $(".text").removeClass('white-text')
      }
  });

});


// - Very Dark Blue (BG): hsl(230, 17%, 14%)
// - Very Dark Blue (Top BG Pattern): hsl(232, 19%, 15%)
// - Dark Desaturated Blue (Card BG): hsl(228, 28%, 20%)
// - Desaturated Blue (Text): hsl(228, 34%, 66%)
// - White (Text): hsl(0, 0%, 100%)