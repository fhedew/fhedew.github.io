// Inicializar AR.js
if ('xr' in navigator) {
  navigator.xr.requestSession({ requiredFeatures: ['hit-test'] }).then((session) => {
    // ... código para manejar la sesión XR
  });
}

// Cargar el modelo 3D
AFRAME.registerComponent('model', {
  init: function () {
    this.el.setAttribute('gltf-model', 'path/to/your/model.gltf');
  }
});

// Crear un marcador
AFRAME.registerComponent('marker-handler', {
  init: function () {
    this.el.addEventListener('markerFound', () => {
      // Mostrar el modelo cuando se detecta el marcador
      this.el.querySelector('#your-model').setAttribute('visible', true);
    });
    this.el.addEventListener('markerLost', () => {
      // Ocultar el modelo cuando se pierde el marcador
      this.el.querySelector('#your-model').setAttribute('visible', false);
    });
  }
});