import React from 'react'
import Head from 'next/head'
import { Fade } from 'react-reveal'
import client from '../client'
import { colors } from '../components/theme'

// Components
import {
    StyledContactForm,
    StyledInput,
    StyledLabel,
} from '../components/Home/Contact/components'
import Banner from '../components/Banner'
import { Box3 } from '../components/Boxes'
import { ButtonWhite } from '../components/Buttons'
import { Container, Flex } from '../components/Containers'
import Snackbar from '../components/Snackbar'
import Spacer from '../components/Spacer'
import Spinner from '../components/Spinner'

export default function Contact({ contactProps }) {
    // Props
    const {
		contactHeading,
        contactSubheading,
    } = contactProps

    // State
    const [status, setStatus] = React.useState({
        submitted: false,
        submitting: false,
        info: { error: false, msg: null }
    })

    const [inputs, setInputs] = React.useState({
        name: '',
        email: '',
        phone: '',
        title: '',
        company: '',
    })

    const [snackbar, setSnackbar] = React.useState(false)

    const handleResponse = (status, msg) => {
        if (status === 200) {
            setStatus({
                submitted: true,
                submitting: false,
                info: { error: false, msg: msg }
            })
            setInputs({
                name: '',
                email: '',
                phone: '',
                title: '',
                company: '',
            })
            setSnackbar(true)
        } else {
            setStatus({
                info: { error: true, msg: msg }
            })
            setSnackbar(true)
        }
    }

    const handleOnChange = e => {
        e.persist()
        setInputs(prev => ({
            ...prev,
            [e.target.id]: e.target.value
        }))
        setStatus({
            submitted: false,
            submitting: false,
            info: { error: false, msg: null }
        })
    }

    const handleOnSubmit = async e => {
        e.preventDefault()
        setStatus(prevStatus => ({ ...prevStatus, submitting: true }))
        const res = await fetch('/api/hello', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(inputs)
        })
        console.log(inputs)
        const text = await res.text()
        handleResponse(res.status, text)
    }

    const onCloseSnackbar = () => {
        setSnackbar(false)
    }

    return (
        <div>
            <Head>
				<title>Contact Us | Coratives | United States</title>
			</Head>

            <main style={{ background: colors.grey }}>
                <Box3 paddingTop={100} paddingBottom={75}>
                    <Banner
                        heading={contactHeading}
                        subheading={contactSubheading}
                        textColor={colors.white}
                        line1Color={colors.yellow}
                        line2Color={colors.white}
                    />
                </Box3>
                <Container>
                    <Spacer size={'sm'} />
                    <Fade delay={400} ssrFadeout>
                        <StyledContactForm onSubmit={handleOnSubmit}>
                            <Flex justify={'space-between'} wrap={'true'}>
                                <Flex direction={'column'}>
                                    <Box3 marginBottom={10}>
                                        <StyledLabel bold uppercase color={colors.white} htmlFor='name'>Name:</StyledLabel>
                                    </Box3>
                                    <Box3 marginBottom={50}>
                                        <StyledInput
                                            id='name'
                                            type="text"
                                            onChange={handleOnChange}
                                            required
                                            value={inputs.name}
                                        />
                                    </Box3>
                                </Flex>
                                <Flex direction={'column'}>
                                    <Box3 marginBottom={10}>
                                        <StyledLabel bold uppercase color={colors.white} htmlFor='email'>Email:</StyledLabel>
                                    </Box3>
                                    <Box3 marginBottom={50}>
                                        <StyledInput
                                            id='email'
                                            type="email"
                                            onChange={handleOnChange}
                                            required
                                            value={inputs.email}
                                        />
                                    </Box3>
                                </Flex>
                            </Flex>
                            <Flex justify={'space-between'} wrap={'true'}>
                                <Flex direction={'column'}>
                                    <Box3 marginBottom={10}>
                                        <StyledLabel bold uppercase color={colors.white} htmlFor='phone'>Phone:</StyledLabel>
                                    </Box3>
                                    <Box3 marginBottom={50}>
                                        <StyledInput
                                            id='phone'
                                            type="tel"
                                            onChange={handleOnChange}
                                            required
                                            value={inputs.phone}
                                        />
                                    </Box3>
                                </Flex>
                                <Flex direction={'column'}>
                                    <Box3 marginBottom={10}>
                                        <StyledLabel bold uppercase color={colors.white} htmlFor='title'>Title:</StyledLabel>
                                    </Box3>
                                    <Box3 marginBottom={50}>
                                        <StyledInput
                                            id='title'
                                            type="text"
                                            onChange={handleOnChange}
                                            required
                                            value={inputs.title}
                                        />
                                    </Box3>
                                </Flex>
                            </Flex>
                            <Flex direction={'column'}>
                                <Box3 marginBottom={10}>
                                    <StyledLabel bold uppercase color={colors.white} htmlFor='company'>Company:</StyledLabel>
                                </Box3>
                                <Box3 marginBottom={50}>
                                    <StyledInput
                                        full
                                        id='company'
                                        type="text"
                                        onChange={handleOnChange}
                                        required
                                        value={inputs.company}
                                    />
                                </Box3>
                            </Flex>
                            <Box3 marginTop={25}>
                                <ButtonWhite type="submit" disabled={status.submitting}>
                                    {!status.submitting
                                        ? !status.submitted
                                        ? 'Submit'
                                        : 'Submitted'
                                        : <Spinner color={colors.grey} />
                                    }
                                </ButtonWhite>
                            </Box3>
                        </StyledContactForm>
                    </Fade>
                    <Spacer size={'lg'} />
                </Container>
            </main>
            { snackbar && <Snackbar success={!status.info.error} onCloseSnackbar={onCloseSnackbar} /> }
        </div>
    )
}

export async function getStaticProps() {
	const contactProps = await client.fetch(`*[_type == "contact" && slug.current == "v1"][0] {
		contactHeading,
        contactSubheading,
	}`)
	return {
	  props: { contactProps },
	}
}
