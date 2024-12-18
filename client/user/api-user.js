const create = async (user) => {
    try {
        let response = await fetch('https://comp229sec0022024-group-project2.onrender.com/api/users/', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                "Access-Control-Allow-Origin": "https://legendary-kelpie-11c09f.netlify.app"
            },
            body: JSON.stringify(user)
        })
        return await response.json()
    } catch (err) {
        console.log(err)
    }
}
const list = async (signal) => {
    try {
        let response = await fetch('https://comp229sec0022024-group-project2.onrender.com/api/users', {
            method: 'GET',
            signal: signal,
            headers: {
                "Access-Control-Allow-Origin": "https://legendary-kelpie-11c09f.netlify.app"
              },
            
        })
        return await response.json()
    } catch (err) {
        console.log(err)
    }
}
const read = async (params, credentials, signal) => {
    try {
        let response = await fetch('https://comp229sec0022024-group-project2.onrender.com/api/users/' + params.userId, {
            method: 'GET',
            signal: signal,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + credentials.t,
                "Access-Control-Allow-Origin": "https://legendary-kelpie-11c09f.netlify.app"
            }
        })
        return await response.json()
    } catch (err) {
        console.log(err)
    }
}
const update = async (params, credentials, user) => {
    try {
        let response = await fetch('https://comp229sec0022024-group-project2.onrender.com/api/users/' + params.userId, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + credentials.t,
                "Access-Control-Allow-Origin": "https://legendary-kelpie-11c09f.netlify.app"
            },
            body: JSON.stringify(user)
        })
        return await response.json()
    } catch (err) {
        console.log(err)
    }
}
const remove = async (params, credentials) => {
    try {
        let response = await fetch('https://comp229sec0022024-group-project2.onrender.com/api/users/' + params.userId, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + credentials.t,
                "Access-Control-Allow-Origin": "https://legendary-kelpie-11c09f.netlify.app"
            }
        })
        return await response.json()
    } catch (err) {
        console.log(err)
    }
}
export { create, list, read, update, remove }
