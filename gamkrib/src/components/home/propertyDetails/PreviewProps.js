import { Container, Group, Image, Paper, SimpleGrid, Text } from '@mantine/core';
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
import { BiMoney } from 'react-icons/bi';


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

    const details = room?.images.map((pic) => {
        return <SwiperSlide>
            <Image src={pic} height='30rem' />
        </SwiperSlide>
    })


    return (
        <Container size='xl' color='blue' display="flex" sx={{ gap: '2rem' }}>
            <Paper withBorder sx={{ width: '40rem', height: '30rem' }}>
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                    {details}
                </Swiper>
            </Paper>
            <Paper withBorder sx={{ width: '20rem' }}>
                <Paper withBorder p="md" radius="md" >
                    <Group justify="space-between">
                        <Text size="xs" c="dimmed" className={classes.title}>
                            {room.property_name}
                        </Text>
                        <BiMoney className={classes.icon} size="1.4rem" stroke={1.5} />
                    </Group>

                    <Group align="flex-end" gap="xs" mt={25}>
                        <Text className={classes.value}>ji</Text>
                        <Text c={'teal'} fz="sm" fw={500} className={classes.diff}>
                            <span>ed%</span>
                            <BiMoney size="1rem" stroke={1.5} />
                        </Text>
                    </Group>

                    <Text fz="xs" c="dimmed" mt={7}>
                        Compared to previous month
                    </Text>
                </Paper>
            </Paper>

        </Container>
    )
}
