ApiActions = {
  receiveAll: function (benches) {
    AppDispatcher.dispatch({
      actionType: BenchConstants.BENCHES_RECEIVED,
      benches: benches
    });
  },

  receiveSingleBench: function (bench) {
    AppDispatcher.dispatch({
      actionType: BenchConstants.SINGLE_BENCH_RECEIVED,
      bench: bench
    });
  }
};
