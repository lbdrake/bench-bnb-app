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
  },

  createBench: function (object) {
    $.ajax({
      url: "api/benches",
      type: "post",
      data: {bench: object},
      success: function(response){
        ApiActions.receiveSingleBench(response);
      },
      error: function (response) {
        console.log("Error in api_util.createBench");
      }
    });
  }
};
