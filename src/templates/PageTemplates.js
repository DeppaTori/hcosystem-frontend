import React from 'react'
import {MainMenu} from '../ui/menus'

const PageTemplates = ({children}) =>
<div className="page">
    <MainMenu />
    {children}
</div>

export default PageTemplates