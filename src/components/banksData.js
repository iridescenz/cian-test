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
    bankValue: 'bank-vtb',
    bankLogo: <VtbLogo />
  },
  {
    bankName: 'СовкомБанк',
    bankValue: 'bank-sovcom',
    bankLogo: <SovComLogo />
  },
  {
    bankName: 'Росбанк Дом',
    bankValue: 'bank-domrf',
    bankLogo: <RosBankLogo />,
  },
  {
    bankName: 'Газпромбанк',
    bankValue: 'bank-gpb',
    bankLogo: <GpbLogo />,
  },
  {
    bankName: 'Открытие',
    bankValue: 'bank-otkrytye',
    bankLogo: <OtktytyeLogo />,
  },
  {
    bankName: 'ПСБ',
    bankValue: 'bank-psb',
    bankLogo: <PsbLogo />,
  },
  {
    bankName: 'Райффайзенбанк',
    bankValue: 'bank-raif',
    bankLogo: <RaifLogo />,
  },
]

