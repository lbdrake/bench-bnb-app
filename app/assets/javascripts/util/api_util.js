ApiUtil = {
  fetchBenches: function(bounds){
    $.ajax({
      url: "api/benches",
      action: "get",
      data: bounds,
      success: function(response){
        ApiActions.receiveAll(response);
      }
    });
  }
};
