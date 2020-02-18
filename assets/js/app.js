

let scene, camera, renderer, controls;

let textureBackground, textureGrass, texturewoodBrown, textureConcrete, textureWoodBlue, 
textureCarpet, textureWoodWhite, textureBarney, textureBlanket;
let plane, houseRise, houseRiseConcrete, houseStairsBottom, houseStairsCenter, houseStairsTop,
columnStairsLeft, columnStairsRight, columnEndLeft, columnEndRight,
fenceLeftTop, fenceLeftCenter, fenceLeftBottom, fenceRightTop, fenceRightCenter, fenceRightBottom,
fenceSideLeftTop, fenceSideLeftCenter, fenceSideLeftBottom,
fenceBackLeftTop, fenceBackLeftCenter, fenceBackLeftBottom,
wallFirstFloorBack, wallFirstFloorFront, wallFirstFloorLeft, wallFirstFloorRight, wallFirstFloorBackOpacity, 
wallFirstFloorBackOpacityTop, wallFirstFloorRightOpacity, wallFirstFloorRightOpacityTop,
houseStairsBottomConcrete, houseStairsCenterConcrete, houseStairsTopConcrete, houseStairsWayConcrete,
door, doorInner, doorInnerLeft, doorInnerRight, doorInnerInnerLeft, doorInnerInnerRight, 
doorKnobLeft, doorKnobRight, tv, tvHang, carpet, bed, bedWall, pillowBack, pillowFront, bedBeddings, bedBlanket,
dresser, dresserInner,
roof;
let ambientLight, directionalLightBack, directionalLightFront, directionalLightRight;
 
let keyboard = {};
let player = { height: 12, speed: 0.2, turnSpeed: Math.PI*0.02 }; // change me
let USE_WIREFRAME = false;
 
