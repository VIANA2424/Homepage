$(".dark-btn").click(
  function(){
    $(".box").toggleClass("dark");
    $("body").toggleClass("dark");
  }
  );

  $(".glow-btn").click(
    function(){
      $(".box").toggleClass("glow");
    }
  );

  $(".spin-btn").click(
    function(){
      $(".box").toggleClass("spin");
    }
  );

  $(".reveal-btn").click(
    function(){
      $(".chair").toggleClass("opacity", "1");
      $(".reveal-btn").hide();

    }

  );

  $(function(){
    $(".draggable").dragable();

  });

