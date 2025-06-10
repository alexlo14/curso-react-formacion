import axios from "axios"
import { call, put, takeLatest } from "redux-saga/effects"
import { fetchPosts, fetchPostsError, fetchPostsSuccess } from "../features/postsSlice"

const fetchPostsAxios = async () => {
    try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts")
        return response.data
    } catch (error) {
        console.log("Error fetching posts: " + error)
        return []
    }
}

function* fetchPostsHandler() {
    try {
        const posts = yield call(fetchPostsAxios);
        yield put(fetchPostsSuccess(posts));
    } catch (error) {
        yield put(fetchPostsError(error.toString()));
    }
}

export function* postsSaga() {
    yield takeLatest(fetchPosts.type, fetchPostsHandler)
}