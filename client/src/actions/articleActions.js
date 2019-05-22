import { GET_ARTICLES, ADD_ARTICLE, DELETE_ARTICLE } from './types'

export const getArticles = category => {
    return {
        type: GET_ARTICLES
    }
}

export const addArticle = article => {
    return {
        type: ADD_ARTICLE
    }
}

export const delArticle = id => {
    return {
        type: DELETE_ARTICLE
    }
}