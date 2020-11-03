
export default {
    BASE_DATA_URL : {
        INDEX : 'http://localhost:4200'
    },
    POSTS:{
        INDEX : '/posts',
        createPath: (id)=> `/posts/${id}`
    }
}