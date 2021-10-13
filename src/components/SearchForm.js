import React from 'react'

export const SearchForm = ({
  name,
  onChange,
  placeholder,
}) => {
  const handleChange = (e) => {
    onChange(e.target.value)
}
  return (
    <div className='search-form'>
      <div className='seach-form items'>
        <h1 className='header'>{name}</h1>
        <form className='form' >
          <input
            className='input'
            type='text'
            name='query'
            value={placeholder}
            onChange={handleChange}
            placeholder={'Введите'}
          />
          <button className='button' type='submit'>
            ₽
          </button>
        </form>
      </div>
    </div>
  )
}
