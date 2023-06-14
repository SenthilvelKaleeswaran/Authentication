const url = 'http://restapi.adequateshop.com/api/'

export const login = async (payload) => {
  try {
    const response = await fetch(`${url}authaccount/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })
    const data = await response.json()
    console.log(data)
    return data
  } catch (error) {
    console.error('Error generating product:', error)
    throw error
  }
}

export const signup = async (payload) => {
    try {

        const response = await fetch (`${url}users`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),

        })

        const data = await response.json()
        console.log(data)

        
    } catch (error) {

        console.error('Error generating product:', error)
        throw error
    
        
    }
} 

