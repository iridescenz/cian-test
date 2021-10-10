import { ReactComponent as VtbLogo } from './logos/bank-vtb.svg'
import { ReactComponent as SovComLogo } from './logos/bank-sovkom.svg';
import { ReactComponent as RosBankLogo } from './logos/bank-domrf.svg';
import { ReactComponent as GpbLogo } from './logos/bank-gpb.svg';
import { ReactComponent as OtktytyeLogo } from './logos/bank-otkrytye.svg';
import { ReactComponent as PsbLogo } from './logos/bank-psb.svg';
import { ReactComponent as RaifLogo } from './logos/bank-raif.svg';


export const banksData = [
  {
    bankName: 'ВТБ',
    bankId: 'bank-vtb',
    bankLogo: <VtbLogo />
  },
  {
    bankName: 'СовкомБанк',
    bankId: 'bank-sovcom',
    bankLogo: <SovComLogo />
  },
  {
    bankName: 'Росбанк Дом',
    bankId: 'bank-domrf',
    bankLogo: <RosBankLogo />,
  },
  {
    bankName: 'Газпромбанк',
    bankId: 'bank-gpb',
    bankLogo: <GpbLogo />,
  },
  {
    bankName: 'Открытие',
    bankId: 'bank-otkrytye',
    bankLogo: <OtktytyeLogo />,
  },
  {
    bankName: 'ПСБ',
    bankId: 'bank-psb',
    bankLogo: <PsbLogo />,
  },
  {
    bankName: 'Райффайзенбанк',
    bankId: 'bank-raif',
    bankLogo: <RaifLogo />,
  },
]

