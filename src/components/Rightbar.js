import {Box} from '@mui/material'

function Rightbar() {
  return (
    <Box bgcolor='red' flex={2} p={3} sx={{display: {xs:'none',sm: 'block'}}}>Rightbar</Box>
  )
}

export default Rightbar