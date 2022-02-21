import React, { Component } from 'react' ;
import { ThemeContext } from '../Contexts/ThemeContext';

class BookList extends Component {
    static contextType = ThemeContext; 
    render() { 
        const { isLightTheme, light, dark } = this.context; 
        const theme = isLightTheme ? light : dark ;
        return (
            <div className='book-list' style={{background: theme.bg, color: theme.syntax}}>
                <ul>
                    <li style={{ background: theme.ui}}>The Rational male</li>
                    <li style={{ background: theme.ui}}>the unplagged Alpha</li>
                    <li style={{ background: theme.ui}}>No more mr nice guy</li>
                </ul>
            </div>
        );
    }
}
 
export default BookList;