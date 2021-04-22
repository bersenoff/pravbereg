import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { message } from "antd";
import { Section } from "components";
import Loader from "react-loader-spinner";
import axios from "axios";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

interface IState {
  post: any;
  loading: boolean;
  titleHasBeenSet: boolean;
}

const Component: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const [state, setState] = useState<IState>({
    post: null,
    loading: false,
    titleHasBeenSet: false
  });

  const { post, loading, titleHasBeenSet } = state;

  if (post && !titleHasBeenSet) document.title = `Правый Берег - ${post.title}`;

  const getPost = () => {
    setState((s) => ({
      ...s,
      loading: true
    }));
    
    axios({
      method: "POST",
      url: "https://prabereg.ru/api/blog/post/get",
      data: { id }
    }).then((res) => {
      if (!res.data.data) {
        document.location.href = '/blog';
      } else {
        setState((s) => ({
          ...s,
          post: res.data.data,
          loading: false
        }));
      }
    }).catch((err) => {
      setState((s) => ({
        ...s,
        loading: false
      }));
      message.error(err.message);
    });
  }

  useEffect(() => {
    getPost();
  }, []);

  return (
    <Section>
      <div className="block-item">
        {loading ?
          <div style={{ textAlign: "center" }}>
            <Loader type="Oval" color="#762a2c" />
          </div>
        :
          <>
            {post &&
              <>
                <div className="page-title">{ post.title }</div>
                <div dangerouslySetInnerHTML={{ __html: post.content }} />
              </>
            }
          </>
        }
      </div>
    </Section>
  );
}

export default Component;