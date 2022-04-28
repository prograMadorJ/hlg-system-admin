import React, { useState, useEffect } from 'react';

import globals from '../globals';
import {
  PageContainer,
  Header,
  LoginContainer,
  Title,
} from './styles/Login.style';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import Card from '../components/Card';
import Logo from '../components/Logo';
import Button from '../components/Button';
import Container from '../components/Container';
import { InputIcon } from '../components/Input';
import ErrorMessage from '../components/forms/ErrorMessage';
import { LinearLoading } from '../components/Loading';
import { useAuth } from '../contexts/Auth';
import { authenticationService } from '../services/AuthService';
import { useNavigate } from 'react-router-dom';

export default function () {
  const [loading, setLoading] = useState(false);
  const auth = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    navigate(auth.isAuth ? '/' : '/login')
  }, [auth])


  const schema = yup.object({
    email: yup
      .string()
      .email('E-mail inválido.')
      .required('E-mail é obrigatório.'),
    password: yup.string().required('Senha é obrigatório.'),
  });

  const {
    handleSubmit,
    register,
    getFieldState,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    setLoading(true);

    authenticationService({
      data,
      success: () => {
        auth.setIsAuth(true);
      },
      errors: {
        500: () => {
          
        },
        401: () => {
          
        
        },
        unknown: () => {
          
        },
      },
      after: () => setLoading(false),
    });
  };

  return (
    <PageContainer>
      <Header>
        <Logo />
        <Title>{globals.AppTitle}</Title>
      </Header>
      <LoginContainer>
        <Card>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Container className="field-container">
              <InputIcon
                placeholder="e-mail"
                positionIcon="left"
                icon={<i className="fa-solid fa-at"></i>}
                type="text"
                className="email"
                name="email"
                {...register('email')}
                isError={getFieldState('email').invalid}
              
              />
              <ErrorMessage errors={errors} name="email" />
            </Container>
            <Container className="field-container">
              <InputIcon
                placeholder="senha"
                positionIcon="left"
                icon={<i className="fa-solid fa-key"></i>}
                type="password"
                className="password"
                name="password"
                {...register('password')}
                isError={getFieldState('password').invalid}
              />
              <ErrorMessage errors={errors} name="password" />
            </Container>
            <Container className="form-controls">
              <Button type="submit" styleButton="primary" disabled={loading}>
                LOGIN
              </Button>
            </Container>
          </form>
          <LinearLoading text="aguarde..." isHidden={!loading} />
        </Card>
      </LoginContainer>
    </PageContainer>
  );
}
