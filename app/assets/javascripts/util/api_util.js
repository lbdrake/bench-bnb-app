ApiUtil = {
  fetchBenches: function(){
    $.ajax({
      url: "api/benches",
      action: "get",
      success: function(response){
        console.log(response);
        ApiActions.receiveAll(response);
      }
    });
  }
};
