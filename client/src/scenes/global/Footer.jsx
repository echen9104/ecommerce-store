import { useTheme } from "@mui/material";
import { Box, Typography } from '@mui/material';
import { shades } from "../../theme";

const Footer = () => {
    const {
        palette: { neutral },
    } = useTheme();

    return (
        <Box mt="70px" p="40px 0" backgroundColor={neutral.light}>
            <Box width="80%" margin="auto" display="flex"
                justifyContent="space-between" flexWrap="wrap"
                rowGap="30px" columnGap="clamp(20px, 30px, 40px)"
            >
                <Box width="clamp(20%, 30%, 40%)">
                    <Typography variant="h4" fontWeight="bold" fontSize="20px"
                        mb="30px" color={shades.secondary[400]}
                    >
                        NewClo
                    </Typography>
                    <div>
                        Assumenda dictumst nullam occaecati, dictumst! Ducimus. 
                        Ullam a labore suscipit. Reiciendis similique nisl nonummy 
                        justo nesciunt facilisis fugiat, fusce iaculis rutrum consequat! 
                        Lorem. Ipsum? Pretium facere velit autem congue, consequat.
                    </div>
                </Box>

                <Box>
                    <Typography variant="h4" fontWeight="bold" fontSize="16px" mb="30px">
                        About Us
                    </Typography>
                    <Typography mb="24px">Careers</Typography>
                    <Typography mb="24px">Our Stores</Typography>
                    <Typography mb="24px">Terms & Conditions</Typography>
                    <Typography mb="24px">Privacy Policy</Typography>
                </Box>

                <Box>
                    <Typography variant="h4" fontWeight="bold" fontSize="16px" mb="30px">
                        Customer Support
                    </Typography>
                    <Typography mb="24px">Help Center</Typography>
                    <Typography mb="24px">FAQs</Typography>
                    <Typography mb="24px">Track Your Order</Typography>
                    <Typography mb="24px">Returns & Refunds</Typography>
                </Box>

                <Box width="clamp(20%, 25%, 30%)">
                    <Typography variant="h4" fontWeight="bold" fontSize="16px" mb="30px">
                        Contact Us
                    </Typography>
                    <Typography mb="24px">617 Somewhere St, Boston, MA 12345</Typography>
                    <Typography mb="24px">Email: erichbchen@gmail.com</Typography>
                    <Typography mb="24px">1-800-NEWCLO</Typography>
                </Box>
            </Box>
        </Box>
    )
}

export default Footer;