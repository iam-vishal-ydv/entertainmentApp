import React from 'react';
import { Skeleton, Stack } from '@mui/material';

const CardSkeleton = () => {
  return (
    <Stack spacing={2} sx={{ width: '100%', height: '100%' }} style={{ backgroundColor: "white", borderRadius: "10px" }}>
      <Skeleton variant="rectangular" width="100%" height={200} />
      <Skeleton variant="text" width="60%" height={30} />
      <div className='flex justify-between' style={{ marginBottom: '16px' }}>
        <Skeleton variant="text" width="40%" height={30} />
        <Skeleton variant="text" width="40%" height={30} />
      </div>
    </Stack>
  );
};

export default CardSkeleton;
