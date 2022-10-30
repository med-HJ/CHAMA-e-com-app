import React from 'react'
import Footer from '../components/footer'
import Icon from '../components/icons'

export function FooterContainer() {
    return (
        <Footer>
            <Footer.Wrapper>
            <Footer.Row>
                <Footer.Column>
                <Footer.Title>About Us</Footer.Title>
                    <Footer.Link href="#">Company info</Footer.Link>
                    <Footer.Link href="#">News</Footer.Link>
                    <Footer.Link href="#">Investors</Footer.Link>
                    <Footer.Link href="#">Careers</Footer.Link>
                    <Footer.Link href="#">Conditions of Use</Footer.Link>
                    <Footer.Link href="#">Privacy Notice</Footer.Link>
                </Footer.Column>
                
                <Footer.Column>
                    
                <Footer.Title>Services</Footer.Title>
                    <Footer.Link href="#">Delivery</Footer.Link>
                    <Footer.Link href="#">Return</Footer.Link>
                    <Footer.Link href="#">Learn to sell</Footer.Link>
                    <Footer.Link href="#">Ordered</Footer.Link>
                    <Footer.Link href="#">Order Status</Footer.Link>
                    <Footer.Link href="#">Size guide</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                <Footer.Title>Help & Contact</Footer.Title>
                    <Footer.Link href="#">Seller Information Center</Footer.Link>
                    <Footer.Link href="#">How can we help?</Footer.Link>
                    <Footer.Link href="#">Subscribe to emails</Footer.Link>
                    <Footer.Link href="#">Give feedback</Footer.Link>
                    <Footer.Link href="#">Blogs</Footer.Link>
                    
                </Footer.Column>
                <Footer.Column>
                <Footer.Title>Social</Footer.Title>
                    <Footer.Link href="#"><Icon className="fab fa-facebook-f" />Facebook</Footer.Link>
                    <Footer.Link href="#"><Icon className="fab fa-instagram" />Instagram</Footer.Link>
                    <Footer.Link href="#"><Icon className="fab fa-youtube" />Youtube</Footer.Link>
                    <Footer.Link href="#"><Icon className="fab fa-twitter" />Twitter</Footer.Link>
                </Footer.Column>
            </Footer.Row>
            </Footer.Wrapper>
        </Footer>
    )
}