import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import {DcPage, MarvelPage} from '../heroes'
import {LoginPage} from '../auth'
import {Navbar} from '../ui'

const AppRouter = () => {
  return (
    <>
        <Navbar></Navbar>
        <Routes>
            <Route path="marvel" element={<MarvelPage></MarvelPage>}></Route>
            <Route path="dc" element={<DcPage></DcPage>}></Route>
            <Route path="login" element={<LoginPage></LoginPage>}></Route>
            <Route path="/" element={<Navigate to="/marvel"></Navigate>}></Route>
        </Routes>
    </>
  )
}

export default AppRouter