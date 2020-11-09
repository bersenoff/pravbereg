import React, { useState } from "react";
import { Modal, Button, Form, Input, message, Select } from "antd";
import { Store } from "antd/lib/form/interface";
import axios from "axios";
import "./index.css";

interface IProps {
  defaultCategory?: string
}

interface IState {
  visible: boolean,
  loading: {
    sending: boolean;
  }
}

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 24 },
};

const Component: React.FunctionComponent<IProps> = ({ defaultCategory }) => {
  const [form] = Form.useForm();

  const [state, setState] = useState<IState>({
    visible: false,
    loading: {
      sending: false
    }
  });

  const { visible, loading } = state;

  const handleVisible = () => {
    setState((s) => ({
      ...s,
      visible: (visible) ? false : true
    }));
  }

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
        visible: false,
        loading: {
          ...s.loading,
          sending: false
        }
      }));
  
      message.success("Мы получили Ваш запрос и свяжемся с Вами в ближайшее время!");

      form.resetFields();
    }).catch((err) => {
      setState((s) => ({
        ...s,
        loading: {
          ...s.loading,
          sending: false
        }
      }));
  
      message.error("Упс! Что-то пошло не так, но мы уже в курсе и работаем над устранением проблемы. Позвоните нам по телефону.");
    });
  }

  return (
    <>
    <Modal
      visible={visible}
      title="Запись на бесплатную консультацию"
      onCancel={handleVisible}
      footer={null}
    >
      <Form
        {...layout}
        form={form}
        layout="vertical"
        size="middle"
        name="feedback"
        onFinish={onFinish}
      >
        <Form.Item
          label="Категория услуг"
          name="category"
          initialValue={defaultCategory}
          rules={[{ required: true, message: "Пожалуйста, укажите категорию услуг!" }]}
        >
          <Select showSearch={true}>
            <Select.Option value="Переговоры и медиация">Переговоры и медиация</Select.Option>
            <Select.Option value="Подготовка договоров и составление исков">Подготовка договоров и составление исков</Select.Option>
            <Select.Option value="Представительство в суде и в государственных органах">Представительство в суде и в государственных органах</Select.Option>
            <Select.Option value="Исполнительное производство">Исполнительное производство</Select.Option>
            <Select.Option value="Работа">Работа</Select.Option>
            <Select.Option value="Семья">Семья</Select.Option>
            <Select.Option value="Недвижимость">Недвижимость</Select.Option>
            <Select.Option value="Наследство">Наследство</Select.Option>
            <Select.Option value="Бизнес">Бизнес</Select.Option>
            <Select.Option value="Взыскание долгов">Взыскание долгов</Select.Option>
            <Select.Option value="Налоги">Налоги</Select.Option>
            <Select.Option value="Банкротство">Банкротство</Select.Option>
            <Select.Option value="Защита прав потребителей">Защита прав потребителей</Select.Option>
            <Select.Option value="Жилищные споры">Жилищные споры</Select.Option>
            <Select.Option value="Помощь при ДТП">Помощь при ДТП</Select.Option>
            <Select.Option value="Услуги адвоката по уголовным делам">Услуги адвоката по уголовным делам</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item
          label="Как Вас зовут?"
          name="name"
          rules={[{ required: true, message: "Пожалуйста, укажите имя!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Номер телефона"
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
    <Button type="primary" className="primary-btn promo-btn" size="large" onClick={handleVisible}>Бесплатная консультация</Button>
    </>
  );
}

export default Component;