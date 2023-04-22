import * as React from 'react';
import Paper from '@mui/material/Paper';
import { Button, Typography } from "@mui/material";
import { Component } from 'react';
import "../styles/Styles.css";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

class Cards extends Component {

    render() {
        return (
            <>
                <div className='productList'>
                    <Paper className='card'>
                        <img className='prodImg' src="https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1667547108_4535010.jpg?w=480&dpr=1.3" />
                        <Typography id='prodDescription'>Black Panther: Wakanda Forever
                            Oversized Full Sleeve T-Shirts 
                        </Typography>
                        <Typography id='prodDescription'>₹ 1199</Typography>
                        <Button id='buyNowBtn' variant='contained'>Buy Now</Button>
                        <Button id='addToCartBtn' variant='outlined'>Add to Cart</Button>
                    </Paper>
                    <Paper className='card'>
                        <img className='prodImg' src="https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1676622404_5325383.jpg?format=webp&w=768&dpr=1.3" />
                        <Typography id='prodDescription'>Black Panther: Wakanda
                            Men High Top Sneakers Leather Quality
                        </Typography>
                        <Typography id='prodDescription'>₹ 2499 16% OFF</Typography>
                        <Button id='buyNowBtn' variant='contained'>Buy Now</Button>
                        <Button id='addToCartBtn' variant='outlined'>Add to Cart</Button>
                    </Paper>
                    <Paper className='card'>
                        <img className='prodImg' src="https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1682163636_5526683.jpg?format=webp&w=300&dpr=1.3" />
                        <Typography id='prodDescription'>DC: Geometry
                            Summer Shirts For Men New Arrival Half Sleeves
                        </Typography>
                        <Typography id='prodDescription'>₹ 1199</Typography>
                        <Button id='buyNowBtn' variant='contained'>Buy Now</Button>
                        <Button id='addToCartBtn' variant='outlined'>Add to Cart</Button>
                    </Paper>
                    <Paper className='card'>
                        <img className='prodImg' src="https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1673712608_2393433.jpg?format=webp&w=480&dpr=1.3" />
                        <Typography id='prodDescription'>Solids: Charcoal Melange
                            Men Utility Shorts 100% Cotton Shorts
                        </Typography>
                        <Typography id='prodDescription'>₹ 1199</Typography>
                        <Button id='buyNowBtn' variant='contained'>Buy Now</Button>
                        <Button id='addToCartBtn' variant='outlined'>Add to Cart</Button>
                    </Paper>
                </div>

            </>

        )
    }
}

export default Cards;