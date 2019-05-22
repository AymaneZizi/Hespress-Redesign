import { GET_ARTICLES, ADD_ARTICLE, DELETE_ARTICLE } from '../actions/types'
import fakeArticles from 'components/fakeArticles'

const initialState = {
    articles: fakeArticles
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_ARTICLES:
            return {
                ...state
            }

        case ADD_ARTICLE:
            return {
                ...state
            }

        case DELETE_ARTICLE:
            return {
                ...state
            }

        default:
            return state;
    }
}