import { createRoot } from 'react-dom/client'
import './styles.css'
import { App } from './App'

const pexel = (id) => `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260`
const images = [
  // Front
  {
    position: [0, 0, 1.5],
    rotation: [0, 0, 0],
    url:
      'https://lh3.googleusercontent.com/drive-viewer/AITFw-w8JqjYp16ssPlQzwiSdTGsJgRQkqSHzDUeg7QXqM7p8lUvqmmy0bhyWab9zs_mXhvUtTXSUxW0378Wfkr_MECPE4VL9A=s1600'
  },
  // Back
  {
    position: [-0.8, 0, -0.6],
    rotation: [0, 0, 0],
    url:
      'https://lh3.googleusercontent.com/drive-viewer/AITFw-w1QiZcdZ8UgbzaSaomC6gll9pu4toQs_QimmGCz142GbvhQd8bcyqXS0SWXMuBQfJoHIUoCUQO57O06CB2xuW7D-PifA=s1600'
  },
  {
    position: [0.8, 0, -0.6],
    rotation: [0, 0, 0],
    url: 'https://lh3.googleusercontent.com/drive-viewer/AITFw-zHjyiXbFqXPAXhCur-NI4JwRP9KL4K12GD_BB6TCy5Ch1iDXfdnM4TTYE6pia4jnQFQwZv3SrwB-37Ux-c_rIorSYg=s1600'
  },
  // Left
  {
    position: [-1.75, 0, 0.25],
    rotation: [0, Math.PI / 2.5, 0],
    url: 'https://lh3.googleusercontent.com/drive-viewer/AITFw-yWy9jmHmOBJz9j3T_D2QstY158UTLbA29yRtGW68WYURSE04-1bDE5af6eEdUoBO48hKB4CgoKXSqzXuuziQ=s1600'
  },
  {
    position: [-2.15, 0, 1.5],
    rotation: [0, Math.PI / 2.5, 0],
    url:
      'https://lh3.googleusercontent.com/drive-viewer/AITFw-zsjXDQLAuGwslvL-WVIsCnLxP93sY1ItaytwJLCU4zPdGpwC2a8u_qnKof8BTijmjY_bHCrAg9wimBwwe50I5kBPbaLQ=s1600'
  },
  {
    position: [-2, 0, 2.75],
    rotation: [0, Math.PI / 2.5, 0],
    url: 'https://lh3.googleusercontent.com/drive-viewer/AITFw-yi2nnb_E9KFofEhOyH-ag0tZZeU2vRMuSrKIzY9eXuyMM_PMv6g7y4QJvQ88NaH_dzOpYRA63MVBqPV9DEV_OJBUhQ=s1600'
  },
  // Right
  {
    position: [1.75, 0, 0.25],
    rotation: [0, -Math.PI / 2.5, 0],
    url:
      'https://lh3.googleusercontent.com/drive-viewer/AITFw-xvBjNC61IjL8Nw9j5Z6ZNLXHqBwJL7UOELaFHEFdq4IWBxYzmFautZ90Y1qLbO8Q8fMqX9KqOL9FBbGXKIuJdzzSkN_g=s1600'
  },
  {
    position: [2.15, 0, 1.5],
    rotation: [0, -Math.PI / 2.5, 0],
    url:
      'https://lh3.googleusercontent.com/drive-viewer/AITFw-xs_JFL-FI9s1DCmSvV83Ph6rYG5KgWY-L7UUg6n4j31A2Sgpc81vcOjavUKhX5pVuyREQd6fWDTPGXSEN0TkOQ0A8XIg=s1600'
  },
  {
    position: [2, 0, 2.75],
    rotation: [0, -Math.PI / 2.5, 0],
    url:
      'https://lh3.googleusercontent.com/drive-viewer/AITFw-zp7xLqAw2SvDNATMcay1V1FIKEaVpZd6x-1ISJo1ULN_W6fzRCSBvxC7mTfoOFhQJAQza8qaSru7lgCmaNqifip1JYBQ=s1600'
  }
]

createRoot(document.getElementById('root')).render(<App images={images} />)
