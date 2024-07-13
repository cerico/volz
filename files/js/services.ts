import { API_URL, RESOURCE_PATH } from "../constants"

const csrfTokenElement = document.querySelector('meta[name="csrf-token"]')
const csrfToken = csrfTokenElement ? csrfTokenElement.getAttribute('content') : null

function getHeaders(includeCsrf: boolean = false): HeadersInit {
  const headers: HeadersInit = {
    'Accept': 'application/json',
    credentials: 'include',
  }
  if (includeCsrf && csrfToken) {
    headers['X-CSRF-Token'] = csrfToken
  }
  return headers
}

async function handleResponse(response: Response) {
  if (!response.ok) {
    const errorMessage = await response.text()
    throw new Error(errorMessage || "An unknown error occurred")
  }
  return response.json()
}

export async function createResource(data: FormData) {
  console.log(data)
  const response = await fetch(`${API_URL}/${RESOURCE_PATH}/`, {
    method: "POST",
    body: data,
    headers: getHeaders(true),
  })
  return handleResponse(response)
}

export async function deleteResource(id: number) {
  const response = await fetch(`${API_URL}/${RESOURCE_PATH}/${id}`, {
    method: "DELETE",
    headers: getHeaders(true),
  })
  return handleResponse(response)
}

export async function editResource(id: number, data: FormData) {
  const response = await fetch(`${API_URL}/${RESOURCE_PATH}/${id}`, {
    method: "PUT",
    body: data,
    headers: getHeaders(true),
  })
  return handleResponse(response)
}

export async function fetchResource(id: number) {
  const response = await fetch(`${API_URL}/${RESOURCE_PATH}/${id}`)
  return handleResponse(response)
}

export async function fetchPageOfResources(page: number = 1) {
  const response = await fetch(`${API_URL}/${RESOURCE_PATH}?page=${page}`)
  return handleResponse(response)
}

export async function fetchResources() {
  const response = await fetch(`${API_URL}/${RESOURCE_PATH}`)
  console.log(response)
  return handleResponse(response)
}

export async function searchResources(searchTerm: string, page: number = 1) {
  const response = await fetch(`${API_URL}/search/${RESOURCE_PATH}?q=${searchTerm}&page=${page}`)
  return handleResponse(response)
}
