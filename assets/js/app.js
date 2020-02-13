let scene, camera, renderer;
let ground, bedForward, bedForwardB, pillowForward, bedBack, bedBackB, pillowBack, dresser, 
windowBack, windowFront, windowRight, windowLeft, door, 
smallWindowRight, smallWindowLeft, ambientLight, light, controls, directionalLight;
let textureWood, textureSky, textureWall, textureBlanket, textureDresser, textureDoor;
let keyboard = {};
let player = { height:1.8, speed:0.2, turnSpeed:Math.PI*0.02 };
let USE_WIREFRAME = false;

// ========================== OBJECTS FUNCTION ==========================
function init(){
   renderer = new THREE.WebGLRenderer();
   renderer.setSize( window.innerWidth, window.innerHeight );
   document.body.appendChild( renderer.domElement );
   scene = new THREE.Scene();
   const loader = new THREE.TextureLoader();
   loader.load('assets/textures/bg.jfif' , function(texture)
               {
                scene.background = texture;  
               });
   camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.1, 1000 );
   
   // =================================== TEXTURES ===================================
   textureSky = new THREE.TextureLoader().load( 'assets/textures/sky.jpg' );
   textureWood = new THREE.TextureLoader().load( 'assets/textures/wood.jpg' );
   textureWall = new THREE.TextureLoader().load( 'assets/textures/wall.jpg' );
   textureBlanket = new THREE.TextureLoader().load( 'assets/textures/blanket.jpg' );
   textureDresser = new THREE.TextureLoader().load( 'assets/textures/dresser.jpg' );
   textureDoor = new THREE.TextureLoader().load( 'assets/textures/door.jpg' );
   // ========================== OBJECTS ==========================
   //FLOOR
   ground = new THREE.Mesh(
      new THREE.PlaneGeometry(10,10,10,10),
      new THREE.MeshPhongMaterial({map: textureWood, wireframe:USE_WIREFRAME})
   );
   ground.rotation.x -= Math.PI / 2;
   ground.receiveShadow = true;
   scene.add(ground);

   // BED FORWARD
   bedForward = new THREE.Mesh(
      new THREE.BoxGeometry(4, 0.75, 2),
      new THREE.MeshPhongMaterial({map: textureBlanket, wireframe:USE_WIREFRAME})
   );
   bedForward.receiveShadow = true;
   bedForward.position.set(0, 0.5, -3);
   scene.add(bedForward);

   // BED FORWARD BLANKET
   bedForwardB = new THREE.Mesh(
      new THREE.BoxGeometry(3, 1, 2.5),
      new THREE.MeshPhongMaterial({color:0xFFFFFF, wireframe:USE_WIREFRAME})
   );
   bedForwardB.receiveShadow = true;
   bedForwardB.position.set(0.75, 0.5, -3);
   scene.add(bedForwardB);

   // PILLOW FORWARD
   pillowForward = new THREE.Mesh(
      new THREE.BoxGeometry(0.5, 0.1, 1.5),
      new THREE.MeshLambertMaterial({color:0xFFFFFF, wireframe:USE_WIREFRAME})
   );
   pillowForward.receiveShadow = true;
   pillowForward.position.set(-1.5, 0.9, -3);
   scene.add(pillowForward);

   // BED BACK
   bedBack = new THREE.Mesh(
      new THREE.BoxGeometry(4, 0.75, 2),
      new THREE.MeshPhongMaterial({map: textureBlanket, wireframe:USE_WIREFRAME})
   );
   bedBack.receiveShadow = true;
   bedBack.position.set(0, 0.5, 3);
   scene.add(bedBack);

   // BED BACK BLANKET
   bedBackB = new THREE.Mesh(
      new THREE.BoxGeometry(3, 1, 2.5),
      new THREE.MeshPhongMaterial({color:0xFFFFFF, wireframe:USE_WIREFRAME})
   );
   bedBackB.receiveShadow = true;
   bedBackB.position.set(0.75, 0.5, 3);
   scene.add(bedBackB);

   // PILLOW BACK
   pillowBack = new THREE.Mesh(
      new THREE.BoxGeometry(0.5, 0.1, 1.5),
      new THREE.MeshLambertMaterial({color:0xFFFFFF, wireframe:USE_WIREFRAME})
   );
   pillowBack.receiveShadow = true;
   pillowBack.position.set(-1.5, 0.9, 3);
   scene.add(pillowBack);

   // DRESSER
   dresser = new THREE.Mesh(
      new THREE.BoxGeometry(1, 4, 2),
      new THREE.MeshPhongMaterial({map: textureDresser, wireframe:USE_WIREFRAME})
   );
   dresser.receiveShadow = true;
   dresser.position.set(-3, 2, 0);
   scene.add(dresser);

   // WINDOW BACK
   windowBack = new THREE.Mesh(
      new THREE.BoxGeometry(10, 5, 0.25),
      new THREE.MeshPhongMaterial({map: textureWall, wireframe:USE_WIREFRAME})
   );
   windowBack.receiveShadow = true;
   windowBack.position.set(0, 2.5, 5);
   scene.add(windowBack);

   // WINDOW FRONT
   windowFront = new THREE.Mesh(
      new THREE.BoxGeometry(10, 5, 0.25),
      new THREE.MeshPhongMaterial({map: textureWall, wireframe:USE_WIREFRAME})
   );
   windowFront.receiveShadow = true;
   windowFront.position.set(0, 2.5, -5);
   scene.add(windowFront);

   // WINDOW LEFT
   windowLeft = new THREE.Mesh(
      new THREE.BoxGeometry(0.25, 5, 10),
      new THREE.MeshPhongMaterial({map: textureWall, wireframe:USE_WIREFRAME})
   );
   windowLeft.receiveShadow = true;
   windowLeft.position.set(5, 2.5, 0);
   scene.add(windowLeft);

   // WINDOW RIGHT
   windowRight = new THREE.Mesh(
      new THREE.BoxGeometry(0.25, 5, 10),
      new THREE.MeshPhongMaterial({map: textureWall, wireframe:USE_WIREFRAME})
   );
   windowRight.receiveShadow = true;
   windowRight.position.set(-5, 2.5, 0);
   scene.add(windowRight);

   // DOOR
   door = new THREE.Mesh(
      new THREE.BoxGeometry(0.5, 5, 1.5),
      new THREE.MeshStandardMaterial({map: textureDoor, wireframe:USE_WIREFRAME})
   );
   door.receiveShadow = true;
   door.position.set(5, 2.5, -3);
   scene.add(door);

   // SMALL WINDOW LEFT
   smallWindowLeft = new THREE.Mesh(
      new THREE.BoxGeometry(3, 3, 0.5),
      new THREE.MeshStandardMaterial({map: textureSky, wireframe:USE_WIREFRAME})
   );
   smallWindowLeft.receiveShadow = true;
   smallWindowLeft.position.set(2, 3, 5);
   scene.add(smallWindowLeft);

   // SMALL WINDOW RIGHT
   smallWindowRight = new THREE.Mesh(
      new THREE.BoxGeometry(3, 3, 0.5),
      new THREE.MeshStandardMaterial({map: textureSky, wireframe:USE_WIREFRAME})
   );
   smallWindowRight.receiveShadow = true;
   smallWindowRight.position.set(-2, 3, 5);
   scene.add(smallWindowRight);
   
   // AMBIENT LIGHT
   ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
   scene.add(ambientLight);
   

   light = new THREE.PointLight(0xffffff, 0.8, 18);
   light.position.set(-3,6,-3);
   light.castShadow = true;
   light.shadow.camera.near = 0.1;
   light.shadow.camera.far = 25;
   // scene.add(light);

   // AMBIENT LIGHT
   ambientLight = new THREE.AmbientLight(0xffffff, 0.1);
   scene.add(ambientLight);
   
   // POINT LIGHT
   light = new THREE.PointLight(0xffffff, 0.8, 18);
   light.position.set(0, 0, 0);
   light.castShadow = true;
   scene.add(light);
   
   camera.position.set(0, player.height, -5);
   camera.lookAt(new THREE.Vector3(0,player.height,0));

   // DIRECTIONAL LIGHT
   directionalLight = new THREE.DirectionalLight( 0xFFFFFF, 1 );
   directionalLight.position.set( 0, 0, 0 );
   directionalLight.castShadow = true;
   scene.add( directionalLight );

   
   // RENDERER
   renderer.shadowMap.enabled = true;
   renderer.shadowMap.type = THREE.BasicShadowMap;
   
   controls = new THREE.OrbitControls (camera, renderer.domElement);
   animate();
   }
   
