import { ReactComponent as FlatLogo } from './logos/flat-logo.svg'
import { ReactComponent as ApartLogo } from './logos/apart-logo.svg'
import { ReactComponent as HouseLogo } from './logos/house-logo.svg'
import { ReactComponent as RoomLogo } from './logos/room-logo.svg'

export const realtyTypes = [
  {
    type: 'Квартира',
    id: 'FLAT',
    pic: <FlatLogo />,
  },
  {
    type: 'Апартаменты',
    id: 'APARTMENTS',
    pic: <ApartLogo />,
  },
  {
    type: 'Дом',
    id: 'COTTAGE',
    pic: <HouseLogo />,
  },
  {
    type: 'Комнаты',
    id: 'ROOM',
    pic: <RoomLogo />,
  },
]
