import axios from 'axios'

export default axios.create({
    baseURL:'https://developers.zomato.com/api/v2.1',
    headers:{
        'user-key':'7e8fa06660c2fe80350b90be2c8bc53e'
    }
})