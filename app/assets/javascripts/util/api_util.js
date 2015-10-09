ApiUtil = {
  fetchBenches: function(){
    $.ajax({
      url: "api/benches",
      action: "get",
      success: function(response){
        ApiActions.receiveAll(response);
      }
    });
  }
};
