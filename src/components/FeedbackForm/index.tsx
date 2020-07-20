import React, { useState } from "react";
import { Modal, Button, Form, Input, message } from "antd";
import { Store } from "antd/lib/form/interface";
import axios from "axios";

interface IProps {
  visible: boolean;
  fnVisible: () => void;
}

interface IState {
  loading: {
    sending: boolean;
  }
}

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 24 },
};

const Component: React.FunctionComponent<IProps> = ({ visible, fnVisible }) => {
  const [form] = Form.useForm();

  const [state, setState] = useState<IState>({
    loading: {
      sending: false
    }
  });

  const { loading } = state;

  const onFinish = (values: Store) => {
    setState((s) => ({
      ...s,
      loading: {
        ...s.loading,
        sending: true
      }
    }));

    axios({
      method: "POST",
      url: "https://prabereg.ru/bot/message/request/send",
      data: values
    }).then(() => {
      setState((s) => ({
        ...s,
        loading: {
          ...s.loading,
          sending: false
        }
      }));
  
      message.success("Мы получили Ваш запрос и свяжемся с Вами в ближайшее время!");

      form.resetFields();
      fnVisible();
    }).catch((err) => {
      setState((s) => ({
        ...s,
        loading: {
          ...s.loading,
          sending: false
        }
      }));

      console.log(err);
  
      message.error("Упс! Что-то пошло не так, но мы уже в курсе и работаем над устранением проблемы. Позвоните нам по телефону.");
    });
  }

  const onFinishFailed = () => {

  }

  return (
    <Modal
      visible={visible}
      title="Запись на бесплатную консультацию"
      onCancel={fnVisible}
      footer={null}
    >
      <Form
        {...layout}
        form={form}
        layout="vertical"
        size="large"
        name="feedback"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="Как Вас зовут?"
          name="name"
          rules={[{ required: true, message: "Пожалуйста, укажите имя!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Номер телефона:"
          name="phone"
          rules={[{ required: true, message: "Пожалуйста, укажите номер!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Какой у Вас вопрос?"
          name="message"
          rules={[{ required: true, message: "Пожалуйста, напишите Ваш вопрос!" }]}
        >
          <Input.TextArea rows={5} style={{ resize: "none" }} />
        </Form.Item>
        <Form.Item style={{ textAlign: "center" }}>
          <Button type="primary" className="primary-btn" size="large" htmlType="submit" loading={loading.sending}>Отправить</Button>
        </Form.Item>
      </Form>
    </Modal>
  );
}

export default Component;