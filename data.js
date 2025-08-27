var APP_DATA = {
  "scenes": [
    {
      "id": "0-master-bedroom",
      "name": "Master bedroom",
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
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.992557318856292,
          "pitch": -0.007311952312745618,
          "rotation": 0,
          "target": "1-dressing-area"
        },
        {
          "yaw": -1.486840321072176,
          "pitch": 0.044975649503053106,
          "rotation": 0,
          "target": "0-master-bedroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-dressing-area",
      "name": "Dressing area",
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
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.15170938882720542,
          "pitch": -0.02248797124645563,
          "rotation": 0,
          "target": "1-dressing-area"
        },
        {
          "yaw": -2.9724252318103783,
          "pitch": -0.014990858932515394,
          "rotation": 0,
          "target": "0-master-bedroom"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "sajithmaster bed",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
