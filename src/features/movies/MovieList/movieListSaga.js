import { takeEvery, call, put } from 'redux-saga/effects'
import { URLgenres } from '../../../common/assets/generalData/fetchedData'
import { setGenres } from './movieListSlice'

import { getMovieList, getGenres } from '../../getApiData'
import {
    setMovieList,
    fetchMovieList,
    fetchMovieListError,
} from './movieListSlice'

function* fetchMovieListHandler() {
    try {
        const fetchedGenres = yield call(getGenres, URLgenres)
        yield put(setGenres(fetchedGenres))

        const fetchedMovies = yield call(getMovieList)
        yield put(setMovieList(fetchedMovies))
    } catch (error) {
        yield put(fetchMovieListError())
    }
}

export function* watchFetchExample() {
    yield takeEvery(fetchMovieList.type, fetchMovieListHandler)
}
