import React from 'react'

export const SearchForm = ({ name, id, handleChange, handleSubmit, placeholder }) => {
  return (
    <div className='search-form'>
      <div className='seach-form item'>
        <label key={id}>
          <h2 className='header'>{name}</h2>
          <form className='form' onSubmit={handleSubmit}>
          </form>
          <div className='icon'></div>
          <input
            className='input'
            type='submit'
            name='query'
            value={placeholder}
            onChange={handleChange}
            placeholder={'Введите'}
          />
        </label>
      </div>
    </div>
  )
}
