import React, { Component } from 'react'
import { RouterProvider} from 'react-dom'
import router from './router'

export default class App extends Component {
  render() {
    return (
    
        <RouterProvider router={router} />
    )
  }
}
