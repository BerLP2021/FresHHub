import React, { Suspense } from 'react';
import { Box, Typography } from '@mui/material';

import DishCard from '@/components/dishcard';
import SortSelect from '@/components/sortSelect/SortSelect';
import StubBlock from '../stubBlock/StubBlock';
import Loading from '../loading/Loading';

type Props = {
    title: string;
    categoryName: string;
    dishes: DishItem[];
};

export default async function CategoryItem({ dishes, title, categoryName }: Props) {

    const getLink = (id: string, productName: string) =>
        `/categories/${categoryName}/${id}/${productName?.trim()?.toLowerCase()?.replace(/\s+/g, '_')}`;

    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    flex: 1,
                    justifyContent: 'space-between',
                    alignContent: 'center',
                    margin: {
                        mobile: '16px 0 14px',
                        tablet: '25px 0 21px',
                        desktop: '44px 0 29px',
                    },
                }}
            >
                <Typography
                    variant="h2"
                    component="h1"
                    sx={{
                        '&::first-letter': {
                            textTransform: 'uppercase',
                        },
                    }}
                >
                    {title}
                </Typography>
                {
                    dishes.length
                        ? <Suspense fallback={null}><SortSelect /></Suspense>
                        : null
                }
            </Box>
            <section>
                <Box
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: {
                            mobile: 'repeat(2, 1fr)',
                            desktop: 'repeat(3, 1fr)',
                        },
                        columnGap: {
                            mobile: '16px',
                            tablet: '20px',
                        },
                        rowGap: {
                            mobile: '14px',
                            tablet: '20px',
                            desktop: '40px',
                        },
                        justifyContent: `${dishes.length ? 'flex-start' : 'center'}`,
                        pb: {
                            mobile: '40px',
                            tablet: '50px',
                            desktop: '120px',
                        }
                    }}
                >
                    {dishes.length ? (
                        dishes.map((dish) => <DishCard key={dish._id} item={{ ...dish, link: getLink(dish._id, dish.productName) }} />)
                    ) : (
                        <StubBlock />
                    )}
                </Box>
            </section>
        </>
    );
    return <Loading />
}
