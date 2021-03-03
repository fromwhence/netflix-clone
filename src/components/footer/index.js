import React from 'react';
import { Container, Row, Column, Link, Title, Text, Select, Option, Break } from './styles/footer';

export default function Footer({ children, ...restProps}) {
  return (
    <Container {...restProps}>{children}
    </Container>
  )
}

Footer.Break = function FooterBreak({...restProps}) {
  return <Break {...restProps}></Break>
}

Footer.Row = function FooterRow({ children, ...restProps }) {
  return <Row {...restProps}>{children}</Row>
}

Footer.Column = function FooterColumn({ children, ...restProps }) {
  return <Column {...restProps}>{children}</Column>
}

Footer.Link = function FooterLink({ children, ...restProps }) {
  return <Link {...restProps}>{children}</Link>
}

Footer.Title = function FooterTitle({ children, ...restProps}) {
  return <Title {...restProps}>{children}</Title>
}

Footer.Text = function FooterText({ children, ...restProps}) {
  return <Text {...restProps}>{children}</Text>
}

Footer.Select = function FooterSelect({ children, ...restProps}) {
  return <Select {...restProps}>{children}</Select>
}

Footer.Option = function FooterOption({ children, ...restProps}) {
  return <Option {...restProps}>{children}</Option>
}



