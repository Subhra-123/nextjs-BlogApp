import { Fragment } from "react"
import MainNavigation from './main-navigation'
const layout=(props)=>{
<Fragment>
    <MainNavigation/>
    <main>{props.children}</main>
</Fragment>
}
export default layout