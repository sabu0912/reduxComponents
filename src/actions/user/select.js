export const SELECT_USER = 'SELECT_USER'
export const SELECT_FOOTER = 'SELECT_FOOTER'

export const selectUser = (payload) => {
  return {
    type: SELECT_USER,
    payload
  }
}

export const actionFooter = (payload) => {
  return {
    type: SELECT_FOOTER,
    payload
  }
}
