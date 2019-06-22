import Vuex from 'vuex'
import firebase from 'firebase'
import db  from '../config/firebase'

const store = () => new Vuex.Store({
    state: {
        posts: [],
        post: ''
    },
    getters: {
        Posts(state) {
            return state.posts
        },
        
        
    },
    mutations: {
        setPost(state, payload) {
            state.posts.push(payload)
        },
        Post(state, payload) {
            this.state.post = payload
        },
        PushPost(state, payload) {
            this.state.posts.push(payload)
        }
        
        
    },
    
    actions: {
        FindPost({commit, state}, payload){
            for(let key in this.state.posts[0]) {
                if(this.state.posts[0][key].title === payload){
                    console.log(this.state.posts[0][key])
                    commit('Post',this.state.posts[0][key])
                }
            }
            
        },
        GetPost({commit}) {
            db.ref('posts').once('value')
            .then(data => {
                const post= []
                const obj = data.val()
                console.log(post)
                for(let key in obj) {
                    post.push({
                      title: obj[key].title,
                      body: obj[key].body
                    })
                  }
                commit('setPost', post)
            })
            .catch(error => {
                console.log(error)
            })
        },
        createPost({commit}, payload) {
            const post = {
                title: payload.title,
                body: payload.body
            }
            db.ref('posts').push(post)
            commit('PushPost', post)
            console.log('success')
        }
    },
    
})
export default store

