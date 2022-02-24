
const authHeader = () => {
    const data = JSON.parse(localStorage.getItem('token'))
    if (data) {
        return {Authorization: 'Bearer ' + data}
    } else {
        return {}
    }
}

export default authHeader