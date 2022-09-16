import React from 'react'
import { Card, Typography, Popover } from 'antd';
const { Title, Text, Link } = Typography;

type props = {
  title: string,
  urlToImage?: string,
  name: string,
  publishedAt: string,
  url: string,
  author: string | null,
}

const CardComponent: React.FC<props> = ({ title, urlToImage, name, author, publishedAt, url }) => {
  return (
    <Popover title="Author" content={author} >
      <Card title={name} style={{ width: 'auto' }} extra={<a href={url}>More</a>} hoverable cover={<img alt="example" src={urlToImage} />}>
        <Title level={4}>{title}</Title>
        <Text>{publishedAt}</Text>
      </Card>
    </Popover>
  )
}

export default CardComponent