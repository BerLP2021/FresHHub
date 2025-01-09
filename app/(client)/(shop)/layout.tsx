import { Suspense } from 'react';
import { Metadata } from 'next';
import { Box, Toolbar } from '@mui/material';

import NavMenu from '@/components/header/navMenu';
import NavBar from '@/components/header/navBar';
import Footer from '@/components/footer';
import Header from '@/components/header';
import BreadCrumbs from '@/components/breadcrumbs/Breadcrumbs';

export const metadata: Metadata = {
    title: 'FresHHub',
    description: 'Hot, delicious, fresh dishes with free delivery to everyone',
};

export default function layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Header>
                <NavMenu />
                <NavBar />
            </Header>
            <Toolbar
                sx={{
                    '&': {
                        minHeight: { mobile: '59px', tablet: '83px', desktop: '111px' },
                    },
                }}
            />
            <main style={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
            }}>
                <Box className="container" sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    flexGrow: 1,
                }}>
                    <Suspense fallback={null}>
                        <BreadCrumbs />
                    </Suspense>
                    {children}
                </Box>
            </main>

            <Footer />
        </>
    );
}
