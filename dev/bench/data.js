window.BENCHMARK_DATA = {
  "lastUpdate": 1749037640502,
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
          "id": "85d84a6484719aa057ed1a838e59f26ab607061a",
          "message": "add util to generate template expression specs",
          "timestamp": "2025-06-04T12:03:24+01:00",
          "tree_id": "d0c741c5c9630327e9b570127db856271d79079c",
          "url": "https://github.com/adil-soubki/OperatorLearning.jl/commit/85d84a6484719aa057ed1a838e59f26ab607061a"
        },
        "date": 1749036562092,
        "tool": "julia",
        "benches": [
          {
            "name": "expression",
            "value": 3498752115.5,
            "unit": "ns",
            "extra": "gctime=368994878.5\nmemory=8927207048\nallocs=4240013\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "example",
            "value": 320857297315,
            "unit": "ns",
            "extra": "gctime=37020459597\nmemory=471891046320\nallocs=2045550917\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
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
          "id": "9eb6f3f79d300da80769e9fdd0c96eb219c4433c",
          "message": "comment uploadcoveralls action for now",
          "timestamp": "2025-06-04T12:12:45+01:00",
          "tree_id": "a4b225ed954b1b3a4b49c0a6994de0a8873e0b5c",
          "url": "https://github.com/adil-soubki/OperatorLearning.jl/commit/9eb6f3f79d300da80769e9fdd0c96eb219c4433c"
        },
        "date": 1749037179819,
        "tool": "julia",
        "benches": [
          {
            "name": "expression",
            "value": 3494279573,
            "unit": "ns",
            "extra": "gctime=359724164\nmemory=8927207048\nallocs=4240013\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "example",
            "value": 318793158050,
            "unit": "ns",
            "extra": "gctime=36337878769\nmemory=488938962448\nallocs=2034533280\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
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
          "id": "45947146fc9f494f5d9c69c770918839a4a777d7",
          "message": "stop testing on julia 1.6 in CI.yml",
          "timestamp": "2025-06-04T12:18:52+01:00",
          "tree_id": "b2989d4a6adec0f9b591ab117aa28088bd5b9ce8",
          "url": "https://github.com/adil-soubki/OperatorLearning.jl/commit/45947146fc9f494f5d9c69c770918839a4a777d7"
        },
        "date": 1749037496175,
        "tool": "julia",
        "benches": [
          {
            "name": "expression",
            "value": 3802779886,
            "unit": "ns",
            "extra": "gctime=500973982.5\nmemory=8927207048\nallocs=4240013\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "example",
            "value": 293764298558,
            "unit": "ns",
            "extra": "gctime=36973035596\nmemory=421061920968\nallocs=1791316129\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
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
          "id": "10cd7db1d1e55503ade3c79fed60e5f771e303fd",
          "message": "update readme",
          "timestamp": "2025-06-04T12:21:20+01:00",
          "tree_id": "293d943b3e80eef6de769f7975d6cc488890d378",
          "url": "https://github.com/adil-soubki/OperatorLearning.jl/commit/10cd7db1d1e55503ade3c79fed60e5f771e303fd"
        },
        "date": 1749037639579,
        "tool": "julia",
        "benches": [
          {
            "name": "expression",
            "value": 3504604360.5,
            "unit": "ns",
            "extra": "gctime=358699892.5\nmemory=8927207048\nallocs=4240013\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "example",
            "value": 299348667032,
            "unit": "ns",
            "extra": "gctime=32812782383\nmemory=453846401736\nallocs=1955714208\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          }
        ]
      }
    ]
  }
}