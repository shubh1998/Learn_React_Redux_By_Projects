import { makeStyles } from '@material-ui/core'
import React from 'react'
import CustomContainer from '../../UI/Container'
import CustomTypography from '../../UI/Typography'

const useStyle = makeStyles({
    styleNotFoundPage: {
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        marginTop: '40vh'
    }
})

const NotFoundPage = () => {
    const classes = useStyle()

    return (
        <CustomContainer>
            <CustomTypography variant="h4" label="404 - Page Not Found" className={classes.styleNotFoundPage}/>
        </CustomContainer>
    )
}

export default NotFoundPage
