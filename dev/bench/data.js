window.BENCHMARK_DATA = {
  "lastUpdate": 1749222641293,
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
      },
      {
        "commit": {
          "author": {
            "email": "5231841+adil-soubki@users.noreply.github.com",
            "name": "Adil",
            "username": "adil-soubki"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "77919bcd255773a0240b56175963845032342118",
          "message": "Update README.md",
          "timestamp": "2025-06-04T12:26:30+01:00",
          "tree_id": "e1c67cbae41527682a334d961a1fdc760d07521f",
          "url": "https://github.com/adil-soubki/OperatorLearning.jl/commit/77919bcd255773a0240b56175963845032342118"
        },
        "date": 1749037973441,
        "tool": "julia",
        "benches": [
          {
            "name": "expression",
            "value": 3470753662,
            "unit": "ns",
            "extra": "gctime=340181251.5\nmemory=8927207048\nallocs=4240013\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "example",
            "value": 278184922177,
            "unit": "ns",
            "extra": "gctime=30388460381\nmemory=428304330320\nallocs=1830122393\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
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
          "id": "574b37888438db644a4f08a8a1ad99abb6b3060d",
          "message": "similarity, bugfixes, new examples\n\n- add function to measure similarity of learned operators to reference\n  operators\n- change template_combiner loss to use MAE\n- add function to update operator parameters to match the best learned\n  function (or any function for that matter)\n- add main.jl which shows a basic scenario.\n- add various todo notes and fixmes.",
          "timestamp": "2025-06-05T13:15:19+01:00",
          "tree_id": "ab6a00c7e467d685fd81819a7dba6329d74b3b4b",
          "url": "https://github.com/adil-soubki/OperatorLearning.jl/commit/574b37888438db644a4f08a8a1ad99abb6b3060d"
        },
        "date": 1749127444527,
        "tool": "julia",
        "benches": [
          {
            "name": "expression",
            "value": 3573041263.5,
            "unit": "ns",
            "extra": "gctime=404812488.5\nmemory=8927207048\nallocs=4240013\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "example",
            "value": 265665263914,
            "unit": "ns",
            "extra": "gctime=30996482189\nmemory=383409473608\nallocs=1731621710\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
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
          "id": "951ef0a92e3dbf3342138cbbf9821ca275f1b08f",
          "message": "add some comments",
          "timestamp": "2025-06-06T10:35:23+01:00",
          "tree_id": "41fae8b3b78ba92e8d6e6c9fcead5243b0a52060",
          "url": "https://github.com/adil-soubki/OperatorLearning.jl/commit/951ef0a92e3dbf3342138cbbf9821ca275f1b08f"
        },
        "date": 1749204207469,
        "tool": "julia",
        "benches": [
          {
            "name": "expression",
            "value": 3731952060.5,
            "unit": "ns",
            "extra": "gctime=461027879\nmemory=8927207048\nallocs=4240013\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "example",
            "value": 306443728456,
            "unit": "ns",
            "extra": "gctime=37875673279\nmemory=448875081536\nallocs=1874946298\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
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
          "id": "9d91db1547056deb02b3d4494f3d275f545e4988",
          "message": "refactor operators into on Lop class, and more\n\n- refactor UnaOp and BinOp into one Lop{N} struct\n- actually support changing the underlying model structure\n- add LuxUtils.jl for more ergonomic skeleton generation",
          "timestamp": "2025-06-06T15:46:22+01:00",
          "tree_id": "1c95e726a0457fa5347b94b2d28bf186c32e9dc6",
          "url": "https://github.com/adil-soubki/OperatorLearning.jl/commit/9d91db1547056deb02b3d4494f3d275f545e4988"
        },
        "date": 1749222640437,
        "tool": "julia",
        "benches": [
          {
            "name": "expression",
            "value": 3330478682,
            "unit": "ns",
            "extra": "gctime=341827996.5\nmemory=8805604104\nallocs=2350007\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "example",
            "value": 229948864341,
            "unit": "ns",
            "extra": "gctime=32248538114\nmemory=397666923600\nallocs=1171574409\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          }
        ]
      }
    ]
  }
}