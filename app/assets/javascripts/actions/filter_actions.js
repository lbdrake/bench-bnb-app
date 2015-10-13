FilterActions = {
  receiveFilterBounds: function (newbounds) {
    AppDispatcher.dispatch({
      actionType: FilterConstants.BENCH_BOUNDS_UPDATED,
      bounds: newbounds
    });
  },

  receiveFilterSeatingMin: function (newmin) {
    AppDispatcher.dispatch({
      actionType: FilterConstants.BENCH_SEATING_MIN_UPDATED,
      min: newmin
    });
  },

  receiveFilterSeatingMax: function (newmax) {
    AppDispatcher.dispatch({
      actionType: FilterConstants.BENCH_SEATING_MAX_UPDATED,
      max: newmax
    });
  }
};
