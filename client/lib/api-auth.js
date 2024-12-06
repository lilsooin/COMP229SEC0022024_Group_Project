// const BASE_URL = https://comp229sec0022024-group-project-3.onrender.com

const signin = async (user) => {
    try {
        let response = await fetch('/auth/signin/', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify(user)
        })
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        return await response.json()
    } catch (err) {
        console.log("sign in error >> " + err.body)
        console.log(err)
    }
}
const signout = async () => {
    try {
        let response = await fetch('/auth/signout/', { method: 'GET' })
        return await response.json()
    } catch (err) {
        console.log(err)
    }
}
export { signin, signout }

