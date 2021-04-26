import React, { useState, useEffect } from "react";
import { Section } from "components";
import SunEditor, { buttonList } from "suneditor-react";
import { useParams } from "react-router-dom";
import { Button, Input, message } from "antd";
import { IState } from "./@types";
import Loader from "react-loader-spinner";
import axios from "axios";
import "suneditor/dist/css/suneditor.min.css";

const Component: React.FC = () => {
  const [state, setState] = useState<IState>({
    post: null,
    input: {
      id: null,
      title: "",
      short_content: "",
      content: ""
    },
    loading: {
      post: false,
      submitting: false
    }
  });

  const { post, input, loading } = state;

  const { id } = useParams<{ id: string }>();

  const handleChangeField = (fieldName: string, value: string) => {
    setState((s) => ({
      ...s,
      input: {
        ...s.input,
        [fieldName]: value
      }
    }));
  }

  const getPost = () => {
    setState((s) => ({
      ...s,
      loading: {
        ...s.loading,
        post: true
      }
    }));

    axios({
      method: "POST",
      url: "http://localhost:9001/api/blog/post/get",
      data: { id }
    }).then((res) => {
      if (!res.data.data) document.location.href="/blog";
      setState((s) => ({
        ...s,
        loading: {
          ...s.loading,
          post: false
        },
        post: res.data.data,
        input: res.data.data
      }));
    }).catch((err) => {
      setState((s) => ({
        ...s,
        loading: {
          ...s.loading,
          post: false
        }
      }));

      message.error(err.message);
    });
  }

  const submit = () => {
    setState((s) => ({
      ...s,
      loading: {
        ...s.loading,
        submitting: false
      }
    }));

    axios({
      method: "POST",
      url: "http://localhost:9001/api/blog/post/edit",
      data: { ...input }
    }).then(() => {
      setState((s) => ({
        ...s,
        loading: {
          ...s.loading,
          submitting: false
        }
      })); 

      message.success("Изменения успешно сохранены!");
    }).catch((err) => {
      setState((s) => ({
        ...s,
        loading: {
          ...s.loading,
          submitting: false
        }
      }));

      message.error(err.message);
    });
  }

  useEffect(() => {
    getPost();
  }, []);

  const allowSubmit = post && (post.title !== input.title || post.short_content !== input.short_content || post.content !== input.content);

  console.log("work it");

  return (
    <Section
      title="Редактирование статьи"
      iconComponent={<i className="fas fa-pen-square"></i>}
    >
      {loading.post ?
          <div style={{ textAlign: "center" }}>
            <Loader type="Oval" color="#762a2c" />
          </div>
        :
          <>
            {post &&
              <>
                <div className="block-item" style={{ marginBottom: "1rem" }}>
                  <Input 
                    size="large" 
                    placeholder="Заголовок статьи..."
                    value={input.title}
                    onChange={(e) => handleChangeField("title", e.target.value)}
                  />
                </div>
                <div className="block-item" style={{ marginBottom: "1rem" }}>
                  <Input.TextArea 
                    value={input.short_content}
                    onChange={(e) => handleChangeField("short_content", e.target.value)}
                    placeholder="Краткое описание..."
                    rows={5}
                    size="large"
                    maxLength={1000}
                  />
                </div>
                <div className="block-item">
                  <SunEditor 
                    lang="ru" 
                    setContents={input.content} 
                    onChange={(content) => handleChangeField("content", content)} 
                    setOptions={{
                      buttonList: buttonList.complex
                    }}
                    setDefaultStyle="font-family: inherit; font-size: 1rem; color: rgb(118, 42, 44)"
                    width="100%"
                    height="400"
                  />
                  <div style={{ textAlign: "center", marginTop: "1rem" }}>
                    <Button 
                      className="primary-btn" 
                      type="primary" 
                      size="large" 
                      loading={loading.submitting} 
                      onClick={submit}
                      disabled={!allowSubmit}>Сохранить изменения</Button>
                  </div>
                </div>
              </>
            }
          </>
        }
    </Section>
  );
}

export default Component;