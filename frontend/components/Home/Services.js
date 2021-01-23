import { Fade } from 'react-reveal'
import styled from 'styled-components'
import { colors } from '../theme'

// Components
import Banner from '../Banner'

export function Services() {
    return (
        <>
            <Banner
                heading={'Our Services'}
                subheading={'Add a short description of your services here.'}
                line1Color={colors.grey}
                line2Color={colors.white}
            />
            <h1>Services Page Content</h1>
        </>
    )
}