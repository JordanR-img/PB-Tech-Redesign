import React from 'react'

export default function home() {
    const form = document.querySelector('form')
    const username = document.querySelector('#username')
    const password = document.querySelector('#password')
    const display = document.querySelector('.error')
    form.addEventListener('submit', async (e) => {
       e.preventDefault()
       display.textContent = ''
       try {
         const res = await fetch('/api/auth/register', {
         method: 'POST',
          body: JSON.stringify({ username: username.value, password: password.value }),
         headers: { 'Content-Type': 'application/json' }
         })
         const data = await res.json()
         if(res.status === 400 || res.status === 401){
          return display.textContent = `${data.message}. ${data.error ? data.error : ''}`
         }
         data.role === "admin" ? window.location.assign('/admin') : window.location.assign('/basic')
          } catch (err) {
            console.log(err.message)
          }
        })
  return (
    <div>  <h1>Home Page</h1>
    <a href="/register"> Register</a> <br />
    <a href="/login">Login</a></div>
  )
}
