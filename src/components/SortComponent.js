import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { BiSort } from 'react-icons/bi'
import { setReducePercentage, setReducePayment, setIncreaseAmount} from '../redux/store/sortReducer'

const sortingValues = [
  { id: 234, value: 'Меньше процент', action: setReducePercentage },
  { id: 2345, value: 'Меньше взнос', action:  setReducePayment },
  { id: 23456, value: 'Больше кредит', action:  setIncreaseAmount},
]

export const SortComponent = () => {
  const [displayDropdown, setDisplayDropdown] = useState(false)
  const dispatch = useDispatch()
  return (
    <div className='dropdown'>
      <div className='dropbtn'>
        <button onClick={() => setDisplayDropdown(!displayDropdown)}>
          <BiSort
            style={{ fontSize: '30px' }}
          />
        </button>
      </div>
      <div className={'dropdown-content ' + (displayDropdown ? 'show' : 'hide')}>
        {sortingValues.map((sortingVal) => (
          <label key={sortingVal.id} onClick={() => dispatch(sortingVal.action())}>
            <input type='radio' name='sort' />
            <h2>{sortingVal.value}</h2>
          </label>
        ))}
      </div>
    </div>
  )
}
