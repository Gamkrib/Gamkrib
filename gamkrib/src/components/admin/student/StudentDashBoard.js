import React, { useState } from 'react'
import { StudentNavBar } from './studentNavBar'
import { GeneralNavbar } from '../../navbar/Navbar'
import { Avatar, Button, Flex, LoadingOverlay, Paper, Text } from '@mantine/core'
import { PreviewProps } from '../../home/propertyDetails/PreviewProps'
import { PageLayout } from '../../../utils/modules/PageLayout'




export const StudentDashBoard = () => {
    const [loading, setLoading] = useState(false);

    return (
        <>
            <GeneralNavbar />


            <Flex >
                <StudentNavBar />
                <Paper radius="md" withBorder p="lg" bg="var(--mantine-color-body)" h='30%'>
                    <Avatar
                        src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=255&q=80"
                        size={120}
                        radius={120}
                        mx="auto"
                    />
                    <Text ta="center" fz="lg" fw={500} mt="md">
                        Jane Fingerlicker
                    </Text>
                    <Text ta="center" c="dimmed" fz="sm">
                        jfingerlicker@me.io • Art director
                    </Text>

                    <Button variant="default" fullWidth mt="md">
                        Send message
                    </Button>
                </Paper>
                <Paper>
                    <Text sx={{ fontWeight: 'bold', fontSize: '2rem' }} ml='7rem'>
                        Details of your Active Booked room
                    </Text>
                    <Flex  >
                        <LoadingOverlay
                            visible={loading}
                            loaderProps={{ color: "green", type: "bars" }}
                            zIndex={1000}
                            overlayProps={{ radius: "sm", blur: 2 }}
                        />

                        <PreviewProps room={''} gap='' width='35rem' />

                        <Paper>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15282225.79979123!2d73.7250245393691!3d20.750301298393563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1587818542745!5m2!1sen!2sin" width="600" height="450" frameborder="0" style={{ border: 0 }} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                        </Paper>
                    </Flex>

                </Paper>
            </Flex>

        </>
    )
}
