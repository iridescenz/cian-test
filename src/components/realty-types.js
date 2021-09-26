import { ReactComponent as FlatLogo } from './logos/flat-logo.svg'
import { ReactComponent as ApartLogo } from './logos/apart-logo.svg'
import { ReactComponent as HouseLogo } from './logos/house-logo.svg'
import { ReactComponent as RoomLogo } from './logos/room-logo.svg'

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
