/* Interactive globe — dotted earth highlighting Banda Aceh */
const { useEffect, useRef, useState } = React;

const ACEH = { lat: 5.5483, lon: 95.3238, name: "Banda Aceh", region: "Aceh, Indonesia" };

function latLonToVec3(lat, lon, radius) {
  const phi = (90 - lat) * Math.PI / 180;
  const theta = (lon + 180) * Math.PI / 180;
  const x = -radius * Math.sin(phi) * Math.cos(theta);
  const z = radius * Math.sin(phi) * Math.sin(theta);
  const y = radius * Math.cos(phi);
  return new THREE.Vector3(x, y, z);
}

// Sample a topology image and return Float32Array of dot positions on land
async function buildLandDots(imageUrl, radius, density = 110, threshold = 28) {
  const img = await new Promise((resolve, reject) => {
    const im = new Image();
    im.crossOrigin = "anonymous";
    im.onload = () => resolve(im);
    im.onerror = reject;
    im.src = imageUrl;
  });
  const cvs = document.createElement("canvas");
  cvs.width = img.width;
  cvs.height = img.height;
  const ctx = cvs.getContext("2d");
  ctx.drawImage(img, 0, 0);
  const { data, width, height } = ctx.getImageData(0, 0, img.width, img.height);

  const positions = [];
  const sizes = [];
  // Stepped grid in lat/lon — denser near equator already handled by uniform lat steps
  const latStep = 180 / density;
  const lonStep = 360 / (density * 2);
  for (let lat = -78; lat <= 82; lat += latStep) {
    // Skip Antarctica (mostly noise in topology) and far poles
    const cosLat = Math.cos((lat * Math.PI) / 180);
    const lonSteps = Math.max(8, Math.round((density * 2) * cosLat));
    for (let i = 0; i < lonSteps; i++) {
      const lon = -180 + (i / lonSteps) * 360;
      // Map lat/lon to pixel
      const px = Math.floor(((lon + 180) / 360) * width) % width;
      const py = Math.floor(((90 - lat) / 180) * height);
      const idx = (py * width + px) * 4;
      const brightness = data[idx]; // grayscale
      if (brightness > threshold) {
        const v = latLonToVec3(lat, lon, radius * 1.005);
        positions.push(v.x, v.y, v.z);
        sizes.push(1.0);
      }
    }
  }
  return new Float32Array(positions);
}

