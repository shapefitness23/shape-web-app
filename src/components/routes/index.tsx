import React, { Suspense } from 'react';
import { Skeleton } from 'antd';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Dashboard } from '../dashboard';
import { StretchLayout } from './styles';
import { Clients } from '../clients';


export const Path = {
  HOME: '/',
  CLIENTS: '/clients',
  CALENDAR: '/calendar',
  WORKOUT_PLAN: '/workoutPlan',
  DIET_PLAN: '/dietPlan',
  HABITS: '/habits',
}

export const AuthorizedRoutes = () => {

  const routes = [
    {
      path: Path.HOME,
      element: <Dashboard />,
    },
    {
      path: Path.CLIENTS,
      element: <Clients />,
    },
    {
      path: Path.CALENDAR,
      element: <Clients />,
    },
    {
      path: Path.WORKOUT_PLAN,
      element: <Clients />,
    },
    {
      path: Path.DIET_PLAN,
      element: <Clients />,
    },
    {
      path: Path.HABITS,
      element: <Clients />,
    },
  ]

  return (
    <Suspense
      fallback={
        <Skeleton>
          <h1>This is loading screen</h1>
        </Skeleton>
      }
    >
      <Routes>
        {
          routes.map((route) =>
            <Route path={route.path} element={route.element} />
          )
        }
        <Route path="*" element={<Navigate to={Path.HOME} />} />
      </Routes>
    </Suspense>
  )
}