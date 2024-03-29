// ** Toolkit imports
import { configureStore } from '@reduxjs/toolkit'

// ** Reducers
import appkeys from 'src/store/apps/appkeys'
import calendar from 'src/store/apps/calendar'
import chat from 'src/store/apps/chat'
import email from 'src/store/apps/email'
import invoice from 'src/store/apps/invoice'
import permissions from 'src/store/apps/permissions'
import user from 'src/store/apps/user'

export const store = configureStore({
  reducer: {
    user,
    chat,
    email,
    invoice,
    calendar,
    permissions,
    appkeys,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false
    })
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
