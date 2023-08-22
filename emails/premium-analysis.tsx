import {
    Body,
    Button,
    Column,
    Container,
    Head,
    Heading,
    Hr,
    Html,
    Img,
    Link,
    Preview,
    Row,
    Section,
    Tailwind,
    Text,
} from '@react-email/components';
import * as React from 'react';

interface VercelInviteUserEmailProps {
    username?: string;
    userImage?: string;
    invitedByUsername?: string;
    invitedByEmail?: string;
    teamName?: string;
    teamImage?: string;
    inviteLink?: string;
    inviteFromIp?: string;
    inviteFromLocation?: string;
}

const baseUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : '';

export const VercelInviteUserEmail = ({
    username = 'zenorocha',
    userImage = `${baseUrl}/static/vercel-user.png`,
    invitedByUsername = 'bukinoshita',
    invitedByEmail = 'bukinoshita@example.com',
    teamName = 'My Project',
    teamImage = `${baseUrl}/static/vercel-team.png`,
    inviteLink = 'https://vercel.com/teams/invite/foo',
    inviteFromIp = '204.13.186.218',
    inviteFromLocation = 'São Paulo, Brazil',
}: VercelInviteUserEmailProps) => {
    const previewText = `Join ${invitedByUsername} on Vercel`;

    return (
        <Html>
            <Head />
            <Preview>{previewText}</Preview>
            <Tailwind>
                <Body className='bg-white my-auto mx-auto font-sans'>
                    <Container className='border border-solid border-[#f5f5ff] rounded my-[40px] mx-auto'>
                        <Section className='bg-[#d0d0ff] p-5'>
                            <Img src='https://shapeshifter-beta.vercel.app/assets/logo.svg' />
                        </Section>
                        <Section className=''>
                            {/* heading for top analyses */}
                            <Heading className='text-left text-2xl font-semibold px-4 py-4 text-[#1e1e51]'>
                                Here are your top analyses
                            </Heading>
                            {/* top analyses */}
                            <Row className='flex flex-row justify-between px-4'>
                                <Column
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'space-between',
                                        gap: '1rem',
                                    }}>
                                    <div
                                        className='cursor-pointer rounded bg-white p-4 shadow-lg justify-between'
                                        style={{
                                            display: 'flex',
                                            gap: '1.5rem',
                                        }}>
                                        <div className='h-16 w-[15%] rounded bg-[#f4f4ff] shadow-lg'>
                                            <img
                                                src={
                                                    'https://shapeshifter-beta.vercel.app/assets/logo.svg'
                                                }
                                                className='h-full w-full rounded object-scale-down'
                                                alt=''
                                            />
                                        </div>
                                        <div className='flex flex-col w-[70%]'>
                                            <h1 className='font-sans text-lg font-semibold text-gray-800 m-0'>
                                                {/* {job.title?.substring(
                                                                0,
                                                                30
                                                            )}
                                                            {job.title
                                                                ?.length! >
                                                                30 && '...'} */}
                                                Software Engineer
                                            </h1>
                                            <p className='text-sm font-semibold text-gray-500 m-0 mb-2'>
                                                {/* {job.company} */}
                                                ShapeShifter
                                            </p>
                                            <p className='text-gray-500 m-0'>
                                                {/* {job.description?.substring(
                                                        0,
                                                        60
                                                    )}
                                                    ... */}
                                                Lorem ipsum dolor sit amet
                                                consectetur, adipisicing elit.
                                                Eligendi similique expedita in
                                            </p>
                                        </div>
                                        <div className='score'>
                                            <div className='bg-[#2b2b82] flex justify-center items-center text-white p-3 rounded shadow-lg'>
                                                <p className='text-base font-semibold m-0'>
                                                    90%
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className='cursor-pointer rounded bg-white p-4 shadow-lg justify-between'
                                        style={{
                                            display: 'flex',
                                            gap: '1.5rem',
                                        }}>
                                        <div className='h-16 w-[15%] rounded bg-[#f4f4ff] shadow-lg'>
                                            <img
                                                src={
                                                    'https://shapeshifter-beta.vercel.app/assets/logo.svg'
                                                }
                                                className='h-full w-full rounded object-scale-down'
                                                alt=''
                                            />
                                        </div>
                                        <div className='flex flex-col w-[70%]'>
                                            <h1 className='font-sans text-lg font-semibold text-gray-800 m-0'>
                                                {/* {job.title?.substring(
                                                                0,
                                                                30
                                                            )}
                                                            {job.title
                                                                ?.length! >
                                                                30 && '...'} */}
                                                Software Engineer
                                            </h1>
                                            <p className='text-sm font-semibold text-gray-500 m-0 mb-2'>
                                                {/* {job.company} */}
                                                ShapeShifter
                                            </p>
                                            <p className='text-gray-500 m-0'>
                                                {/* {job.description?.substring(
                                                        0,
                                                        60
                                                    )}
                                                    ... */}
                                                Lorem ipsum dolor sit amet
                                                consectetur, adipisicing elit.
                                                Eligendi similique expedita in
                                            </p>
                                        </div>
                                        <div className='score'>
                                            <div className='bg-[#2b2b82] flex justify-center items-center text-white p-3 rounded shadow-lg'>
                                                <p className='text-base font-semibold m-0'>
                                                    90%
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </Column>
                            </Row>
                        </Section>
                        <Section className='text-center w-1/2 my-8'>
                            {/* show more analyses footer button */}
                            <Button
                                pX={10}
                                pY={10}
                                style={{
                                    backgroundColor: '#656ee8',
                                    borderRadius: '5px',
                                    color: '#fff',
                                    fontSize: '16px',
                                    fontWeight: 'bold',
                                    textDecoration: 'none',
                                    textAlign: 'center' as const,
                                    display: 'block',
                                    width: '100%',
                                }}
                                href='https://dashboard.stripe.com/login'>
                                See All Analyses
                            </Button>
                        </Section>
                        <Section className='footer px-4'>
                            <Text style={paragraph}>
                                — The ShapeShifter team
                            </Text>
                            <Hr style={hr} />
                            <Text style={footer}>
                                Stripe, 354 Oyster Point Blvd, South San
                                Francisco, CA 94080
                            </Text>
                        </Section>
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    );
};

export default VercelInviteUserEmail;

const footer = {
    color: '#8898aa',
    fontSize: '12px',
    lineHeight: '16px',
    padding: '0 16px',
};

const hr = {
    borderColor: '#e6ebf1',
    margin: '20px 0',
};

const paragraph = {
    color: '#525f7f',
    padding: '0 16px',
    fontSize: '16px',
    lineHeight: '24px',
    textAlign: 'left' as const,
};

