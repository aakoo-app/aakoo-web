// ** Redux Imports
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { Dispatch } from 'redux'

// ** Axios Imports

// interface DataParams {
//     q: string
//     role: string
//     status: string
//     currentPlan: string
// }

interface Redux {
    getState: any
    dispatch: Dispatch<any>
}

export const fetchData = createAsyncThunk('appKeys/fetchData', async () => {

    try {
        console.log('fetchData>>>')
        const response = await fetch('http://localhost:3001/key', {
            headers: {
                'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjAxOGU4OGJmLTYyODQtNzE1Yy1iMWM2LTVmNWJlNTY2Nzk5ZSIsImVtYWlsIjoidGVzdDFAZW1haWwuY29tIiwiaWF0IjoxNzExNjkzMDg1LCJleHAiOjE3MTIyOTc4ODV9.MYTVss8k28uXy5Z0utK6VXyPS4YHiJihKWMMJm_xCQM`
            }
        }).then((response) => response.json())

        console.log('response', response)
        return response
    } catch (error) {
        console.error(error)
    }

})

export const addApplication = createAsyncThunk(
    'appKeys/addApplication',
    async (data: { [key: string]: number | string }, { getState, dispatch }: Redux) => {
        const response = await fetch('http://localhost:3001/key', {
            body: JSON.stringify(data),
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjAxOGU4OGJmLTYyODQtNzE1Yy1iMWM2LTVmNWJlNTY2Nzk5ZSIsImVtYWlsIjoidGVzdDFAZW1haWwuY29tIiwiaWF0IjoxNzExNjkzMDg1LCJleHAiOjE3MTIyOTc4ODV9.MYTVss8k28uXy5Z0utK6VXyPS4YHiJihKWMMJm_xCQM`
            }
        }).then((response) => response.json())
        //   dispatch(fetchData(getState().user.params))
        dispatch(fetchData())
        return response
    }
)

export const appAppKeysSlice = createSlice({
    name: 'appKeys',
    initialState: {
        data: [],
        total: 1,
        params: {},
        allData: []
    },
    reducers: {},
    extraReducers: builder => {
        builder.addCase(fetchData.fulfilled, (state, action) => {
            state.data = action.payload
            // state.total = action.payload.total
            // state.params = action.payload.params
            // state.allData = action.payload.allData
        })
    }
})

export default appAppKeysSlice.reducer
