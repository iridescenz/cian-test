import { ReactComponent as FlatLogo } from '../components/logos/flat-logo.svg'
import { ReactComponent as ApartLogo } from '../components/logos/apart-logo.svg'
import { ReactComponent as HouseLogo } from '../components/logos/house-logo.svg'
import { ReactComponent as RoomLogo } from '../components/logos/room-logo.svg'

export const realtyTypes = [
  {
    type: 'Квартира',
    id: 'flat',
    pic: <FlatLogo />,
  },
  {
    type: 'Апартаменты',
    id: 'apart',
    pic: <ApartLogo />,
  },
  {
    type: 'Дом',
    id: 'house',
    pic: <HouseLogo />,
  },
  {
    type: 'Комнаты',
    id: 'room',
    pic: <RoomLogo />,
  },
]
