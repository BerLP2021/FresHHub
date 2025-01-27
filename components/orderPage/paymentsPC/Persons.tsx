import React, { useState } from 'react';

import InputLabel from '@mui/material/InputLabel';
import Typography from '@mui/material/Typography';
import SvgIcon from '@mui/material/SvgIcon';
import NumberInput from '../../numberInput/Input';

const PersonIcon = () => (
    <SvgIcon
        sx={{
            width: { mobile: '24px', tablet: '38px', desktop: '48px' },
            height: { mobile: '24px', tablet: '38px', desktop: '48px' },
        }}
    >
        <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M29.508 20C31.44 20 33.008 21.568 33.008 23.5V32.998C33.008 35.3855 32.0596 37.6752 30.3714 39.3634C28.6832 41.0516 26.3935 42 24.006 42C21.6185 42 19.3288 41.0516 17.6406 39.3634C15.9524 37.6752 15.004 35.3855 15.004 32.998V23.5C15.004 21.568 16.57 20 18.504 20H29.508ZM14.262 20C13.5416 20.8669 13.1083 21.9362 13.022 23.06L13.002 23.5V32.998C13.002 34.692 13.386 36.296 14.07 37.728C12.8846 38.0451 11.6421 38.0854 10.4386 37.8456C9.23511 37.6059 8.1029 37.0925 7.12949 36.3453C6.15609 35.5981 5.36758 34.6371 4.82493 33.5364C4.28228 32.4358 4.00002 31.2251 4 29.998V23.5C4.00003 22.6216 4.33034 21.7754 4.92536 21.1292C5.52038 20.4831 6.3366 20.0843 7.212 20.012L7.5 20H14.262ZM33.75 20H40.5C42.432 20 44 21.568 44 23.5V30C44.0003 31.2263 43.7186 32.4363 43.1768 33.5364C42.6349 34.6366 41.8474 35.5974 40.8751 36.3447C39.9028 37.092 38.7717 37.6058 37.5692 37.8464C36.3667 38.0869 35.125 38.0478 33.94 37.732C34.54 36.476 34.908 35.092 34.99 33.628L35.008 32.998V23.5C35.008 22.17 34.538 20.95 33.75 20ZM24 6C25.5913 6 27.1174 6.63214 28.2426 7.75736C29.3679 8.88258 30 10.4087 30 12C30 13.5913 29.3679 15.1174 28.2426 16.2426C27.1174 17.3679 25.5913 18 24 18C22.4087 18 20.8826 17.3679 19.7574 16.2426C18.6321 15.1174 18 13.5913 18 12C18 10.4087 18.6321 8.88258 19.7574 7.75736C20.8826 6.63214 22.4087 6 24 6ZM37 8C38.3261 8 39.5979 8.52678 40.5355 9.46447C41.4732 10.4021 42 11.6739 42 13C42 14.3261 41.4732 15.5979 40.5355 16.5355C39.5979 17.4732 38.3261 18 37 18C35.6739 18 34.4021 17.4732 33.4645 16.5355C32.5268 15.5979 32 14.3261 32 13C32 11.6739 32.5268 10.4021 33.4645 9.46447C34.4021 8.52678 35.6739 8 37 8ZM11 8C12.3261 8 13.5979 8.52678 14.5355 9.46447C15.4732 10.4021 16 11.6739 16 13C16 14.3261 15.4732 15.5979 14.5355 16.5355C13.5979 17.4732 12.3261 18 11 18C9.67392 18 8.40215 17.4732 7.46447 16.5355C6.52678 15.5979 6 14.3261 6 13C6 11.6739 6.52678 10.4021 7.46447 9.46447C8.40215 8.52678 9.67392 8 11 8Z"
                fill="#3E3B3B"
            />
        </svg>
    </SvgIcon>
);

export default function Persons() {
    const [quantity, setQuantity] = useState(1);
    return (
        <InputLabel
            sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: { mobile: '12px', tablet: '20px' },
                marginBottom: { mobile: '14px', tablet: '20px', desktop: '26px' },
                p: '1px',
            }}
        >
            <PersonIcon />
            <Typography
                sx={{
                    fontSize: { mobile: '18px', tablet: '22px', desktop: '26px' },
                    fontWeight: 700,
                    textAlign: 'start',
                    flexGrow: 1,
                }}
            >
                Number of persons
            </Typography>
            <NumberInput
                quantity={quantity}
                setQuantity={setQuantity}
                name="numberOfPersons"
                type="persons"
            />
        </InputLabel>
    );
}