function init(){
   scene = new THREE.Scene();

   camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.1, 1000);
   camera.position.set(0, player.height, -30); // change me
   camera.lookAt(new THREE.Vector3(0, player.height, 0));

   renderer = new THREE.WebGLRenderer();
   renderer.setSize(window.innerWidth, window.innerHeight);
   document.body.appendChild(renderer.domElement);
   // Enable Shadows in the Renderer
   renderer.shadowMap.enabled = true;
   renderer.shadowMap.type = THREE.BasicShadowMap;

   controls = new THREE.OrbitControls (camera, renderer.domElement);

   //================================== TEXTURES =================================
   textureBackground = new THREE.TextureLoader().load('assets/textures/bg.jpg');
   scene.background = textureBackground;
   textureGrass = new THREE.TextureLoader().load('assets/textures/grass.jpg');
   texturewoodBrown = new THREE.TextureLoader().load('assets/textures/woodBrown.jpg'); //Designed by Freepik
   textureConcrete = new THREE.TextureLoader().load('assets/textures/concrete.jpg');
   textureWoodBlue = new THREE.TextureLoader().load('assets/textures/woodBlue.jpg');
   textureCarpet = new THREE.TextureLoader().load('assets/textures/carpet.jpg');
   textureWoodWhite = new THREE.TextureLoader().load('assets/textures/woodWhite.jpg');
   textureBarney = new THREE.TextureLoader().load('assets/textures/barney.jpg');
   textureBlanket = new THREE.TextureLoader().load('assets/textures/blanket.jpg');

   //================================== OBJECTS ==================================
   // PLANE
   plane = new THREE.Mesh(
      new THREE.PlaneGeometry(30, 30, 30, 30),
      new THREE.MeshLambertMaterial({map: textureGrass, wireframe:USE_WIREFRAME})
   );
   plane.rotation.x -= Math.PI / 2;
   plane.receiveShadow = true;
   scene.add(plane);

   // HOUSE RISE
   houseRise = new THREE.Mesh(
      new THREE.BoxGeometry(18, 3, 15),
      new THREE.MeshPhongMaterial({map: texturewoodBrown, wireframe:USE_WIREFRAME})
   );
   houseRise.position.y = 1.5;
   houseRise.receiveShadow = true;
   houseRise.castShadow = true;
   scene.add(houseRise);

   // HOUSE RISE CONCRETE
   houseRiseConcrete = new THREE.Mesh(
      new THREE.BoxGeometry(16, 0.01, 13),
      new THREE.MeshPhongMaterial({color: 0x98724b, wireframe:USE_WIREFRAME})
   );
   houseRiseConcrete.position.y = 3;
   houseRiseConcrete.receiveShadow = true;
   houseRiseConcrete.castShadow = true;
   scene.add(houseRiseConcrete);

   // HOUSE STAIRS BOTTOM
   houseStairsBottom = new THREE.Mesh(
      new THREE.BoxGeometry(5, 1, 3),
      new THREE.MeshPhongMaterial({map: texturewoodBrown, wireframe:USE_WIREFRAME})
   );
   houseStairsBottom.position.set(0, 0.5, -9);
   houseStairsBottom.receiveShadow = true;
   houseStairsBottom.castShadow = true;
   scene.add(houseStairsBottom);

   // HOUSE STAIRS CENTER
   houseStairsCenter = new THREE.Mesh(
      new THREE.BoxGeometry(5, 1, 2),
      new THREE.MeshPhongMaterial({map: texturewoodBrown, wireframe:USE_WIREFRAME})
   );
   houseStairsCenter.position.set(0, 1.5, -8.5);
   houseStairsCenter.receiveShadow = true;
   houseStairsCenter.castShadow = true;
   scene.add(houseStairsCenter);

   // HOUSE STAIRS TOP
   houseStairsTop = new THREE.Mesh(
      new THREE.BoxGeometry(5, 1, 1),
      new THREE.MeshPhongMaterial({map: texturewoodBrown, wireframe:USE_WIREFRAME})
   );
   houseStairsTop.position.set(0, 2.5, -8);
   houseStairsTop.receiveShadow = true;
   houseStairsTop.castShadow = true;
   scene.add(houseStairsTop);

   // HOUSE STAIRS BOTTOM CONCRETE
   houseStairsBottomConcrete = new THREE.Mesh(
      new THREE.BoxGeometry(4.5, 0.01, 0.85),
      new THREE.MeshPhongMaterial({color: 0x98724b, wireframe:USE_WIREFRAME})
   );
   houseStairsBottomConcrete.position.set(0, 1, -10);
   houseStairsBottomConcrete.receiveShadow = true;
   houseStairsBottomConcrete.castShadow = true;
   scene.add(houseStairsBottomConcrete);

   // HOUSE STAIRS CENTER CONCRETE
   houseStairsCenterConcrete = new THREE.Mesh(
      new THREE.BoxGeometry(4.5, 0.01, 0.85),
      new THREE.MeshPhongMaterial({color: 0x98724b, wireframe:USE_WIREFRAME})
   );
   houseStairsCenterConcrete.position.set(0, 2, -9);
   houseStairsCenterConcrete.receiveShadow = true;
   houseStairsCenterConcrete.castShadow = true;
   scene.add(houseStairsCenterConcrete);

   // HOUSE STAIRS TOP CONCRETE
   houseStairsTopConcrete = new THREE.Mesh(
      new THREE.BoxGeometry(4.5, 0.01, 0.85),
      new THREE.MeshPhongMaterial({color: 0x98724b, wireframe:USE_WIREFRAME})
   );
   houseStairsTopConcrete.position.set(0, 3, -8);
   houseStairsTopConcrete.receiveShadow = true;
   houseStairsTopConcrete.castShadow = true;
   scene.add(houseStairsTopConcrete);

   // HOUSE STAIRS WAY CONCRETE
   houseStairsWayConcrete = new THREE.Mesh(
      new THREE.BoxGeometry(4.5, 0.01, 4.75),
      new THREE.MeshPhongMaterial({color: 0x98724b, wireframe:USE_WIREFRAME})
   );
   houseStairsWayConcrete.position.set(0, 0, -12.625);
   houseStairsWayConcrete.receiveShadow = true;
   houseStairsWayConcrete.castShadow = true;
   scene.add(houseStairsWayConcrete);

   // COLUMN STAIRS LEFT
   columnStairsLeft = new THREE.Mesh(
      new THREE.CylinderGeometry(0.25, 0.5, 8, 12),
      new THREE.MeshLambertMaterial({color: 0x362d28, wireframe:USE_WIREFRAME})
   );
   columnStairsLeft.position.set(3.5, 7, -6.75);
   columnStairsLeft.receiveShadow = true;
   columnStairsLeft.castShadow = true;
   scene.add(columnStairsLeft);

   // COLUMN STAIRS RIGHT
   columnStairsRight = new THREE.Mesh(
      new THREE.CylinderGeometry(0.25, 0.5, 8, 12),
      new THREE.MeshLambertMaterial({color: 0x362d28, wireframe:USE_WIREFRAME})
   );
   columnStairsRight.position.set(-3.5, 7, -6.75);
   columnStairsRight.receiveShadow = true;
   columnStairsRight.castShadow = true;
   scene.add(columnStairsRight);

   // COLUMN END LEFT
   columnEndLeft = new THREE.Mesh(
      new THREE.CylinderGeometry(0.25, 0.5, 8, 12),
      new THREE.MeshLambertMaterial({color: 0x362d28, wireframe:USE_WIREFRAME})
   );
   columnEndLeft.position.set(8, 7, -6.75);
   columnEndLeft.receiveShadow = true;
   columnEndLeft.castShadow = true;
   scene.add(columnEndLeft);

   // COLUMN END RIGHT
   columnEndRight = new THREE.Mesh(
      new THREE.CylinderGeometry(0.25, 0.5, 8, 12),
      new THREE.MeshLambertMaterial({color: 0x362d28, wireframe:USE_WIREFRAME})
   );
   columnEndRight.position.set(-8, 7, -6.75);
   columnEndRight.receiveShadow = true;
   columnEndRight.castShadow = true;
   scene.add(columnEndRight);

   // COLUMN BACK LEFT
   columnBackLeft = new THREE.Mesh(
      new THREE.CylinderGeometry(0.25, 0.5, 8, 12),
      new THREE.MeshLambertMaterial({color: 0x362d28, wireframe:USE_WIREFRAME})
   );
   columnBackLeft.position.set(8, 7, 6.75);
   columnBackLeft.receiveShadow = true;
   columnBackLeft.castShadow = true;
   scene.add(columnBackLeft);

   // FENCE LEFT TOP
   fenceLeftTop = new THREE.Mesh(
      new THREE.BoxGeometry(5, 0.5, 0.25),
      new THREE.MeshPhongMaterial({map: texturewoodBrown, wireframe:USE_WIREFRAME})
   );
   fenceLeftTop.position.set(5.75, 5.5, -6.75);
   fenceLeftTop.receiveShadow = true;
   fenceLeftTop.castShadow = true;
   scene.add(fenceLeftTop);

   // FENCE LEFT CENTER
   fenceLeftCenter = new THREE.Mesh(
      new THREE.BoxGeometry(5, 0.35, 0.25),
      new THREE.MeshPhongMaterial({map: texturewoodBrown, wireframe:USE_WIREFRAME})
   );
   fenceLeftCenter.position.set(5.75, 4.5, -6.75);
   fenceLeftCenter.receiveShadow = true;
   fenceLeftCenter.castShadow = true;
   scene.add(fenceLeftCenter);

   // FENCE LEFT BOTTOM
   fenceLeftBottom = new THREE.Mesh(
      new THREE.BoxGeometry(5, 0.5, 0.25),
      new THREE.MeshPhongMaterial({map: texturewoodBrown, wireframe:USE_WIREFRAME})
   );
   fenceLeftBottom.position.set(5.75, 3.5, -6.75);
   fenceLeftBottom.receiveShadow = true;
   fenceLeftBottom.castShadow = true;
   scene.add(fenceLeftBottom);

   // FENCE RIGHT TOP
   fenceRightTop = new THREE.Mesh(
      new THREE.BoxGeometry(5, 0.5, 0.25),
      new THREE.MeshPhongMaterial({map: texturewoodBrown, wireframe:USE_WIREFRAME})
   );
   fenceRightTop.position.set(-5.75, 5.5, -6.75);
   fenceRightTop.receiveShadow = true;
   fenceRightTop.castShadow = true;
   scene.add(fenceRightTop);

   // FENCE RIGHT CENTER
   fenceRightCenter = new THREE.Mesh(
      new THREE.BoxGeometry(5, 0.35, 0.25),
      new THREE.MeshPhongMaterial({map: texturewoodBrown, wireframe:USE_WIREFRAME})
   );
   fenceRightCenter.position.set(-5.75, 4.5, -6.75);
   fenceRightCenter.receiveShadow = true;
   fenceRightCenter.castShadow = true;
   scene.add(fenceRightCenter);

   // FENCE RIGHT BOTTOM
   fenceRightBottom = new THREE.Mesh(
      new THREE.BoxGeometry(5, 0.5, 0.25),
      new THREE.MeshPhongMaterial({map: texturewoodBrown, wireframe:USE_WIREFRAME})
   );
   fenceRightBottom.position.set(-5.75, 3.5, -6.75);
   fenceRightBottom.receiveShadow = true;
   fenceRightBottom.castShadow = true;
   scene.add(fenceRightBottom);

   // FENCE SIDE LEFT TOP
   fenceSideLeftTop = new THREE.Mesh(
      new THREE.BoxGeometry(0.25, 0.5, 14),
      new THREE.MeshPhongMaterial({map: texturewoodBrown, wireframe:USE_WIREFRAME})
   );
   fenceSideLeftTop.position.set(8, 5.5, 0);
   fenceSideLeftTop.receiveShadow = true;
   fenceSideLeftTop.castShadow = true;
   scene.add(fenceSideLeftTop);

   // FENCE SIDE LEFT CENTER
   fenceSideLeftCenter = new THREE.Mesh(
      new THREE.BoxGeometry(0.25, 0.35, 14),
      new THREE.MeshPhongMaterial({map: texturewoodBrown, wireframe:USE_WIREFRAME})
   );
   fenceSideLeftCenter.position.set(8, 4.5, 0);
   fenceSideLeftCenter.receiveShadow = true;
   fenceSideLeftCenter.castShadow = true;
   scene.add(fenceSideLeftCenter);

   // FENCE SIDE LEFT BOTTOM
   fenceSideLeftBottom = new THREE.Mesh(
      new THREE.BoxGeometry(0.25, 0.5, 14),
      new THREE.MeshPhongMaterial({map: texturewoodBrown, wireframe:USE_WIREFRAME})
   );
   fenceSideLeftBottom.position.set(8, 3.5, 0);
   fenceSideLeftBottom.receiveShadow = true;
   fenceSideLeftBottom.castShadow = true;
   scene.add(fenceSideLeftBottom);

   // FENCE SIDE RIGHT TOP
   fenceSideRightTop = new THREE.Mesh(
      new THREE.BoxGeometry(0.25, 0.5, 3),
      new THREE.MeshPhongMaterial({map: texturewoodBrown, wireframe:USE_WIREFRAME})
   );
   fenceSideRightTop.position.set(-8, 5.5, -5);
   fenceSideRightTop.receiveShadow = true;
   fenceSideRightTop.castShadow = true;
   scene.add(fenceSideRightTop);

   // FENCE SIDE RIGHT CENTER
   fenceSideRightCenter = new THREE.Mesh(
      new THREE.BoxGeometry(0.25, 0.35, 3),
      new THREE.MeshPhongMaterial({map: texturewoodBrown, wireframe:USE_WIREFRAME})
   );
   fenceSideRightCenter.position.set(-8, 4.5, -5);
   fenceSideRightCenter.receiveShadow = true;
   fenceSideRightCenter.castShadow = true;
   scene.add(fenceSideRightCenter);

   // FENCE SIDE RIGHT BOTTOM
   fenceSideRightBottom = new THREE.Mesh(
      new THREE.BoxGeometry(0.25, 0.5, 3),
      new THREE.MeshPhongMaterial({map: texturewoodBrown, wireframe:USE_WIREFRAME})
   );
   fenceSideRightBottom.position.set(-8, 3.5, -5);
   fenceSideRightBottom.receiveShadow = true;
   fenceSideRightBottom.castShadow = true;
   scene.add(fenceSideRightBottom);

   // FENCE BACK LEFT TOP
   fenceBackLeftTop = new THREE.Mesh(
      new THREE.BoxGeometry(2.75, 0.5, 0.25),
      new THREE.MeshPhongMaterial({map: texturewoodBrown, wireframe:USE_WIREFRAME})
   );
   fenceBackLeftTop.position.set(6.3, 5.5, 6.75);
   fenceBackLeftTop.receiveShadow = true;
   fenceBackLeftTop.castShadow = true;
   scene.add(fenceBackLeftTop);

   // FENCE BACK LEFT CENTER
   fenceBackLeftCenter = new THREE.Mesh(
      new THREE.BoxGeometry(2.75, 0.35, 0.25),
      new THREE.MeshPhongMaterial({map: texturewoodBrown, wireframe:USE_WIREFRAME})
   );
   fenceBackLeftCenter.position.set(6.3, 4.5, 6.75);
   fenceBackLeftCenter.receiveShadow = true;
   fenceBackLeftCenter.castShadow = true;
   scene.add(fenceBackLeftCenter);

   // FENCE BACK LEFT BOTTOM
   fenceBackLeftBottom = new THREE.Mesh(
      new THREE.BoxGeometry(2.75, 0.5, 0.25),
      new THREE.MeshPhongMaterial({map: texturewoodBrown, wireframe:USE_WIREFRAME})
   );
   fenceBackLeftBottom.position.set(6.3, 3.5, 6.75);
   fenceBackLeftBottom.receiveShadow = true;
   fenceBackLeftBottom.castShadow = true;
   scene.add(fenceBackLeftBottom);

   // WALL FIRST FLOOR BACK
   wallFirstFloorBack = new THREE.Mesh(
      new THREE.BoxGeometry(14, 8.25, 0.25),
      new THREE.MeshPhongMaterial({color: 0x4a92c2, transparent: true, opacity: 0.3, wireframe:USE_WIREFRAME})
   );
   wallFirstFloorBack.position.set(-2, 7.1, 7.38);
   wallFirstFloorBack.receiveShadow = false;
   wallFirstFloorBack.castShadow = true;
   scene.add(wallFirstFloorBack);

   // WALL FIRST FLOOR BACK OPACITY
   wallFirstFloorBackOpacity = new THREE.Mesh(
      new THREE.BoxGeometry(14, 1, 0.28),
      new THREE.MeshPhongMaterial({color: 0x4a92c2, wireframe:USE_WIREFRAME})
   );
   wallFirstFloorBackOpacity.position.set(-2, 3.5, 7.38);
   wallFirstFloorBackOpacity.receiveShadow = false;
   wallFirstFloorBackOpacity.castShadow = true;
   scene.add(wallFirstFloorBackOpacity);

   // WALL FIRST FLOOR BACK OPACITY TOP
   wallFirstFloorBackOpacityTop = new THREE.Mesh(
      new THREE.BoxGeometry(14, 1, 0.28),
      new THREE.MeshPhongMaterial({color: 0x4a92c2, wireframe:USE_WIREFRAME})
   );
   wallFirstFloorBackOpacityTop.position.set(-2, 10.5, 7.38);
   wallFirstFloorBackOpacityTop.receiveShadow = false;
   wallFirstFloorBackOpacityTop.castShadow = true;
   scene.add(wallFirstFloorBackOpacityTop);

   // WALL FIRST FLOOR FRONT
   wallFirstFloorFront = new THREE.Mesh(
      new THREE.BoxGeometry(14, 8.25, 0.25),
      new THREE.MeshPhongMaterial({map: textureWoodBlue, wireframe:USE_WIREFRAME})
   );
   wallFirstFloorFront.position.set(-2, 7.1, -3.45);
   wallFirstFloorFront.receiveShadow = true;
   wallFirstFloorFront.castShadow = true;
   scene.add(wallFirstFloorFront);

   // WALL FIRST FLOOR LEFT
   wallFirstFloorLeft = new THREE.Mesh(
      new THREE.BoxGeometry(0.25, 8.25, 11.08),
      new THREE.MeshPhongMaterial({map: textureWoodBlue, wireframe:USE_WIREFRAME})
   );
   wallFirstFloorLeft.position.set(5, 7.1, 1.965);
   wallFirstFloorLeft.receiveShadow = true;
   wallFirstFloorLeft.castShadow = true;
   scene.add(wallFirstFloorLeft);

   // WALL FIRST FLOOR RIGHT
   wallFirstFloorRight = new THREE.Mesh(
      new THREE.BoxGeometry(0.25, 8.25, 11.08),
      new THREE.MeshPhongMaterial({color: 0x4a92c2, transparent: true, opacity: 0.3, wireframe:USE_WIREFRAME})
   );
   wallFirstFloorRight.position.set(-8.88, 7.1, 1.965);
   wallFirstFloorRight.receiveShadow = true;
   wallFirstFloorRight.castShadow = true;
   scene.add(wallFirstFloorRight);

   // WALL FIRST FLOOR RIGHT OPACITY
   wallFirstFloorRightOpacity = new THREE.Mesh(
      new THREE.BoxGeometry(0.28, 1, 11.08),
      new THREE.MeshPhongMaterial({color: 0x4a92c2, wireframe:USE_WIREFRAME})
   );
   wallFirstFloorRightOpacity.position.set(-8.88, 3.5, 1.965);
   wallFirstFloorRightOpacity.receiveShadow = true;
   wallFirstFloorRightOpacity.castShadow = true;
   scene.add(wallFirstFloorRightOpacity);

   // WALL FIRST FLOOR RIGHT OPACITY TOP
   wallFirstFloorRightOpacityTop = new THREE.Mesh(
      new THREE.BoxGeometry(0.28, 1, 11.08),
      new THREE.MeshPhongMaterial({color: 0x4a92c2, wireframe:USE_WIREFRAME})
   );
   wallFirstFloorRightOpacityTop.position.set(-8.88, 10.5, 1.965);
   wallFirstFloorRightOpacityTop.receiveShadow = true;
   wallFirstFloorRightOpacityTop.castShadow = true;
   scene.add(wallFirstFloorRightOpacityTop);

   // DOOR
   door = new THREE.Mesh(
      new THREE.BoxGeometry(6.5, 7, 0.45),
      new THREE.MeshPhongMaterial({color: 0xFFFFFF, wireframe:USE_WIREFRAME})
   );
   door.position.set(0, 6, -3.45);
   door.receiveShadow = true;
   door.castShadow = true;
   scene.add(door);

   // DOOR INNER
   doorInner = new THREE.Mesh(
      new THREE.BoxGeometry(5.5, 6, 0.65),
      new THREE.MeshPhongMaterial({color: 0x965752, wireframe:USE_WIREFRAME})
   );
   doorInner.position.set(0, 6, -3.45);
   doorInner.receiveShadow = true;
   doorInner.castShadow = true;
   scene.add(doorInner);

   // DOOR INNER LEFT
   doorInnerLeft = new THREE.Mesh(
      new THREE.BoxGeometry(2, 5.5, 0.45),
      new THREE.MeshStandardMaterial({color: 0x73423f, wireframe:USE_WIREFRAME})
   );
   doorInnerLeft.position.set(1.25, 6, -3.6);
   doorInnerLeft.receiveShadow = true;
   doorInnerLeft.castShadow = true;
   scene.add(doorInnerLeft);

   // DOOR INNER RIGHT
   doorInnerRight = new THREE.Mesh(
      new THREE.BoxGeometry(2, 5.5, 0.45),
      new THREE.MeshStandardMaterial({color: 0x73423f, wireframe:USE_WIREFRAME})
   );
   doorInnerRight.position.set(-1.25, 6, -3.6);
   doorInnerRight.receiveShadow = true;
   doorInnerRight.castShadow = true;
   scene.add(doorInnerRight);

   // DOOR INNER INNER LEFT
   doorInnerInnerLeft = new THREE.Mesh(
      new THREE.BoxGeometry(1.5, 4.95, 0.45),
      new THREE.MeshPhongMaterial({color: 0x965752, wireframe:USE_WIREFRAME})
   );
   doorInnerInnerLeft.position.set(1.25, 6, -3.7);
   doorInnerInnerLeft.receiveShadow = true;
   doorInnerInnerLeft.castShadow = true;
   scene.add(doorInnerInnerLeft);

   // DOOR INNER INNER RIGHT
   doorInnerInnerRight = new THREE.Mesh(
      new THREE.BoxGeometry(1.5, 4.95, 0.45),
      new THREE.MeshPhongMaterial({color: 0x965752, wireframe:USE_WIREFRAME})
   );
   doorInnerInnerRight.position.set(-1.25, 6, -3.7);
   doorInnerInnerRight.receiveShadow = true;
   doorInnerInnerRight.castShadow = true;
   scene.add(doorInnerInnerRight);

   // DOOR KNOB RIGHT
   doorKnobRight = new THREE.Mesh(
      new THREE.SphereGeometry(0.15, 12, 8),
      new THREE.MeshPhongMaterial({color: 0xd4af37, wireframe:USE_WIREFRAME})
   );
   doorKnobRight.position.set(-0.38, 6, -4.05);
   doorKnobRight.receiveShadow = true;
   doorKnobRight.castShadow = true;
   scene.add(doorKnobRight);

   // DOOR KNOB LEFT
   doorKnobLeft = new THREE.Mesh(
      new THREE.SphereGeometry(0.15, 12, 8),
      new THREE.MeshPhongMaterial({color: 0xd4af37, wireframe:USE_WIREFRAME})
   );
   doorKnobLeft.position.set(0.38, 6, -4.05);
   doorKnobLeft.receiveShadow = true;
   doorKnobLeft.castShadow = true;
   scene.add(doorKnobLeft);

   // TV
   tv = new THREE.Mesh(
      new THREE.BoxGeometry(0.25, 5, 6),
      new THREE.MeshPhongMaterial({color: 0x000000, wireframe:USE_WIREFRAME})
   );
   tv.position.set(4.5, 8.25, 1.965);
   tv.receiveShadow = true;
   tv.castShadow = true;
   scene.add(tv);

   // SCREEN
   tvScreen = new THREE.Mesh(
      new THREE.BoxGeometry(0.25, 4, 5),
      new THREE.MeshPhongMaterial({map: textureBarney, wireframe:USE_WIREFRAME})
   );
   tvScreen.position.set(4.25, 8.25, 1.965);
   tvScreen.receiveShadow = true;
   tvScreen.castShadow = true;
   scene.add(tvScreen);

   // TV HANG
   tvHang = new THREE.Mesh(
      new THREE.BoxGeometry(0.25, 1, 1),
      new THREE.MeshPhongMaterial({color: 0x000000, wireframe:USE_WIREFRAME})
   );
   tvHang.position.set(4.75, 8.25, 1.965);
   tvHang.receiveShadow = true;
   tvHang.castShadow = true;
   scene.add(tvHang);

   // CARPET
   carpet = new THREE.Mesh(
      new THREE.CylinderGeometry(4.5, 4.5, 0.05, 25),
      new THREE.MeshPhongMaterial({map: textureCarpet, wireframe:USE_WIREFRAME})
   );
   carpet.position.set(-2, 3, 2);
   carpet.receiveShadow = true;
   scene.add(carpet);

   // BED
   bed = new THREE.Mesh(
      new THREE.BoxGeometry(6, 1, 5),
      new THREE.MeshPhongMaterial({map: textureWoodWhite, wireframe:USE_WIREFRAME})
   );
   bed.position.set(-5, 3.5, 1.965);
   bed.receiveShadow = true;
   bed.castShadow = true;
   scene.add(bed);

   // BED WALL
   bedWall = new THREE.Mesh(
      new THREE.BoxGeometry(1, 3, 5),
      new THREE.MeshPhongMaterial({map: textureWoodWhite, wireframe:USE_WIREFRAME})
   );
   bedWall.position.set(-8.25, 4.5, 1.965);
   bedWall.receiveShadow = true;
   bedWall.castShadow = true;
   scene.add(bedWall);

   // BED BEDDINGS
   bedBeddings = new THREE.Mesh(
      new THREE.BoxGeometry(5.5, 0.5, 4.5),
      new THREE.MeshLambertMaterial({color: 0xFFFF00, wireframe:USE_WIREFRAME})
   );
   bedBeddings.position.set(-5, 4, 1.965);
   bedBeddings.receiveShadow = true;
   bedBeddings.castShadow = true;
   scene.add(bedBeddings);

   // PILLOW FRONT
   pillowFront = new THREE.Mesh(
      new THREE.BoxGeometry(1, 0.25, 1.75),
      new THREE.MeshLambertMaterial({color: 0xFFFFFF, wireframe:USE_WIREFRAME})
   );
   pillowFront.position.set(-7, 4.25, 1);
   pillowFront.receiveShadow = true;
   pillowFront.castShadow = true;
   scene.add(pillowFront);

   // PILLOW BACK
   pillowBack = new THREE.Mesh(
      new THREE.BoxGeometry(1, 0.25, 1.75),
      new THREE.MeshLambertMaterial({color: 0xFFFFFF, wireframe:USE_WIREFRAME})
   );
   pillowBack.position.set(-7, 4.25, 3.25);
   pillowBack.receiveShadow = true;
   pillowBack.castShadow = true;
   scene.add(pillowBack);

   // BED BLANKET
   bedBlanket = new THREE.Mesh(
      new THREE.BoxGeometry(4.5, 1.25, 5.25),
      new THREE.MeshLambertMaterial({map: textureBlanket, wireframe:USE_WIREFRAME})
   );
   bedBlanket.position.set(-4, 3.75, 1.965);
   bedBlanket.receiveShadow = true;
   bedBlanket.castShadow = true;
   scene.add(bedBlanket);
   
   // WALL FIRST FLOOR BACK
   wallFirstFloorBack = new THREE.Mesh(
      new THREE.BoxGeometry(14, 8.25, 0.25),
      new THREE.MeshPhongMaterial({color: 0x4a92c2, transparent: true, opacity: 0.5, wireframe:USE_WIREFRAME})
   );
   wallFirstFloorBack.position.set(-2, 7.1, 7.38);
   wallFirstFloorBack.receiveShadow = true;
   wallFirstFloorBack.castShadow = true;
   scene.add(wallFirstFloorBack);

   // DRESSER
   dresser = new THREE.Mesh(
      new THREE.BoxGeometry(2.5, 2, 6),
      new THREE.MeshPhongMaterial({color: 0x965752, wireframe:USE_WIREFRAME})
   );
   dresser.position.set(3.75, 4, 1.965);
   dresser.receiveShadow = true;
   dresser.castShadow = true;
   scene.add(dresser);

   // DRESSER INNER
   dresserInner = new THREE.Mesh(
      new THREE.BoxGeometry(0.75, 1.5, 5),
      new THREE.MeshStandardMaterial({color: 0x73423f, wireframe:USE_WIREFRAME})
   );
   dresserInner.position.set(2.75, 4, 1.95);
   dresserInner.receiveShadow = true;
   dresserInner.castShadow = true;
   scene.add(dresserInner);
   
   // DRESSER KNOB
   dresserKnob = new THREE.Mesh(
      new THREE.SphereGeometry(0.15, 12, 8),
      new THREE.MeshPhongMaterial({color: 0xd4af37, wireframe:USE_WIREFRAME})
   );
   dresserKnob.position.set(2.25, 4, 1.95);
   dresserKnob.receiveShadow = true;
   dresserKnob.castShadow = true;
   scene.add(dresserKnob);

   // ROOF
   roof = new THREE.Mesh(
      new THREE.BoxGeometry(18, 1, 18),
      new THREE.MeshPhongMaterial({map: textureWoodBlue, wireframe:USE_WIREFRAME})
   );
   roof.position.set(0, 11.5, 0);
   roof.receiveShadow = true;
   roof.castShadow = true;
   scene.add(roof);

   //================================== LIGHTS ===================================
   // AMBIENT LIGHT - OVERALL
   ambientLight = new THREE.AmbientLight(0xFFFFFF, 0.9);
   scene.add(ambientLight);

   // POINT LIGHT - LAMP
   pointLight = new THREE.PointLight(0xFFFFFF, 0.8, 18);
   pointLight.position.set(4, 8.25, 1.965);
   pointLight.castShadow = true;
   pointLight.shadow.camera.near = 0.1;
   pointLight.shadow.camera.far = 25;
   scene.add(pointLight);

   // DIRECTIONAL LIGHT - RIGHT
   let directionalLightRight = new THREE.DirectionalLight(0xFFFFFF, 0.5);
   directionalLightRight.position.set(-250, 0, 0);
   directionalLightRight.castShadow = true;
   scene.add(directionalLightRight);

   // DIRECTIONAL LIGHT - BACK
   let directionalLightBack = new THREE.DirectionalLight(0xFFFFFF, 0.5);
   directionalLightBack.position.set(0, 0, 250);
   directionalLightBack.castShadow = true;
   scene.add(directionalLightBack);

   // DIRECTIONAL LIGHT - FRONT
   let directionalLightFront = new THREE.DirectionalLight(0xFFFFFF, 0.3);
   directionalLightFront.position.set(0, 0, -250);
   directionalLightFront.castShadow = true;
   scene.add(directionalLightFront);

   animate();
}

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