function Globe({ style = "earth", accent = "#f8941f", onLabel }) {
  const mountRef = useRef(null);
  const stateRef = useRef({});

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const W = mount.clientWidth;
    const H = mount.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(38, W / H, 0.1, 100);
    camera.position.set(0, 0, 8.2);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(W, H);
    mount.appendChild(renderer.domElement);
    renderer.domElement.className = "globe-canvas";

    const accentColor = new THREE.Color(accent);
    const landColor = new THREE.Color("#cdbfae");
    const dimLandColor = new THREE.Color("#5a5346");

    const globe = new THREE.Group();
    // Aceh centered
    globe.rotation.y = -(ACEH.lon + 180) * Math.PI / 180 + Math.PI;
    globe.rotation.x = ACEH.lat * Math.PI / 180 * 0.6;
    scene.add(globe);

    const RADIUS = 2.0;

    // --- Ocean sphere (deep dark) ---
    const coreGeo = new THREE.SphereGeometry(RADIUS * 0.995, 96, 96);
    const coreMat = new THREE.MeshBasicMaterial({ color: 0x14110b });
    const core = new THREE.Mesh(coreGeo, coreMat);
    globe.add(core);

    // --- Subtle longitude/latitude wires (very faint) ---
    const wireGeo = new THREE.SphereGeometry(RADIUS * 1.001, 36, 18);
    const wireMat = new THREE.LineBasicMaterial({ color: 0x4a4338, transparent: true, opacity: 0.18 });
    const wire = new THREE.LineSegments(new THREE.WireframeGeometry(wireGeo), wireMat);
    globe.add(wire);

    // --- Equator line (accent) ---
    const equatorGeo = new THREE.BufferGeometry();
    const equatorPts = [];
    const SEG = 128;
    for (let i = 0; i <= SEG; i++) {
      const t = (i / SEG) * Math.PI * 2;
      equatorPts.push(Math.cos(t) * RADIUS * 1.003, 0, Math.sin(t) * RADIUS * 1.003);
    }
    equatorGeo.setAttribute("position", new THREE.Float32BufferAttribute(equatorPts, 3));
    const equator = new THREE.Line(
      equatorGeo,
      new THREE.LineBasicMaterial({ color: accentColor, transparent: true, opacity: 0.35 })
    );
    globe.add(equator);

    // --- Continent dots (loaded async) ---
    const dotMat = new THREE.PointsMaterial({
      color: landColor,
      size: 0.028,
      transparent: true,
      opacity: 0.95,
      sizeAttenuation: true,
    });
    const dots = new THREE.Points(new THREE.BufferGeometry(), dotMat);
    globe.add(dots);

    buildLandDots("assets/earth-topology.png", RADIUS, 130, 22).then((pos) => {
      const g = new THREE.BufferGeometry();
      g.setAttribute("position", new THREE.BufferAttribute(pos, 3));
      dots.geometry.dispose();
      dots.geometry = g;
    }).catch((e) => console.warn("globe topology load failed", e));

    // --- Marker on Aceh ---
    const markerPos = latLonToVec3(ACEH.lat, ACEH.lon, RADIUS * 1.01);
    const markerGroup = new THREE.Group();
    markerGroup.position.copy(markerPos);
    markerGroup.lookAt(markerPos.clone().multiplyScalar(2));
    globe.add(markerGroup);

    const dotMarker = new THREE.Mesh(
      new THREE.SphereGeometry(0.04, 16, 16),
      new THREE.MeshBasicMaterial({ color: accentColor })
    );
    markerGroup.add(dotMarker);

    const ringMat1 = new THREE.MeshBasicMaterial({ color: accentColor, transparent: true, opacity: 0.7, side: THREE.DoubleSide });
    const ringMat2 = ringMat1.clone();
    const ringGeo = new THREE.RingGeometry(0.045, 0.075, 32);
    const ring1 = new THREE.Mesh(ringGeo, ringMat1);
    const ring2 = new THREE.Mesh(ringGeo, ringMat2);
    markerGroup.add(ring1);
    markerGroup.add(ring2);

    // (beam line removed — cleaner pin without the radial line)

    // --- Atmosphere halo ---
    const haloGeo = new THREE.SphereGeometry(RADIUS * 1.2, 64, 64);
    const haloMat = new THREE.ShaderMaterial({
      uniforms: { glowColor: { value: accentColor } },
      vertexShader: `
        varying vec3 vNormal;
        void main() {
          vNormal = normalize(normalMatrix * normal);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform vec3 glowColor;
        varying vec3 vNormal;
        void main() {
          float intensity = pow(0.6 - dot(vNormal, vec3(0,0,1.0)), 3.0);
          gl_FragColor = vec4(glowColor, 1.0) * intensity * 0.5;
        }
      `,
      blending: THREE.AdditiveBlending,
      side: THREE.BackSide,
      transparent: true,
    });
    const halo = new THREE.Mesh(haloGeo, haloMat);
    scene.add(halo);

    // --- Drag controls ---
    let isDragging = false;
    let lastX = 0, lastY = 0;
    let autoRotate = true;
    let autoRotateTimer = 0;

    const onDown = (e) => {
      isDragging = true;
      autoRotate = false;
      autoRotateTimer = 0;
      const p = e.touches ? e.touches[0] : e;
      lastX = p.clientX;
      lastY = p.clientY;
    };
    const onMove = (e) => {
      if (!isDragging) return;
      const p = e.touches ? e.touches[0] : e;
      const dx = p.clientX - lastX;
      const dy = p.clientY - lastY;
      globe.rotation.y += dx * 0.005;
      globe.rotation.x += dy * 0.005;
      globe.rotation.x = Math.max(-Math.PI / 2.2, Math.min(Math.PI / 2.2, globe.rotation.x));
      lastX = p.clientX;
      lastY = p.clientY;
    };
    const onUp = () => { isDragging = false; };

    renderer.domElement.addEventListener("mousedown", onDown);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
    renderer.domElement.addEventListener("touchstart", onDown, { passive: true });
    window.addEventListener("touchmove", onMove, { passive: true });
    window.addEventListener("touchend", onUp);

    // --- Animation loop ---
    let pulseT = 0;
    let frameId;
    let lastW = W;
    let lastH = H;
    const tmpVec = new THREE.Vector3();

    const animate = () => {
      frameId = requestAnimationFrame(animate);

      // Poll size for resize (more reliable than ResizeObserver in some webviews)
      const cw = mount.clientWidth;
      const ch = mount.clientHeight;
      if (cw > 0 && ch > 0 && (cw !== lastW || ch !== lastH)) {
        lastW = cw;
        lastH = ch;
        camera.aspect = cw / ch;
        camera.updateProjectionMatrix();
        renderer.setSize(cw, ch);
      }

      if (autoRotate) {
        // Slow rotation — about 1 full turn every ~90 seconds
        globe.rotation.y += 0.00045;
      } else {
        autoRotateTimer++;
        if (autoRotateTimer > 240) autoRotate = true;
      }

      // Slower pulse — calmer feel
      pulseT += 0.0045;
      const p1 = (pulseT % 1);
      const p2 = ((pulseT + 0.5) % 1);
      ring1.scale.setScalar(1 + p1 * 3.5);
      ring1.material.opacity = 0.7 * (1 - p1);
      ring2.scale.setScalar(1 + p2 * 3.5);
      ring2.material.opacity = 0.7 * (1 - p2);

      const worldPos = new THREE.Vector3();
      markerGroup.getWorldPosition(worldPos);
      const camDir = new THREE.Vector3();
      camera.getWorldPosition(camDir);
      const toCam = camDir.clone().sub(worldPos).normalize();
      const surfaceNormal = worldPos.clone().normalize();
      const facing = surfaceNormal.dot(toCam);

      tmpVec.copy(worldPos).project(camera);
      // Project to *viewport* coordinates using the live canvas rect so the
      // label tracks correctly even when the wrap is CSS-transformed.
      if (onLabel) {
        const rect = renderer.domElement.getBoundingClientRect();
        const sx = (tmpVec.x * 0.5 + 0.5) * rect.width + rect.left;
        const sy = (-tmpVec.y * 0.5 + 0.5) * rect.height + rect.top;
        onLabel({ x: sx, y: sy, visible: facing > 0.05 });
      }

      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      const w = mount.clientWidth;
      const h = mount.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    const ro = new ResizeObserver(handleResize);
    ro.observe(mount);

    stateRef.current = { scene, camera, renderer, globe, dots, dotMat, accent: accentColor, ring1, ring2, dotMarker, equator };

    return () => {
      cancelAnimationFrame(frameId);
      ro.disconnect();
      renderer.domElement.removeEventListener("mousedown", onDown);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
      renderer.domElement.removeEventListener("touchstart", onDown);
      window.removeEventListener("touchmove", onMove);
      window.removeEventListener("touchend", onUp);
      mount.removeChild(renderer.domElement);
      coreGeo.dispose();
      coreMat.dispose();
      wireGeo.dispose();
      wireMat.dispose();
      haloGeo.dispose();
      haloMat.dispose();
    };
  }, []);

  // Update accent color live
  useEffect(() => {
    const s = stateRef.current;
    if (!s.accent) return;
    const c = new THREE.Color(accent);
    s.accent.copy(c);
    if (s.dotMarker) s.dotMarker.material.color.copy(c);
    if (s.ring1) s.ring1.material.color.copy(c);
    if (s.ring2) s.ring2.material.color.copy(c);
    if (s.equator) s.equator.material.color.copy(c);
  }, [accent]);

  return (
    <div className="globe-wrap" ref={mountRef}></div>
  );
}

window.Globe = Globe;
