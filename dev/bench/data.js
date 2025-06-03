window.BENCHMARK_DATA = {
  "lastUpdate": 1748965362376,
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
          "id": "8698a608a491dc76d03d6b5e54d3a2ddf0823b02",
          "message": "remove dumb step from benchmarking workflow",
          "timestamp": "2025-06-03T14:24:14+01:00",
          "tree_id": "354118b39ab6d3ce6d3a27e96ddbdc44ae946029",
          "url": "https://github.com/adil-soubki/OperatorLearning.jl/commit/8698a608a491dc76d03d6b5e54d3a2ddf0823b02"
        },
        "date": 1748957366421,
        "tool": "julia",
        "benches": [
          {
            "name": "rand10",
            "value": 72.09548254620123,
            "unit": "ns",
            "extra": "gctime=0\nmemory=144\nallocs=2\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":974,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "rand20",
            "value": 82.1407867494824,
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
          "id": "c894aee2cbf0cb395f8d3129e382fefc7a0eb6e4",
          "message": "rename benchmark jobs and yaml",
          "timestamp": "2025-06-03T14:44:45+01:00",
          "tree_id": "3e232cfefc45f9b56faac1a12e864773df743782",
          "url": "https://github.com/adil-soubki/OperatorLearning.jl/commit/c894aee2cbf0cb395f8d3129e382fefc7a0eb6e4"
        },
        "date": 1748958621787,
        "tool": "julia",
        "benches": [
          {
            "name": "rand10",
            "value": 72.23124357656732,
            "unit": "ns",
            "extra": "gctime=0\nmemory=144\nallocs=2\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":973,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "rand20",
            "value": 84.30848861283644,
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
          "id": "4324b0beaf48203a42f14ee9c6ba9c194ade4c93",
          "message": "update benchmarking",
          "timestamp": "2025-06-03T16:20:19+01:00",
          "tree_id": "dbd833a307a0bc47a1700c017e93d369f8808b37",
          "url": "https://github.com/adil-soubki/OperatorLearning.jl/commit/4324b0beaf48203a42f14ee9c6ba9c194ade4c93"
        },
        "date": 1748965361415,
        "tool": "julia",
        "benches": [
          {
            "name": "expression",
            "value": 3684564214,
            "unit": "ns",
            "extra": "gctime=452522795\nmemory=8927207048\nallocs=4240013\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "example",
            "value": 273048756260,
            "unit": "ns",
            "extra": "gctime=37366650832\nmemory=468076837176\nallocs=1842523640\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          }
        ]
      }
    ]
  }
}