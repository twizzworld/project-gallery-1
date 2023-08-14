import * as THREE from 'three'
import { useEffect, useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useCursor, MeshReflectorMaterial, Image, Text, Environment } from '@react-three/drei'
import { useRoute, useLocation } from 'wouter'
import { easing } from 'maath'
import getUuid from 'uuid-by-string'

const GOLDENRATIO = 1.61803398875

export const App = ({ images }) => (
  <Canvas dpr={[1, 1.5]} camera={{ fov: 70, position: [0, 2, 15] }}>
    <color attach="background" args={['#191920']} />
    <fog attach="fog" args={['#191920', 0, 15]} />
    <group position={[0, -0.5, 0]}>
      <Frames images={images} />
      <mesh rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[50, 50]} />
        <MeshReflectorMaterial
          blur={[300, 100]}
          resolution={2048}
          mixBlur={1}
          mixStrength={80}
          roughness={1}
          depthScale={1.2}
          minDepthThreshold={0.4}
          maxDepthThreshold={1.4}
          color="#050505"
          metalness={0.5}
        />
      </mesh>
    </group>
    <Environment preset="city" />
  </Canvas>
)

function Frames({ images, q = new THREE.Quaternion(), p = new THREE.Vector3() }) {
  const ref = useRef()
  const clicked = useRef()
  const [, params] = useRoute('/item/:id')
  const [, setLocation] = useLocation()
  useEffect(() => {
    clicked.current = ref.current.getObjectByName(params?.id)
    if (clicked.current) {
      clicked.current.parent.updateWorldMatrix(true, true)
      clicked.current.parent.localToWorld(p.set(0, GOLDENRATIO / 2, 1.25))
      clicked.current.parent.getWorldQuaternion(q)
    } else {
      p.set(0, 0, 5.5)
      q.identity()
    }
  })
  useFrame((state, dt) => {
    easing.damp3(state.camera.position, p, 0.4, dt)
    easing.dampQ(state.camera.quaternion, q, 0.4, dt)
  })
  return (
    <group
      ref={ref}
      onClick={(e) => (e.stopPropagation(), setLocation(clicked.current === e.object ? '/' : '/item/' + e.object.name))}
      onPointerMissed={() => setLocation('/')}>
      {images.map((props) => <Frame key={props.url} {...props} /> /* prettier-ignore */)}
    </group>
  )
}

function Frame({ url, c = new THREE.Color(), ...props }) {
  const image = useRef()
  const frame = useRef()
  const [, params] = useRoute('/item/:id')
  const [hovered, hover] = useState(false)
  const [rnd] = useState(() => Math.random())
  let name

  if (
    url ==
    'https://lh3.googleusercontent.com/drive-viewer/AITFw-w1QiZcdZ8UgbzaSaomC6gll9pu4toQs_QimmGCz142GbvhQd8bcyqXS0SWXMuBQfJoHIUoCUQO57O06CB2xuW7D-PifA=s1600'
  ) {
    name = 'lvlx-ai'
  } else if (
    url ==
    'https://lh3.googleusercontent.com/drive-viewer/AITFw-zHjyiXbFqXPAXhCur-NI4JwRP9KL4K12GD_BB6TCy5Ch1iDXfdnM4TTYE6pia4jnQFQwZv3SrwB-37Ux-c_rIorSYg=s1600'
  ) {
    name = 'banana-finance'
  } else if (
    url ==
    'https://lh3.googleusercontent.com/drive-viewer/AITFw-w8JqjYp16ssPlQzwiSdTGsJgRQkqSHzDUeg7QXqM7p8lUvqmmy0bhyWab9zs_mXhvUtTXSUxW0378Wfkr_MECPE4VL9A=s1600'
  ) {
    name = 'genesis-ai'
  } else if (
    url == 'https://lh3.googleusercontent.com/drive-viewer/AITFw-yWy9jmHmOBJz9j3T_D2QstY158UTLbA29yRtGW68WYURSE04-1bDE5af6eEdUoBO48hKB4CgoKXSqzXuuziQ=s1600'
  ) {
    name = 'blackbox-ai'
  } else if (
    url ==
    'https://lh3.googleusercontent.com/drive-viewer/AITFw-zsjXDQLAuGwslvL-WVIsCnLxP93sY1ItaytwJLCU4zPdGpwC2a8u_qnKof8BTijmjY_bHCrAg9wimBwwe50I5kBPbaLQ=s1600'
  ) {
    name = 'gam3'
  } else if (
    url ==
    'https://lh3.googleusercontent.com/drive-viewer/AITFw-yi2nnb_E9KFofEhOyH-ag0tZZeU2vRMuSrKIzY9eXuyMM_PMv6g7y4QJvQ88NaH_dzOpYRA63MVBqPV9DEV_OJBUhQ=s1600'
  ) {
    name = 'idxntity'
  } else if (
    url ==
    'https://lh3.googleusercontent.com/drive-viewer/AITFw-xvBjNC61IjL8Nw9j5Z6ZNLXHqBwJL7UOELaFHEFdq4IWBxYzmFautZ90Y1qLbO8Q8fMqX9KqOL9FBbGXKIuJdzzSkN_g=s1600'
  ) {
    name = 'chxinalytics'
  } else if (
    url ==
    'https://lh3.googleusercontent.com/drive-viewer/AITFw-xs_JFL-FI9s1DCmSvV83Ph6rYG5KgWY-L7UUg6n4j31A2Sgpc81vcOjavUKhX5pVuyREQd6fWDTPGXSEN0TkOQ0A8XIg=s1600'
  ) {
    name = 'lullabai'
  } else if (
    url ==
    'https://lh3.googleusercontent.com/drive-viewer/AITFw-zp7xLqAw2SvDNATMcay1V1FIKEaVpZd6x-1ISJo1ULN_W6fzRCSBvxC7mTfoOFhQJAQza8qaSru7lgCmaNqifip1JYBQ=s1600'
  ) {
    name = 'dock-ai'
  }
  const isActive = params?.id === name
  useCursor(hovered)
  useFrame((state, dt) => {
    image.current.material.zoom = 2 + Math.sin(rnd * 10000 + state.clock.elapsedTime / 3) / 2
    easing.damp3(image.current.scale, [0.85 * (!isActive && hovered ? 0.85 : 1), 0.9 * (!isActive && hovered ? 0.905 : 1), 1], 0.1, dt)
    easing.dampC(frame.current.material.color, hovered ? 'orange' : 'white', 0.1, dt)
  })
  return (
    <group {...props}>
      <mesh
        name={name}
        onPointerOver={(e) => (e.stopPropagation(), hover(true))}
        onPointerOut={() => hover(false)}
        scale={[1, GOLDENRATIO, 0.05]}
        position={[0, GOLDENRATIO / 2, 0]}>
        <boxGeometry />
        <meshStandardMaterial color="#151515" metalness={0.5} roughness={0.5} envMapIntensity={2} />
        <mesh ref={frame} raycast={() => null} scale={[0.9, 0.93, 0.9]} position={[0, 0, 0.2]}>
          <boxGeometry />
          <meshBasicMaterial toneMapped={false} fog={false} />
        </mesh>
        <Image raycast={() => null} ref={image} position={[0, 0, 0.7]} url={url} />
      </mesh>
      <Text
        maxWidth={0.1}
        anchorX="left"
        anchorY="top"
        position={[0.55, GOLDENRATIO, 0]}
        fontSize={0.025}
        onClick={() => (window.location.href = `https://${name}.vercel.app`)}>
        {name.split('-').join(' ')}
      </Text>
    </group>
  )
}
