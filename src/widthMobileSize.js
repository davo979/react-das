import React from 'react';

function widthMobileSize(Component) {
    return class extends React.Component {
        state = {
            width: window.innerWidth,
            height: window.innerHeight
        }
        constructor(props) {
            super(props);
            this.handleWindowResize=this.handleWindowResize.bind(this);
        }
        componentDidMount() {
            window.addEventListener('resize', this.handleWindowResize, false)
        }
        componentWillUnmount() {
            window.removeEventListener('resize', this.handleWindowResize)
        }
        handleWindowResize() {
            this.setState({
                width: window.innerWidth,
                height: window.innerHeight
            })
        }
        render() {
            return(
                <Component{...this.props} {...this.state} />
            )
        }
    }
}
export default widthMobileSize;