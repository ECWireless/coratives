import React from 'react';
import { Fade } from 'react-reveal'
import { colors } from '../../theme'

// Components
import {
    StyledContactForm,
    StyledInput,
    StyledLabel,
} from './components'
import Banner from '../../Banner'
import { Box3 } from '../../Boxes'
import { ButtonWhite } from '../../Buttons'
import { Container, Flex } from '../../Containers'

export function Contact({
		contactHeading,
		contactSubheading,
}) {
    return (
        <div style={{ background: colors.blueLight,  }}>
            <Box3 paddingTop={100} paddingBottom={75}>
                <Banner
                    heading={contactHeading}
                    subheading={contactSubheading}
                    textColor={colors.grey}
                    line1Color={colors.grey}
                    line2Color={colors.yellow}
                />
            </Box3>
            <Fade ssrFadeout>
                <Box3 paddingBottom={100}>
                    <Container>
                        <StyledContactForm action="">
                            <Flex justify={'space-between'} wrap={'true'}>
                                <Flex direction={'column'}>
                                    <Box3 marginBottom={10}>
                                        <StyledLabel bold uppercase color={colors.white} htmlFor='name'>Name:</StyledLabel>
                                    </Box3>
                                    <Box3 marginBottom={50}>
                                        <StyledInput id='name' type="text"/>
                                    </Box3>
                                </Flex>
                                <Flex direction={'column'}>
                                    <Box3 marginBottom={10}>
                                        <StyledLabel bold uppercase color={colors.white} htmlFor='email'>Email:</StyledLabel>
                                    </Box3>
                                    <Box3 marginBottom={50}>
                                        <StyledInput id='email' type="email"/>
                                    </Box3>
                                </Flex>
                            </Flex>
                            <Flex justify={'space-between'} wrap={'true'}>
                                <Flex direction={'column'}>
                                    <Box3 marginBottom={10}>
                                        <StyledLabel bold uppercase color={colors.white} htmlFor='phone'>Phone:</StyledLabel>
                                    </Box3>
                                    <Box3 marginBottom={50}>
                                        <StyledInput id='phone' type="tel"/>
                                    </Box3>
                                </Flex>
                                <Flex direction={'column'}>
                                    <Box3 marginBottom={10}>
                                        <StyledLabel bold uppercase color={colors.white} htmlFor='title'>Title:</StyledLabel>
                                    </Box3>
                                    <Box3 marginBottom={50}>
                                        <StyledInput id='title' type="text"/>
                                    </Box3>
                                </Flex>
                            </Flex>
                            <Flex direction={'column'}>
                                <Box3 marginBottom={10}>
                                    <StyledLabel bold uppercase color={colors.white} htmlFor='company'>Company:</StyledLabel>
                                </Box3>
                                <Box3 marginBottom={50}>
                                    <StyledInput full id='company' type="text"/>
                                </Box3>
                            </Flex>
                            <Box3 marginTop={25}>
                                <ButtonWhite>Submit</ButtonWhite>
                            </Box3>
                        </StyledContactForm>
                    </Container>
                </Box3>
            </Fade>
        </div>
    )
}
