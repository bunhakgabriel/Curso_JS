const axios = require('axios')

const loginUser = (email, password) => {
    return new Promise((resolve, reject) => {
        const error = true

        if(error) {
            reject(new Error('error in login'))
        }

        console.log('user logged!')
        resolve({ email })
    })
}

const getUserVideos = (email) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('getUserVideos')
            resolve(['video1', 'video2', 'video3'])
        }, 3000)
    })
}

const getVideoDetails = (title) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('getVideoDetails')
            resolve({title: 'video title'})
        }, 1500)
    })
}

//loginUser('felipe@gmail.com', '1234567')
//    .then((user) => getUserVideos('felipe@gmail.com', '1234567'))
//    .then((videos) => getVideoDetails(videos[0]))
//    .then(videoDetails => console.log({videoDetails}))
//    .catch((error) => console.log({error}))

//O código abaixo substitui o código das linhas 32,33,34,35,36
const displayUser = async () => {
    try{
        const user = await loginUser('felipe@gmail.com', '1234567') //Esse await vai basicamente colocar o 'resolve' do 'loginUser()' dentro da const user, esse await vai esperar a promise 'loginUser()' ser resolvida pra ir para a próxima linha do código
        const videos = await getUserVideos(user.email)
        const videoDetails = await getVideoDetails(videos[0])
    } catch (error) {
        console.log(`ERROR: ${error}`)
    }
}

displayUser()
