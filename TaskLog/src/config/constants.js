import {
  faBarsProgress,
  faCheckDouble,
  faEye,
  faPowerOff,
  faSpinner
} from '@fortawesome/free-solid-svg-icons'

export const SERVICE_TOKEN_NAME = 'serviceToken'
export const REACT_APP_BACKEND_URL = 'http://localhost:8090'

export const backgroundImageStyle = {
  backgroundImage: 'url(/japanese.jpg)',
  backgroundSize: 'cover',
  height: '100vh'
}

export const priorities = {
  TOP: { index: 0, name: 'Top', color: 'bg-red-500' },
  MIDDLE: { index: 1, name: 'Middle', color: 'bg-yellow-400' },
  LOW: { index: 2, name: 'Low', color: 'bg-green-400' }
}

export const statusOptions = {
  SHOWALL: 'Show All Tasks',
  CANCELED: 'Canceled',
  PENDING: 'Pending',
  IN_PROGRESS: 'In Progress',
  COMPLETED: 'Completed'
}
export const animations = {
  beat: 'beat',
  spin: 'spin',
  bounce: 'bounce'
}

const statusItemsConfig = [
  {
    title: statusOptions.SHOWALL,
    icon: faEye,
    options: 'mb-2',
    style: { color: '#171716' },
    animations: { beat: false, spin: false, bounce: false }
  },
  {
    title: statusOptions.CANCELED,
    icon: faPowerOff,
    options: 'text-red-600 mb-2',
    style: {},
    animations: { beat: true, spin: false, bounce: false }
  },
  {
    title: statusOptions.PENDING,
    icon: faSpinner,
    options: 'mb-2',
    style: {},
    animations: { beat: false, spin: true, bounce: false }
  },
  {
    title: statusOptions.IN_PROGRESS,
    icon: faBarsProgress,
    options: 'mb-2',
    style: { color: '#e2c432' },
    animations: { beat: false, spin: false, bounce: false }
  },
  {
    title: statusOptions.COMPLETED,
    icon: faCheckDouble,
    options: 'mb-2',
    style: { color: '#63E6BE' },
    animations: { beat: false, spin: false, bounce: true }
  }
]

export default statusItemsConfig
