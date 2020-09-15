import React, { Component } from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
  white-space: nowrap;
`;

class PageFocus extends Component {
    componentDidMount() {
        // let's initial focus on homepage be first tabbable element
        if(this.props.headerText !== "Hannah Arnett | Portfolio | Web Developer") {
            this.header.focus();
        }
        document.title = this.props.headerText;
    }
    render() {
        const { children, headerText } = this.props;
        return (
            <div aria-live="polite" role="region">
                <section>
                    <Title ref={header => this.header = header} tabIndex="-1">
                        {`You are now on the ${headerText}`}
                    </Title>
                    {children}
                </section>
            </div>
        )
    }
}

export default PageFocus;