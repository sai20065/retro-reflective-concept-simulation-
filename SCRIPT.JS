// =====================
// THREE.JS SCENE
// =====================
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/400, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, 400);
document.getElementById("scene").appendChild(renderer.domElement);

// Cube = Raspberry Pi
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x00ffcc });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 3;

function animate() {
  requestAnimationFrame(animate);
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  renderer.render(scene, camera);
}
animate();

// =====================
// SIMULATION LOGIC
// =====================

function generateValues() {
  let ai = Math.random() * 100;
  let sensor = Math.random() * 100;
  let retro = Math.random() * 100;

  // Fusion
  let final = 0.5 * retro + 0.3 * ai + 0.2 * sensor;

  document.getElementById("ai").innerText = ai.toFixed(2);
  document.getElementById("sensor").innerText = sensor.toFixed(2);
  document.getElementById("retro").innerText = retro.toFixed(2);
  document.getElementById("final").innerText = final.toFixed(2);

  if (final > 50) {
    document.getElementById("status").innerText = "🟢 GOOD";
  } else {
    document.getElementById("status").innerText = "🔴 NEEDS MAINTENANCE";
  }
}

// Update every 2 sec
setInterval(generateValues, 2000);
