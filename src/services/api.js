const API_URL = 'http://127.0.0.1:8000'

export async function register(username, password) {
  const response = await fetch(`${API_URL}/register/`, {
    method: 'POST',
    credentials: 'include',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password })
  })
  return response.json()
}

export async function login(username, password) {
  const response = await fetch(`${API_URL}/login/`, {
    method: 'POST',
    credentials: 'include',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password })
  })
  return response.json()
}

export async function criarAgendamento(dados) {
  const response = await fetch(`${API_URL}/appointment/`, {
    method: 'POST',
    credentials: 'include',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(dados)
  })
  return response.json()
}

export async function buscarAgendamento(username, dados) {
  const response = await fetch(`${API_URL}/appointment/`, {
    method: 'GET',
    credentials: 'include',
    headers: { 'Content-Type': 'application/json' },
  })
  return response.json()
}