import { Box, CircularProgress } from '@mui/material';

function Loading() {
    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flex: 1,
        }}>
            <CircularProgress />
        </Box>
    )
}

export default Loading