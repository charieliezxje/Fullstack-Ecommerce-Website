import * as React from 'react';
import {
    Typography,
    Grid,
    Box,
    Container,
    Button,
    CircularProgress,
    Alert,
    Paper,
    styled,
} from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import ProductCard from '../components/ProductCard';

const StyledCarousel = styled(Carousel)({
    '& .Carousel-indicators-container': {
        bottom: '20px',
        '& button': {
            backgroundColor: 'white',
            opacity: 0.6,
            '&:hover': {
                opacity: 1,
            },
            '&.selected': {
                opacity: 1,
            },
        },
    },
});

function Home({ products, addToCart, error, loading }) {
    const bannerImages = [
        {
            url: 'https://images.fpt.shop/unsafe/filters:quality(90)/fptshop.com.vn/uploads/images/tin-tuc/171585/Originals/shopping-la-gi-3.jpg',
            title: 'Summer Sale - Up to 50% Off',
            description: 'Shop now for the best deals on summer essentials!'
        },
        {
            url: 'https://magesolution.com/wp-content/uploads/2022/07/1_7u7eYPpkr5baaBOzYcdNHw.jpeg',
            title: 'New Tech Gadgets',
            description: 'Explore the latest in tech and gadgets.'
        },
        {
            url: 'https://images.pexels.com/photos/3768005/pexels-photo-3768005.jpeg?cs=srgb&dl=pexels-willoworld-3768005.jpg&fm=jpg',
            title: 'Trending Fashion',
            description: 'Discover the newest fashion trends for this season.'
        },
    ];

    const featuredProducts = products.slice(0, 3); // Only display 3 featured products

    return (
        <Box sx={{ my: 4 }}>
            {/* Hero Section */}
            <Paper elevation={3} sx={{ borderRadius: 2, overflow: 'hidden', marginBottom: '2rem' }}>
                <StyledCarousel
                    animation="slide"
                    autoPlay={true}
                    interval={5000} // Adjust the interval time as needed
                    navButtonsAlwaysVisible={true}
                    navButtonsProps={{          // Customize the navigation buttons
                        style: {
                            backgroundColor: 'rgba(0, 0, 0, 0.5)',
                            color: '#fff',
                            borderRadius: 0
                        }
                    }}
                    indicatorIconButtonProps={{ // Customize the indicator icons
                        style: {
                            padding: '10px',    // 1
                        }
                    }}
                    activeIndicatorIconButtonProps={{
                        style: {
                            backgroundColor: '#fff' // 2
                        }
                    }}
                >
                    {bannerImages.map((item, i) => (
                        <Box key={i} sx={{ position: 'relative' }}>
                            <img src={item.url} alt={item.title} style={{ width: '100%', height: '400px', objectFit: 'cover' }} />
                            <Box sx={{
                                position: 'absolute',
                                bottom: 0,
                                left: 0,
                                width: '100%',
                                backgroundColor: 'rgba(0, 0, 0, 0.6)',  // Increased opacity
                                color: '#fff',
                                padding: '30px', // Increased padding
                                '& h4': {
                                    fontWeight: 700, // Bolder font weight for title
                                    marginBottom: '10px',
                                },
                            }}>
                                <Typography variant="h4" component="h2" gutterBottom sx={{ color: '#fff' }}>
                                    {item.title}
                                </Typography>
                                <Typography variant="body1" sx={{ color: '#fff' }}>
                                    {item.description}
                                </Typography>
                            </Box>
                        </Box>
                    ))}
                </StyledCarousel>
            </Paper>

            {/* Featured Products Section */}
            <Container maxWidth="lg">
                <Typography variant="h4" align="center" sx={{ my: 4, color: 'black', fontWeight: 700 }}>
                    Featured Products
                </Typography>
                {error ? (
                    <Alert severity="error">{error.message}</Alert>
                ) : loading ? (
                    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
                        <CircularProgress />
                    </Box>
                ) : (
                    <Grid container spacing={4}> {/* Increased spacing between cards */}
                        {featuredProducts.map((product) => (
                            <Grid item key={product._id} xs={12} sm={6} md={4}>
                                <ProductCard product={product} addToCart={addToCart} />
                            </Grid>
                        ))}
                    </Grid>
                )}
            </Container>

            {/* Call to Action */}
            <Box sx={{ textAlign: 'center', mt: 5 }}>
                <Button variant="contained" size="large" href="/shop">
                    Shop Now
                </Button>
            </Box>
        </Box>
    );
}

export default Home;
