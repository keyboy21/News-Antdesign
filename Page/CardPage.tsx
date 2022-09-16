import { FC } from "react";
import useSWR from "swr";
import { cardFetcher } from "../hooks/fetcher";
import { News } from "../Types/Posts";
import CardComponent from "../components/CardComponent";
import { Row, Col, Spin } from "antd";

const CardPage: FC = () => {
  let date = new Date().toISOString().split("T")[0];
  const { data, error } = useSWR<News>(
    `https://newsapi.org/v2/everything?q=Apple&from=${date}&sortBy=popularity&apiKey=${import.meta.env.VITE_API_KEY}`,
    cardFetcher
  );
  if (error) return <div>ошибка загрузки</div>;
  if (!data) return <Spin size="large" />;
  return (
    <Row style={{ justifyContent: "center" }}>
      {data.articles.map((item, index) => (
        <Col key={index} xl={5} md={7} sm={11} style={{ margin: "20px auto" }}>
          <CardComponent
            title={item.title}
            urlToImage={item.urlToImage}
            name={item.source.name}
            author={item.author}
            publishedAt={item.publishedAt.slice(0, 10)}
            url={item.url}
          />
        </Col>
      ))}
    </Row>
  );
};

export default CardPage;
