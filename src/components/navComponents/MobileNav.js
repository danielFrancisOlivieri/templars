import React from "react"
import { Grid } from 'semantic-ui-react'

const MobileNav = () => {
  // const rootPath = `${__PATH_PREFIX__}/`

return (

    <div>
<Grid centered columns={1}>
<Grid.Row href='../' >
  <p className="navItem" > Home </p>
  </Grid.Row>
  <Grid.Row href='../Work/' >
  <p className="navItem" > Projects </p>
  </Grid.Row>
  <Grid.Row href='../Writing/' >
  <p className="navItem" > Writing </p>
</Grid.Row>
<Grid.Row href='../about' >
<p className="navItem" > About </p>
</Grid.Row>

</Grid>


    </div>

)

}

export default MobileNav