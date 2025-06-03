window.BENCHMARK_DATA = {
  "lastUpdate": 1748956834871,
  "repoUrl": "https://github.com/adil-soubki/OperatorLearning.jl",
  "entries": {
    "Julia benchmark result": [
      {
        "commit": {
          "author": {
            "email": "5231841+adil-soubki@users.noreply.github.com",
            "name": "adil",
            "username": "adil-soubki"
          },
          "committer": {
            "email": "5231841+adil-soubki@users.noreply.github.com",
            "name": "adil",
            "username": "adil-soubki"
          },
          "distinct": true,
          "id": "7f8f0d6bfc83f5db80acf273574ed128aca932fc",
          "message": "stash git changes after running benchmarks",
          "timestamp": "2025-06-03T14:04:41+01:00",
          "tree_id": "2b59dd7b6f5b94769f678adf3476dd1d2535aef0",
          "url": "https://github.com/adil-soubki/OperatorLearning.jl/commit/7f8f0d6bfc83f5db80acf273574ed128aca932fc"
        },
        "date": 1748956209497,
        "tool": "julia",
        "benches": [
          {
            "name": "rand10",
            "value": 72.91786447638604,
            "unit": "ns",
            "extra": "gctime=0\nmemory=144\nallocs=2\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":974,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "rand20",
            "value": 83.37474120082815,
            "unit": "ns",
            "extra": "gctime=0\nmemory=224\nallocs=2\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":966,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "5231841+adil-soubki@users.noreply.github.com",
            "name": "adil",
            "username": "adil-soubki"
          },
          "committer": {
            "email": "5231841+adil-soubki@users.noreply.github.com",
            "name": "adil",
            "username": "adil-soubki"
          },
          "distinct": true,
          "id": "b4a50f9768841e56859ec2fb2a0f1e0fa3d437b3",
          "message": "change github token for benchmarking",
          "timestamp": "2025-06-03T14:15:11+01:00",
          "tree_id": "3b94e84f75564d2755d9da5218604bd9bba4761f",
          "url": "https://github.com/adil-soubki/OperatorLearning.jl/commit/b4a50f9768841e56859ec2fb2a0f1e0fa3d437b3"
        },
        "date": 1748956834483,
        "tool": "julia",
        "benches": [
          {
            "name": "rand10",
            "value": 73.63860369609856,
            "unit": "ns",
            "extra": "gctime=0\nmemory=144\nallocs=2\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":974,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "rand20",
            "value": 83.02286902286902,
            "unit": "ns",
            "extra": "gctime=0\nmemory=224\nallocs=2\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":962,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          }
        ]
      }
    ]
  }
}