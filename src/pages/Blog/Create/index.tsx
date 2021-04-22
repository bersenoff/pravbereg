import React, { useState } from "react";
import { Section } from "components";
import SunEditor, { buttonList } from "suneditor-react";
import { Button, Input, message } from "antd";
import axios from "axios";
import "suneditor/dist/css/suneditor.min.css";

const Component: React.FC = () => {
  const [title, setTitle] = useState(null);
  const [shortContent, setShortContent] = useState(null);
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(false);

  const reset = () => {
    setTitle(null);
    setShortContent(null);
    setContent(null);
    setLoading(false);
  }

  const submit = () => {
    setLoading(true);

    axios({
      method: "POST",
      url: "http://prabereg.ru/api/blog/create",
      data: {
        title,
        short_content: shortContent,
        content
      }
    }).then((res) => {
      document.location.href = `/blog/post/${res.data.data.id}`;
      reset();
    }).catch((err) => {
      setLoading(false);
      message.error(err.message);
    });
  }

  // TODO: доработать, логика кривая
  const allowSubmit = title && title.length > 0 && content && content.length > 0 && shortContent && shortContent.length > 0;

  return (
    <Section
      title="Написать статью"
      iconComponent={<i className="fas fa-pen-square"></i>}
    >
      <div className="block-item" style={{ marginBottom: "1rem" }}>
        <Input 
          size="large" 
          placeholder="Заголовок статьи..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="block-item" style={{ marginBottom: "1rem" }}>
        <Input.TextArea 
          value={shortContent}
          onChange={(e) => setShortContent(e.target.value)}
          placeholder="Краткое описание..."
          rows={5}
          size="large"
          maxLength={1000}
        />
      </div>
      <div className="block-item">
        <SunEditor 
          lang="ru" 
          setContents={content} 
          onChange={(content) => setContent(content)} 
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
            loading={loading} 
            onClick={submit}
            disabled={!allowSubmit}>Опубликовать</Button>
        </div>
      </div>
    </Section>
  );
}

export default Component;