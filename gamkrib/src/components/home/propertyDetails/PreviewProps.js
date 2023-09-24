import { Button, Container, Group, Image, Paper, SimpleGrid, Text } from '@mantine/core';
import {
    IconUserPlus,
    IconDiscount2,
    IconReceipt2,
    IconCoin,
    IconArrowUpRight,
    IconArrowDownRight,
} from '@tabler/icons-react';
import classes from './modals.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper';
import { FcHome } from 'react-icons/fc';
import { GrMoney } from 'react-icons/gr';
import { SiHomeassistantcommunitystore } from 'react-icons/si';
import { BigButton, GreenBtn } from '../../../customComponetns/BigButton';


const icons = {
    user: IconUserPlus,
    discount: IconDiscount2,
    receipt: IconReceipt2,
    coin: IconCoin,
};



export const PreviewProps = ({ room }) => {
    const data = [
        { title: 'Revenue', icon: 'receipt', value: '13,456', diff: 34 },
        { title: 'Profit', icon: 'coin', value: '4,145', diff: -13 },
        { title: 'Coupons usage', icon: 'discount', value: '745', diff: 18 },
        { title: 'New customers', icon: 'user', value: '188', diff: -30 },
    ]

    const details = room?.images.map((pic) =>
        <SwiperSlide>
            <Image src={pic} height='30rem' />
        </SwiperSlide>
    )


    return (
        <Container size='xl' color='blue' display="flex" sx={{ gap: '2rem', flexWrap: 'wrap' }}>
            <Paper withBorder sx={{ width: '40rem', height: '30rem' }}>
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                    {details}
                </Swiper>
            </Paper>
            <Paper withBorder sx={{ width: '20rem' }}>
                <Paper withBorder p="md" radius="md" >
                    <Group align="flex-end" gap="xs" my={25}>
                        <GrMoney size="2rem" stroke={1.5} />
                        <Text size='2rem' c={'teal'} className={classes.diff} fw={500}>GHc {room?.price}</Text>
                    </Group>
                    <Group justify="space-between">
                        <FcHome className={classes.icon} size="1.4rem" stroke={1.5} />
                        <Text size="xl" className={classes.title} >
                            {room?.property_name}
                        </Text>
                    </Group>
                    <Group>
                        <GreenBtn whileTap={{ scale: 0.9 }} >
                            Book Now
                        </GreenBtn>
                    </Group>
                </Paper>
                <Paper withBorder p="md" radius="md" >

                    <Group justify="space-between">
                        <SiHomeassistantcommunitystore className={classes.icon} size="1.4rem" stroke={1.5} />
                        <Text size="xl" className={classes.title} >
                            Property Description
                        </Text>
                    </Group>
                    <Group justify="space-between">

                        <Text size="md" fw='bold' >
                            {room?.description}
                        </Text>
                    </Group>
                </Paper>
                <Paper withBorder p="md" radius="md" >

                    <Group justify="space-between">
                        <Text >
                            <span style={{ fontWeight: 'bold' }}>Gender: </span> <span>{room?.gender}</span>
                        </Text>
                        <Text >
                            <span style={{ fontWeight: 'bold' }}>Property Type: </span> <span>{room?.property_type}</span>
                        </Text>
                    </Group>
                    <Group justify="space-between">
                        <Text >
                            <span style={{ fontWeight: 'bold' }}>Region: </span> <span>{room?.region}</span>
                        </Text>
                        <Text >
                            <span style={{ fontWeight: 'bold' }}>City: </span> <span>{room?.city}</span>
                        </Text>
                    </Group>
                    <Group justify="space-between">
                        <Text >
                            <span style={{ fontWeight: 'bold' }}>Water availability: </span> <span>{room?.water ? 'YES' : 'No'}</span>
                        </Text>
                        <Text >
                            <span style={{ fontWeight: 'bold' }}>Slots available: </span> <span>{room?.slot}</span>
                        </Text>
                    </Group>
                    <Group justify="space-between">
                        <Text >
                            <span style={{ fontWeight: 'bold' }}>Other Specs: </span>
                        </Text>
                        {room?.room_specs?.map((spec) => <span>{spec}</span>)}

                    </Group>

                </Paper>
            </Paper>

        </Container>
    )
}
