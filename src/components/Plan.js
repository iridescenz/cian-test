import React, {useState} from 'react'

export const Plan = () => {
  const options = [{id: 'all', value: 'Все'}, {id: 'new', value: 'Новостройка'}, {id: 'secondary', value: 'Вторичка'}] 
  const [plan, setPlan] = useState('all')
  const handleChange = (e) => setPlan(e.target.value)
  return (
    <div className='plan-block'>
    <h1>Программа</h1>
    <div className='plan items'>
            {options.map((el) => (
          <label key={el.id}>
            <input
              checked={el.id === plan}
              onChange={handleChange}
              value={el.id}
              type='radio'
              name='plan'
            />
            <h2>{el.value}</h2>
          </label>
        ))
        }
    </div>

    </div>
  )
}