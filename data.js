var APP_DATA = {
  "scenes": [
    {
      "id": "0-hall",
      "name": "HALL",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.416014181631855,
          "pitch": 0.18849436085272053,
          "rotation": 0,
          "target": "1-fauteil"
        },
        {
          "yaw": 1.3177120385203054,
          "pitch": 0.30486055287507696,
          "rotation": 0,
          "target": "6-hall-bureau"
        },
        {
          "yaw": -0.3178883791063587,
          "pitch": -0.22943992523106083,
          "rotation": 0,
          "target": "9-chambre"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-fauteil",
      "name": "FAUTEIL",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.3423384569835726,
          "pitch": 0.09884670751963043,
          "rotation": 0,
          "target": "0-hall"
        },
        {
          "yaw": 0.28189078243240573,
          "pitch": -0.006138663815580259,
          "rotation": 0,
          "target": "2-sejour"
        },
        {
          "yaw": -2.8889163689078785,
          "pitch": 0.19521408313164557,
          "rotation": 0,
          "target": "3-salon-sam"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-sejour",
      "name": "SEJOUR",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.5565306044466496,
          "pitch": 0.28930110265486064,
          "rotation": 0,
          "target": "1-fauteil"
        },
        {
          "yaw": 0.4734719319236671,
          "pitch": 0.0800577222379264,
          "rotation": 0,
          "target": "0-hall"
        },
        {
          "yaw": -0.45049683142956276,
          "pitch": 0.10492424683928903,
          "rotation": 0,
          "target": "3-salon-sam"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-salon-sam",
      "name": "SALON-SAM",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.09078373134885531,
          "pitch": 0.06809569475338151,
          "rotation": 0,
          "target": "5-cuisine"
        },
        {
          "yaw": 2.0982249651587175,
          "pitch": 0.0958062969150415,
          "rotation": 0,
          "target": "0-hall"
        },
        {
          "yaw": -2.755497697754656,
          "pitch": 0.4547058618199493,
          "rotation": 0,
          "target": "1-fauteil"
        },
        {
          "yaw": -2.8832403623411675,
          "pitch": 0.075415925388576,
          "rotation": 0,
          "target": "2-sejour"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-cuisine-sam",
      "name": "CUISINE-SAM",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.06642106648395796,
          "pitch": 0.08053249420711062,
          "rotation": 0,
          "target": "5-cuisine"
        },
        {
          "yaw": 1.5388993733849032,
          "pitch": 0.09359347340884838,
          "rotation": 0,
          "target": "8-fauteuil-2"
        },
        {
          "yaw": 3.0556421583717137,
          "pitch": 0.2329415918080695,
          "rotation": 0,
          "target": "3-salon-sam"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-cuisine",
      "name": "CUISINE",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.062106333559491134,
          "pitch": 0.2087649342945852,
          "rotation": 0,
          "target": "4-cuisine-sam"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-hall-bureau",
      "name": "HALL-BUREAU",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.7411223755323988,
          "pitch": 0.12898711489637193,
          "rotation": 0,
          "target": "7-bureau"
        },
        {
          "yaw": 2.635009212692408,
          "pitch": 0.10408398610095304,
          "rotation": 0,
          "target": "0-hall"
        },
        {
          "yaw": -1.312704214811312,
          "pitch": 0.17570760057894574,
          "rotation": 0,
          "target": "8-fauteuil-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-bureau",
      "name": "BUREAU",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.658936979385654,
          "pitch": 0.27365424532704097,
          "rotation": 0,
          "target": "0-hall"
        },
        {
          "yaw": -0.5283771663619667,
          "pitch": 0.7462815873295092,
          "rotation": 0,
          "target": "6-hall-bureau"
        },
        {
          "yaw": 0.23155385996018651,
          "pitch": 0.1566014340982953,
          "rotation": 0,
          "target": "8-fauteuil-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-fauteuil-2",
      "name": "FAUTEUIL 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.05749180563509526,
          "pitch": 0.17592956217770173,
          "rotation": 0,
          "target": "6-hall-bureau"
        },
        {
          "yaw": 1.3491728116132045,
          "pitch": 0.049139174707491406,
          "rotation": 0,
          "target": "4-cuisine-sam"
        },
        {
          "yaw": -0.07942487649805585,
          "pitch": 0.09145102962386531,
          "rotation": 0,
          "target": "7-bureau"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-chambre",
      "name": "CHAMBRE",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.2596663571287543,
          "pitch": 0.05087152029574682,
          "rotation": 0,
          "target": "0-hall"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