// ========================== ANIMATE FUNCTION ==========================
function animate(){
   controls.update();
   requestAnimationFrame(animate);
   
   if(keyboard[87]){ // W key
      camera.position.x -= Math.sin(camera.rotation.y) * player.speed;
      camera.position.z -= -Math.cos(camera.rotation.y) * player.speed;
   }
   if(keyboard[83]){ // S key
      camera.position.x += Math.sin(camera.rotation.y) * player.speed;
      camera.position.z += -Math.cos(camera.rotation.y) * player.speed;
   }
   if(keyboard[65]){ // A key
      camera.position.x += Math.sin(camera.rotation.y + Math.PI/2) * player.speed;
      camera.position.z += -Math.cos(camera.rotation.y + Math.PI/2) * player.speed;
   }
   if(keyboard[68]){ // D key
      camera.position.x += Math.sin(camera.rotation.y - Math.PI/2) * player.speed;
      camera.position.z += -Math.cos(camera.rotation.y - Math.PI/2) * player.speed;
   }
   
   if(keyboard[37]){ // left arrow key
      camera.rotation.y -= player.turnSpeed;
   }
   if(keyboard[39]){ // right arrow key
      camera.rotation.y += player.turnSpeed;
   }
   
   renderer.render(scene, camera);
}
 
function keyDown(event){
  keyboard[event.keyCode] = true;
}
 
function keyUp(event){
  keyboard[event.keyCode] = false;
}
 
window.addEventListener('keydown', keyDown);
window.addEventListener('keyup', keyUp);
 
window.onload = init;
 
